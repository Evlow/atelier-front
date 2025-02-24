import { useState, useEffect } from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Creation } from "../../models/creation";

export default function CardCarrousel() {
  const [creations, setCreations] = useState<Creation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Récupération des données depuis l'API
  useEffect(() => {
    const fetchCreations = async () => {
      try {
        const response = await fetch("http://preprodback.karim-portfolio.xyz/api/Creation/GetCreations");
        if (!response.ok) {
          throw new Error("Erreur de récupération des créations");
        }
        const data = await response.json();
        setCreations(data);
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
      {creations.map((creation) => {
        const firstImage = Array.isArray(creation.pictureUrls) ? creation.pictureUrls[0] : creation.pictureUrls;
        const firstVideo = Array.isArray(creation.videoUrls) ? creation.videoUrls[0] : creation.videoUrls;
        const isVideo = firstVideo !== undefined && firstVideo !== null;

        return (
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
              {isVideo ? (
                <video
                  src={firstVideo}
                  controls
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                    border: "5px solid white",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
                  }}
                />
              ) : (
                <CardMedia
                  component="img"
                  image={firstImage}
                  alt={creation.name}
                  sx={{
                    objectFit: "cover",
                    height: { xs: "250px", sm: "300px", md: "400px" },
                  }}
                />
              )}
              <CardContent>
                <Typography variant="h6" component="div">
                  {creation.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
}
