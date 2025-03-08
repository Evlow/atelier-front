import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Creation } from "../models/creation";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";

export default function CreationDetails() {
  const { id } = useParams<{ id: string }>();
  const [mainMedia, setMainMedia] = useState<string>("");
  const [creation, setCreation] = useState<Creation | undefined>();
  const [filteredPictureUrls, setFilteredPictureUrls] = useState<string[]>([]);
  const [filteredVideoUrls, setFilteredVideoUrls] = useState<string[]>([]);

  useEffect(() => {
    if (!id) {
      console.error("ID is missing");
      return;
    }
    const fetchCreations = async () => {
      try {
        const response = await axios.get(
          `http://preprodback.karim-portfolio.xyz/api/Creation/GetCreation/${parseInt(id)}`
        );
        const data = response.data;

        setCreation(data);

        // Définir l'image principale en priorité
        if (data.pictureUrls?.length > 0) {
          setMainMedia(data.pictureUrls[0]);
        } else if (data.videoUrls?.length > 0) {
          setMainMedia(data.videoUrls[0]);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de la création:", error);
      }
    };

    fetchCreations();
  }, [id]);

  // Met à jour la liste des médias additionnels quand mainMedia change
  useEffect(() => {
    if (creation) {
      setFilteredPictureUrls(creation.pictureUrls?.filter(url => url !== mainMedia) || []);
      setFilteredVideoUrls(creation.videoUrls?.filter(url => url !== mainMedia) || []);
    }
  }, [mainMedia, creation]);

  return (
    <>
      <Box
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: { xs: "100%", md: "600px" },
            marginBottom: { xs: 4, md: 0 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: { xs: "300px", md: "600px" },
              objectFit: "cover",
              borderRadius: 2,
            }}
          >
            {mainMedia.includes(".mp4") || mainMedia.includes(".mov") ? (
              <video
                src={mainMedia}
                controls
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            ) : (
              <img
                src={mainMedia}
                alt={creation?.name || 'default alt text'}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 2,
                }}
              />
            )}
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              marginTop: 2,
              overflowX: "auto",
            }}
          >
            {/* Additional Images */}
            {filteredPictureUrls.map((url, index) => (
              <Box
                key={index}
                component="img"
                src={url}
                alt={`image ${index + 1}`}
                sx={{
                  width: { xs: "80px", sm: "100px", md: "100px" },
                  height: { xs: "80px", sm: "100px", md: "100px" },
                  objectFit: "cover",
                  borderRadius: 2,
                  cursor: "pointer",
                  aspectRatio: "1 / 1",
                }}
                onClick={() => setMainMedia(url)}
              />
            ))}

            {/* Additional Videos */}
            {filteredVideoUrls.map((url, index) => (
              <Box key={index}>
                <video
                  src={url}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                  onClick={() => setMainMedia(url)}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Text Section */}
        <Box
          sx={{
            flex: 1,
            paddingLeft: { xs: 0, md: 4 },
            textAlign: "left",
          }}
        >
          <Typography
            variant="h2"
            fontSize={{ xs: "3rem", md: "6rem" }}
            gutterBottom
            sx={{ marginBottom: 2 }}
          >
            {creation?.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              whiteSpace: "pre-wrap",
              lineHeight: 1.8,
              width: "95%",
            }}
          >
            {creation?.description}
          </Typography>

          {/* Button Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Button
              component={Link}
              to="/me-contacter"
              sx={{
                width: { xs: "100%", sm: "20%" },
                backgroundColor: "#E7E2E1",
                color: "black",
                fontFamily: "Gowun",
                fontSize: "1.2rem",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                padding: { xs: "10px", sm: "5px" },
              }}
            >
              Me contacter
              <span style={{ color: "#640a02", marginLeft: "5px" }}>&gt;</span>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
