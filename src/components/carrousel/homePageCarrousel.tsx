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
          marginBottom: "20px", // Ajout d'un espacement en bas
        }}
      >
        Les dernières créations
      </Typography>

      {/* Conteneur avec défilement horizontal */}
      <div className="carousel-container" style={{ display: "flex", overflowX: "auto" }}>
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
              style={{ textDecoration: "none", flexShrink: 0, marginRight: "15px" }} // Ajout de marge entre les cartes
            >
              <Card
                className="carousel-card"
                sx={{
                  width: { xs: "200px", sm: "250px", md: "300px" }, // Taille dynamique des cartes
                  height: { xs: "350px", sm: "400px", md: "450px" }, // Taille dynamique des cartes
                  position: "relative",
                  boxShadow: 3, // Amélioration de l'ombre de la carte
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
                          height: "auto",
                          objectFit: "cover",
                          maxHeight: "300px", // Hauteur réduite du vidéo sur mobile
                        }}
                      />
                      <Typography
                        fontFamily="Lovers"
                        fontSize="1.5rem" // Taille réduite sur mobile
                        color="white"
                        className="carousel-title"
                        sx={{ position: "absolute", bottom: "10px", left: "10px" }}
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
                        height: "100%",
                        maxHeight: "300px", // Hauteur réduite de l'image sur mobile
                      }}
                    />
                  ) : null}

                  <Typography
                    fontFamily="Lovers"
                    fontSize="1.5rem" // Taille réduite sur mobile
                    color="white"
                    className="carousel-title"
                    sx={{ position: "absolute", bottom: "10px", left: "10px" }}
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
