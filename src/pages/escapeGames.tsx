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
      const categoryId = 2;
      fetch(
        `http://preprodback.karim-portfolio.xyz/api/Creation/GetCreationsByCategoryId/${categoryId}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erreur dans la réponse de l'API");
          }
          return response.json();
        })
        .then((data) => setCreations(data))
        .catch((error) => console.error("Erreur lors de la requête : ", error));
    }, []);
    const features = [
      {
        icon: <EventAvailableIcon fontSize="large" sx={{ color: "#640a02" }} />, 
        title: "Privatisable",
        description: "Réservez pour vos événements privés."
      },
      {
        icon: <VisibilityIcon fontSize="large" sx={{ color: "#640a02" }} />, 
        title: "Expérience immersive",
        description: "Plongez dans un univers captivant et unique."
      },
      {
        icon: <AutoStoriesIcon fontSize="large" sx={{ color: "#640a02" }} />, 
        title: "Scénarios uniques",
        description: "Des aventures inédites et interactives."
      },
      {
        icon: <DirectionsCarIcon fontSize="large" sx={{ color: "#640a02" }} />, 
        title: "Mobile",
        description: "Je me déplace pour vos événements."
      },
      {
        icon: <GroupsIcon fontSize="large" sx={{ color: "#640a02" }} />, 
        title: "Jouable en groupe",
        description: "Jusqu'à X joueurs par session."
      }
    ];
    return (
      <>
        <NavBar />
        <Box
          sx={{
            width: "70%",
            height: "600px",
            overflow: "hidden",
            margin: "0 auto",
          }}
        >
          <Box
            component="img"
            src={escape}
            alt="image bannière escape games"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        <Typography
          component="section"
          variant="body1"
          sx={{
            textAlign: "center",
            width: "60%",
            margin: "0 auto",
          }}
        >
          Passionnée par l'univers du jeu interactif et par la manière de raconter
          des histoires à travers des environnements captivants, depuis plusieurs
          années, je conçois des scénarios qui plongent les participants dans des
          mondes uniques, alliant suspense, réflexion et découverte. <br />
          <br />
          Mon travail ne se limite pas à l’élaboration de simples énigmes, je
          m'investis pleinement dans la création d’expériences globales, de
          l’aspect narratif à la mise en scène. <br />En plus de la scénarisation, je
          développe des mécanismes innovants, des automatismes complexes, des
          éléments de décor immersifs, ainsi que des technologies de pointe telles
          que des animatroniques et des hologrammes. <br />
        
          Ces éléments contribuent à donner vie à des univers où chaque détail
          compte et où les participants se sentent véritablement transportés dans
          une autre réalité. Je m’efforce toujours d’aller au-delà de l’expérience
          classique de l’escape game, en cherchant à surprendre, émerveiller et
          susciter l’émerveillement à chaque étape du parcours. <br /> <br />Ma vision est de
          repenser les escape games et les expériences immersives en mettant
          l'accent sur la créativité, l'innovation et la technologie. <br /> Je suis
          convaincue que l’avenir des jeux interactifs réside dans la fusion des
          arts traditionnels du spectacle avec des technologies modernes, pour
          offrir des aventures toujours plus intenses, surprenantes et mémorables.
        </Typography>
        <Box sx={{ width: "80%", margin: "50px auto" }}>
  <Grid container spacing={2} justifyContent="center">
    {features.map((feature, index) => (
      <Grid item xs={12} sm={6} md={2} key={index}>
        <Card sx={{ textAlign: "center", padding: "10px" }}>
          <CardContent>
            {feature.icon}
            <Typography variant="h6" sx={{ marginTop: 1, color: "black" }}>
              {feature.title}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1, color: "black" }}>
              {feature.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>

        <Box>
          <CreationList creations={creations} basePath="escape-games" />
        </Box>
        <Footer />
      </>
    );
  }
