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
            Array.isArray(creation.pictureUrls) && creation.pictureUrls.length > 0
              ? creation.pictureUrls[0]
              : null;

          return (
            <Link
              key={creation.id}
              to={`/creation/${creation.id}`}
              style={{ textDecoration: "none", flexShrink: 0 }}
            >
              <Card
                sx={{
                  backgroundColor: "transparent",
                  overflow: "hidden",
                  position: "relative",
                  transition: "transform 0.3s ease",
                  height: "100%",
                  width: "300px", // Fixe la largeur de chaque carte
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
                          height: "200px", // Fixe la hauteur du vidéo
                          objectFit: "cover", // L'image s'adapte sans déformation
                        }}
                      />
                      <Typography
                        fontFamily="Lovers"
                        fontSize="2.5rem"
                        color="white"
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          backgroundColor: "rgba(0, 0, 0, 0.6)",
                          textAlign: "center",
                          opacity: 0,
                          transform: "translateY(20px)",
                          transition: "opacity 0.3s ease, transform 0.3s ease",
                          pointerEvents: "none",
                          "&:hover": {
                            opacity: 1,
                            transform: "translateY(0)",
                          },
                        }}
                      >
                        {creation.name}
                      </Typography>
                    </div>
                  ) : firstImage ? (
                    <CardMedia
                      component="img"
                      image={firstImage}
                      alt={creation.name}
                      sx={{
                        objectFit: "cover",
                        width: "100%", // Fixe la largeur de l'image
                        height: "200px", // Fixe la hauteur de l'image
                      }}
                    />
                  ) : null}

                  <Typography
                    fontFamily="Lovers"
                    fontSize="2.5rem"
                    color="white"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      textAlign: "center",
                      opacity: 0,
                      transform: "translateY(20px)",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                      pointerEvents: "none",
                      "&:hover": {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    }}
                  >
                    {creation.name}
                  </Typography>
                </CardActionArea>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
