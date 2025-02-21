import  { useState, useEffect } from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Creation } from "../models/creation";



export default function CardCarrousel() {
  const [creations, setCreations] = useState<Creation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Récupération des données depuis l'API
  useEffect(() => {
    const fetchCreations = async () => {
      try {
        const response = await fetch("http://preprodback.karim-portfolio.xyz/api/Creation/GetCreations");  // Remplacez cette URL par l'URL réelle de votre API
        if (!response.ok) {
          throw new Error("Erreur de récupération des créations");
        }
        const data = await response.json();
        setCreations(data);  // Met à jour l'état avec les créations
        setLoading(false);
    } catch {
        setError("Impossible de récupérer les informations des créations");
      } finally {
        setLoading(false);
      }
    };

    fetchCreations();
  }, []);

  // Affichage si les données sont en cours de chargement ou en cas d'erreur
  if (loading) {
    return <Typography>Chargement...</Typography>;
  }

  if (error) {
    return <Typography>{error}</Typography>;
  }

  return (
    <div>
      {creations.map((creation) => (
        <Card
          key={creation.id}
          sx={{
            width: { xs: "250px", sm: "300px", md: "400px" },
            margin: "auto",
            backgroundColor: "transparent",
            overflow: "hidden",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={creation.pictureUrl }  
              alt={creation.name}
              sx={{
                objectFit: "cover",
                height: { xs: "250px", sm: "300px", md: "400px" },
              }}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {creation.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
