import { useEffect, useState } from "react";
import { Creation } from "../models/creation";
import CreationList from "../creations/creationList";
import escape from "../assets/banniere-escape.jpg";
import { Box, Typography } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import Features from "../components/features/features"; 


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
    {
      icon: <EventAvailableIcon sx={{ color: "#8B0000", fontSize:"40px"}} />,
      title: "Privatisable",
      description:
        "Réservez pour vos événements privés, team building ou séminaires et offrez une expérience mémorable.",
    },
    {
      icon: <TheaterComedyIcon fontSize="large" sx={{ color: "#8B0000", fontSize:"40px" }} />,
      title: "Immersion totale",
      description:
        "Plongez dans un univers captivant, où chaque détail vous transporte dans une expérience unique.",
    },

    {
      icon: <AccessibilityIcon fontSize="large" sx={{ color: "#8B0000", fontSize:"40px" }} />,
      title: "Accessible à Tous",
      description:
        "Conçu pour être entièrement accessible et inclusif, permettant à chacun de participer pleinement.",
    },
    {
      icon: <DirectionsCarIcon fontSize="large" sx={{ color: "#8B0000", fontSize:"40px" }} />,
      title: "Mobilité",
      description:
        "Une expérience mobile qui se déplace pour offrir des moments uniques directement sur vos lieux d’événements.",
    },
    {
      icon: <GroupWorkIcon fontSize="large" sx={{ color: "#8B0000", fontSize:"40px" }} />,
      title: "Expérience collective",
      description:
        "Collaborez en équipe pour résoudre des énigmes et faire avancer l’aventure ensemble.",
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          margin: "40px 0",
        }}
      >
        <Box
          sx={{
            width: { xs: "80%px", sm: "70%px", md: "50%" },
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={escape}
            alt="Escape Games"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              margin: "auto",
            }}
          />
        </Box>
      </Box>

      <Box sx={{ width: "80%", margin: "40px auto", textAlign: "justify" }}>
        <Typography variant="body1">
          Entrez dans un univers parallèle où chaque mouvement, chaque action
          compte. Dark Hypercube Experience est bien plus qu’un simple escape
          game, c’est une véritable expérience immersive qui fusionne
          technologie de pointe, créativité et interactions fascinantes. À la
          frontière entre jeu d’évasion et expérience interactive.<br></br>
          Préparez-vous à être plongé dans un décor ultra immersif, où des
          animatroniques et des hologrammes prennent vie sous vos yeux, vous
          faisant vivre une expérience hors du commun. Chaque pièce, chaque
          recoin a été conçu pour vous transporter dans une réalité alternative
          où la technologie et l’imaginaire se confondent. Grâce à des
          technologies avancées et un mécanisme central novateur, l’expérience
          évolue au fur et à mesure de votre progression, vous offrant des
          rebondissements et des défis inédits. <br />
          La Dark Hypercube Experience se veut inclusive et accessible à tous,
          sans exception. L’expérience est pensée pour être pleinement
          accessible, avec des dispositifs permettant une participation active
          des personnes en situation de handicap, garantissant ainsi une
          aventure excitante et épanouissante pour chaque participant.
        </Typography>
      </Box>

       <Features features={features} />


      <Box sx={{ width: "80%", margin: "40px auto", textAlign: "justify" }}>
        <Typography variant="body1">
          Passionnée par l’univers du jeu interactif et la narration à travers
          des environnements captivants, j’ai dédié plusieurs années à la
          conception de scénarios innovants. Mon travail va bien au-delà des
          simples énigmes. Je crée des expériences globales, où l’aspect
          narratif rencontre la mise en scène, et où chaque élément
          technologique, comme des animatroniques et des hologrammes, donne vie
          à des mondes immersifs. Ma vision est de redéfinir les escape games et
          les expériences immersives en mettant l'accent sur l’innovation. Je
          crois fermement que l'avenir des jeux interactifs réside dans la
          fusion des arts traditionnels du spectacle et des technologies
          modernes, offrant ainsi des aventures toujours plus intenses,
          surprenantes et mémorables.
        </Typography>
      </Box>

      <Box sx={{ width: "90%", margin: "40px auto" }}>
        <CreationList creations={creations} basePath="escape-games" />
      </Box>
    </>
  );
}
