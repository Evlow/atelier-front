import { LoadingButton } from '@mui/lab';
import { Box, Container, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginFormData {
  userName: string;
  password: string;
}

interface Response {
  token: string;
  userId: string;
}

export default function Login() {
  const [formData, setFormData] = useState<LoginFormData>({
    userName: '',
    password: '',
  });

  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const baseURL = process.env.REACT_APP_API_BASE_URL;
      const response = await fetch(`${baseURL}Account/Login/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Une erreur s\'est produite');
      } else {
        const responseData: Response = await response.json();
        localStorage.setItem('authToken', responseData.token);
        navigate('/dashboard');
      }
    } catch (err) {
      console.error('Erreur lors de la connexion', err);
      setError('Une erreur s\'est produite lors de la connexion');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Typography variant="h2" sx={{ textAlign: "center" }}>
        Espace administrateur
      </Typography>
      <Container
        component={Paper}
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 8,
          mt: 4,
          backgroundColor: "#E7E2E1",
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            label="Nom d'utilisateur *"
            name="userName" 
            value={formData.userName}
            onChange={handleChange}
            error={!!error}
            helperText={error}
          />
          <TextField
            variant="standard"
            margin="normal"
            fullWidth
            label="Mot de passe *"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!error}
            helperText={error}
          />
          <LoadingButton
            loading={loading}
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: "20px",
              mb: '20px',
              backgroundColor: "#640a02",
              borderColor: "#e7e2e1",
              color: "#e7e2e1",
              fontFamily: "Alice",
            }}
          >
            Se connecter
          </LoadingButton>
        </Box>
      </Container>
    </div>
  );
}
