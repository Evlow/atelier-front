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
import "./homePageCarrousel.css"

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
      <div className="carousel-container">
        {creations.map((creation) => {
          const firstMedia = Array.isArray(creation.pictureUrls)
            ? creation.pictureUrls[0]
            : creation.pictureUrls;

          const isVideo = firstMedia && /\.(mp4|webm|ogg)$/i.test(firstMedia);

          return (
            <Link
              key={creation.id}
              to={`/creation/${creation.id}`}
              style={{ textDecoration: "none", flexShrink: 0 }}
            >
              <Card className="carousel-card">
                <CardActionArea>
                  {isVideo ? (
                    <div style={{ position: "relative" }}>
                      <video
                        src={firstMedia}
                        controls
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                          maxHeight: "400px",
                        }}
                      />
                      <Typography
                        fontFamily="Lovers"
                        fontSize="2.5rem"
                        color="white"
                        className="carousel-title"
                        sx={{
                          position: "absolute",
                          bottom: "10px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          background: "rgba(0, 0, 0, 0.5)",
                          padding: "5px 10px",
                          borderRadius: "5px",
                        }}
                      >
                        {creation.name}
                      </Typography>
                    </div>
                  ) : (
                    <CardMedia
                      component="img"
                      image={firstMedia}
                      alt={creation.name}
                      sx={{
                        objectFit: "cover",
                        height: { xs: "250px", sm: "300px", md: "400px" },
                      }}
                    />
                  )}
                  {!isVideo && (
                    <Typography
                      fontFamily="Lovers"
                      fontSize="2.5rem"
                      color="white"
                      className="carousel-title"
                    >
                      {creation.name}
                    </Typography>
                  )}
                </CardActionArea>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
