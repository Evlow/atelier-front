import { useEffect, useState } from "react";
import NavBar from "../components/navBar/navBar";
import Footer from "../components/footer/footer";
import { Creation } from "../models/creation";
import CreationList from "../creations/creationList";
import escape from "../assets/banniere-escape.jpg";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import GroupsIcon from "@mui/icons-material/Groups";

export default function EscapeGames() {
  const [creations, setCreations] = useState<Creation[]>([]);

  useEffect(() => {
    fetch(
      `http://preprodback.karim-portfolio.xyz/api/Creation/GetCreationsByCategoryId/2`
    )
      .then((response) => response.json())
      .then((data) => setCreations(data))
      .catch((error) => console.error("Erreur lors de la requête : ", error));
  }, []);

  const features = [
    { icon: <EventAvailableIcon fontSize="large" sx={{ color: "#8B0000" }} />, title: "Privatisable", description: "Réservez pour vos événements privés." },
    { icon: <VisibilityIcon fontSize="large" sx={{ color: "#8B0000" }} />, title: "Expérience immersive", description: "Plongez dans un univers captivant et unique." },
    { icon: <AutoStoriesIcon fontSize="large" sx={{ color: "#8B0000" }} />, title: "Scénarios uniques", description: "Des aventures inédites et interactives." },
    { icon: <DirectionsCarIcon fontSize="large" sx={{ color: "#8B0000" }} />, title: "Mobile", description: "Je me déplace pour vos événements." },
    { icon: <GroupsIcon fontSize="large" sx={{ color: "#8B0000" }} />, title: "Jouable en groupe", description: "Jusqu'à X joueurs par session." },
  ];

  return (
    <>
      <NavBar />

  {/* 🖼️ Bannière */}
<Box sx={{ display: "flex", justifyContent: "center", width: "100%", margin: "40px 0" }}>
  <Box sx={{ width: { xs: "80%px", sm: "70%px", md: "50%" }, overflow: "hidden" }}>
    <Box 
      component="img" 
      src={escape} 
      alt="Escape Games" 
      sx={{ width: "100%", height: "100%", objectFit: "cover", margin: "auto" }} 
    />
  </Box>
</Box>

      <Box sx={{ width: "80%", margin: "40px auto", textAlign: "center" }}>
  <Typography variant="body1">
  Passionnée par l'univers du jeu interactif et par la manière de raconter
        des histoires à travers des environnements captivants, depuis plusieurs
        années, je conçois des scénarios qui plongent les participants dans des
        mondes uniques, alliant suspense, réflexion et découverte. <br />
        <br />
        Mon travail ne se limite pas à l’élaboration de simples énigmes, je
        m'investis pleinement dans la création d’expériences globales, de
        l’aspect narratif à la mise en scène. 
        En plus de la scénarisation, je développe des mécanismes innovants, des
        automatismes complexes, des éléments de décor immersifs, ainsi que des
        technologies de pointe telles que des animatroniques et des hologrammes.
        <br />
        Ces éléments contribuent à donner vie à des univers où chaque détail
        compte et où les participants se sentent véritablement transportés dans
        une autre réalité. Je m’efforce toujours d’aller au-delà de l’expérience
        classique de l’escape game, en cherchant à surprendre, émerveiller et
        susciter l’émerveillement à chaque étape du parcours. 
       
  </Typography>
</Box>

 {/* Section Features avec background color */}
<Box sx={{ width: "100%", margin: "50px auto" }}>
  <Grid container spacing={3} justifyContent="center">
    {features.map((feature, index) => (
      <Grid item xs={12} sm={6} md={2} key={index} sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{
          textAlign: "center",
          width: "100%",
          height: "auto", 
          maxWidth: "250px", 
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 3,
          background: "#E7E2E1",
          paddingY: 3,
          transition: "transform 0.3s ease-in-out",
          "&:hover": { transform: "scale(1.05)" },
        }}>
          <CardContent sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            justifyContent: "center",
            padding: "10px !important", 
          }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              {feature.icon}
              <Typography 
                variant="h3" 
                sx={{ 
                  marginTop: 1, 
                  fontSize: { 
                    xs: "2rem",  // Pour les petits écrans (téléphones)
                    sm: "2.5rem", // Pour les écrans moyens (tablettes)
                    md: "2.8rem",   // Pour les écrans moyens (ordinateurs)
                    lg: "2.8rem", // Pour les grands écrans
                  },
                  color: "black" 
                }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1, textAlign: "center" }}>
                {feature.description}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>




{/* Deuxième partie du texte après les features */}
<Box sx={{ width: "80%", margin: "40px auto", textAlign: "center" }}>
  <Typography variant="body1">
  Ma vision est de repenser les escape games et les expériences immersives
        en mettant l'accent sur la créativité, l'innovation et la technologie.
        <br /> Je suis convaincue que l’avenir des jeux interactifs réside dans
        la fusion des arts traditionnels du spectacle avec des technologies
        modernes, pour offrir des aventures toujours plus intenses, surprenantes
        et mémorables.
  </Typography>
</Box>

      {/* 🔥 Créations */}
      <Box sx={{ width: "90%", margin: "40px auto" }}>
        <CreationList creations={creations} basePath="escape-games" />
      </Box>

      <Footer />
    </>
  );
}
