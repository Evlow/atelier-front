import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import api from "../axios/configAxios";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  
  // États des champs
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setApiError(null);
    setIsSubmitting(true);

    // Vérifier si les mots de passe correspondent
    if (password !== confirmPassword) {
      setApiError("Les mots de passe ne correspondent pas.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Appel à l'API avec notre instance Axios
      const response = await api.post("Account/Register/register", {
        userName,
        email,
        password,
      });

      console.log("Réponse API :", response.data);
      navigate("/connexion"); 
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response?.data) {
        setApiError(error.response.data.message || "Une erreur est survenue.");
      } else {
        setApiError("Une erreur est survenue. Veuillez réessayer.");
      }
      console.error("Erreur API :", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container component={Paper} maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 4 }}>
      <Typography component="h1" variant="h5">
        Inscription test
      </Typography>
      {apiError && <Typography color="error">{apiError}</Typography>}

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          variant="standard"
          margin="normal"
          fullWidth
          label="Nom d'utilisateur"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <TextField
          variant="standard"
          margin="normal"
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          variant="standard"
          margin="normal"
          fullWidth
          label="Mot de passe"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <TextField
          variant="standard"
          margin="normal"
          fullWidth
          label="Confirmez le mot de passe"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <LoadingButton
          loading={isSubmitting}
          disabled={isSubmitting}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Inscription
        </LoadingButton>
      </Box>
    </Container>
  );
}
