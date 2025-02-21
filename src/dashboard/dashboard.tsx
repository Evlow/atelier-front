import { Container, Typography, CircularProgress, Alert, Card, CardContent, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  userName: string;
  email: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setError("Utilisateur non authentifié. Redirection...");
        setTimeout(() => navigate("/connexion"), 2000);
        return;
      }

      try {
        const response = await fetch("http://preprodback.karim-portfolio.xyz/api/Account/GetCurrentUser/currentUser", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }

        const data: User = await response.json();
        setUser(data);
      } catch {
        setError("Impossible de récupérer les informations utilisateur");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {user && (
        <Card>
          <CardContent>
            <Typography variant="h5">Bienvenue, {user.userName}!</Typography>
            <Typography variant="body1">Email: {user.email}</Typography>
            <Button 
              variant="contained" 
              color="primary" 
              style={{ marginTop: "20px" }}
              onClick={() => {
                localStorage.removeItem("authToken");
                navigate("/");
              }}
            >
              Se déconnecter
            </Button>
          </CardContent>
        </Card>
      )}
    </Container>
  );
}
