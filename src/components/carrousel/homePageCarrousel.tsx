import { useEffect, useState } from "react";
import { Creation } from "../../models/creation";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import "./homePageCarrousel.css";

export default function HomePageCarrousel() {
  const [creations, setCreations] = useState<Creation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCreations = async () => {
      try {
        const response = await fetch(
          "http://preprodback.karim-portfolio.xyz/api/Creation/GetCreations"
        );
        if (!response.ok)
          throw new Error("Erreur lors de la récupération des créations.");
        const data: Creation[] = await response.json();
        setCreations(data);
      } catch (err) {
        setError("Impossible de charger les créations.");
        console.error("Erreur lors de la récupération des créations:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCreations();
  }, []);

  if (loading)
    return <CircularProgress style={{ display: "block", margin: "auto" }} />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <div style={{ padding: "20px" }}>
      <Typography
        variant="h2"
        fontFamily="Lovers"
        sx={{
          textAlign: "left",
          fontSize: { xs: "4rem", md: "6rem" },
        }}
      >
        Les dernières créations
      </Typography>

      {/* Conteneur avec défilement horizontal */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "10px",
          paddingBottom: "10px",
          scrollbarWidth: "none", // Masque la barre de défilement pour Firefox
          // @ts-expect-error: On ignore le type pour la propriété spécifique à MS
          "-ms-overflow-style": "none", // Masque la barre de défilement pour IE et Edge
        }}
      >
        {creations.map((creation) => {
          const firstVideo =
            Array.isArray(creation.videoUrls) && creation.videoUrls.length > 0
              ? creation.videoUrls[0]
              : null;

          const firstImage =
            Array.isArray(creation.pictureUrls) &&
            creation.pictureUrls.length > 0
              ? creation.pictureUrls[0]
              : null;

          return (
            <Link
              key={creation.id}
              to={`/creation/${creation.id}`}
              style={{ textDecoration: "none", flexShrink: 0 }}
            >
              <Card
              className="carrousel-card"
                sx={{
                  backgroundColor: "transparent",
                  overflow: "hidden",
                  position: "relative",
                  transition: "transform 0.3s ease",
                  height: "100%",
                  width: "350px", // Fixe la largeur de chaque carte
                  "&:hover": {
                    transform: "none",
                  },
                }}
              >
                <CardActionArea>
                  {firstVideo ? (
                    <div style={{ position: "relative" }}>
                      <video
                        src={firstVideo}
                        controls
                        style={{
                          width: "100%",
                          height: "350px", // Fixe la hauteur du vidéo
                          objectFit: "cover", // L'image s'adapte sans déformation
                        }}
                      />
                    </div>
                  ) : firstImage ? (
                    <CardMedia
                      component="img"
                      image={firstImage}
                      alt={creation.name}
                      sx={{
                        objectFit: "cover",
                        width: "100%", // Fixe la largeur de l'image
                        height: "350px", // Fixe la hauteur de l'image
                      }}
                    />
                  ) : null}
                </CardActionArea>

                <Typography
                  className="carrousel-title"
                  fontFamily="Lovers"
                  fontSize="2.5rem"
                  color="white"
                >
                  {creation.name}
                </Typography>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
