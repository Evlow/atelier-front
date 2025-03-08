import { useEffect, useState } from "react";
import anima from "../assets/anima.png";
import arduino from "../assets/arduino.jpg";
import video from "../assets/videos/video.mp4";
import { Box, Typography, Stack } from "@mui/material";
import { Creation } from "../models/creation";
import CreationList from "../creations/creationList";
import Features from "../components/features/features";

export default function Animatronics() {
  const [creations, setCreations] = useState<Creation[]>([]);
  // Définition des données des cartes
  const feature = [
    {
      title: "Impression 3D et structure",
      description:
        "Les structures des animatroniques sont imprimées en 3D (ABS ou matériaux équivalents), permettant une personnalisation totale tout en réduisant le poids.<br />Cette méthode préserve également la solidité et la fonctionnalité des créations.",
    },
    {
      title: "Moteurs et Mécanisme",
      description:
        "Des moteurs de haute qualité (servomoteurs et moteurs brushless) sont utilisés pour contrôler précisément les mouvements des animatroniques.<br /> Robustes et fiables, ces moteurs garantissent des mouvements réalistes et durables.",
    },
    {
      title: "Programmation et contrôle",
      description:
        "Grâce à la technologie Arduino, chaque animatronique peut être programmée pour exécuter des scénarios spécifiques.<br /> Un panneau de contrôle à distance permet à un opérateur de piloter les mouvements des animatroniques en temps réel.",
    },
    {
      title: "Personnalisation sonore",
      description:
        "La personnalisation des animatroniques inclut des modules sonores, permettant de diffuser des dialogues ou des effets sonores.<br /> Ces éléments sont entièrement adaptables en fonction des besoins du projet.",
    },
    {
      title: "Robustesse et maintenance ",
      description:
        "Conçues pour être à la fois robustes et faciles à entretenir, les animatroniques bénéficient d'une conception modulaire, permettant un remplacement rapide des pièces et garantissant ainsi une longue durée de vie.",
    },
  ];

  useEffect(() => {
    const categoryId = 1;
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

  return (
    <div>
      <Box width="80%" margin="auto">
        <Typography
          variant="h2"
          sx={{
            marginY: "50px",

            textAlign: "left",
          }}
        >
          La création d'animatroniques
        </Typography>
        <Stack
          component="article"
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{
            marginBottom: "10px",
            justifyContent: "space-evently",
            alignItems: "center", // Centre verticalement
          }}
        >
          <Box component="section" flex={1}>
            <Typography
              component="section"
              variant="body1"
              sx={{
                width: "50%",
                textAlign: "left",
              }}
            >
              Les animatroniques que je conçois se distinguent par leur capacité
              à réagir et interagir avec leur environnement de manière réaliste.
              Elles sont utilisées dans des événements, des films, des escape
              games et bien d’autres applications.Ces créatures mécaniques et
              interactives sont réalisées grâce à une combinaison de
              technologies modernes et de techniques artisanales.
            </Typography>
          </Box>
          <Box
            component="section"
            sx={{
              flex: 0.7,
              display: "flex", // Utilisation du flexbox pour centrer l'image
              justifyContent: "center", // Aligne l'image à gauche
            }}
          >
            <img
              src={anima}
              alt="Processus de Création"
              style={{
                maxWidth: "50%",
                height: "auto",
              }}
            />
          </Box>
        </Stack>
      </Box>

      <Box width="80%" margin="auto">
        <Typography
          variant="h2"
          sx={{
            textAlign: "right",
          }}
        >
          Programmation et Réparabilité
        </Typography>
        <Stack
          component="article"
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{
            marginBottom: "80px",
            justifyContent: "space-evently",
            alignItems: "center",
          }}
        >
          <Box
            component="section"
            sx={{
              flex: 0.7,
              display: "flex", // Utilisation du flexbox pour centrer l'image
              justifyContent: "center", // Centre horizontalement
              alignItems: "center", // Centre verticalement
            }}
          >
            <img
              src={arduino}
              alt="Processus de Création"
              style={{
                maxWidth: "70%",
                height: "auto",
              }}
            />
          </Box>
          <Box component="section" flex={1}>
            <Typography
              component="section"
              variant="body1"
              sx={{
                textAlign: "left",
              }}
            >
              Autre point important de mes animatroniques : leur capacité à être
              programmées ou animés à distance. Utilisant la technologie
              Arduino, chaque animatronique peut être configuré pour répondre à
              des scénarios précis, en fonction de l’événement ou de l’usage.{" "}
              <br /> <br />
              Il est possible de programmer des séquences de mouvements, mais
              aussi de les contrôler en temps réel via un panneau de contrôle
              permettant à un opérateur de les animer à distance, que ce soit
              lors d’un événement en direct, d’un tournage de film ou d'une
              attraction immersive.
              <br />
              <br />
              Les animatroniques que je crée sont conçus pour être extrêmement
              robustes tout en étant faciles à réparer si nécessaire. Grâce à
              l’utilisation de matériaux durables et la conception modulaire,
              chaque pièce peut être facilement remplacée, ce qui garantit une
              longévité accrue des dispositifs, même dans des environnements
              exigeants. Cela permet de réduire les coûts de maintenance et
              d’assurer une utilisation fiable sur le long terme.
            </Typography>
          </Box>
        </Stack>
      </Box>

      <Box width="80%" margin="auto">
        <Typography
          variant="h2"
          sx={{
            textAlign: "left",
          }}
        >
          Applications
        </Typography>
        <Stack
          component="article"
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{
            justifyContent: "space-evently",
            alignItems: "center",
            alignContent: "center", // Centre verticalement
            marginBottom: "80px",
          }}
        >
          <Box component="section" flex={1}>
            <Typography
              component="section"
              variant="body1"
              sx={{
                textAlign: "left",
                alignContent: "center", // Centre verticalement
              }}
            >
              Les animatroniques sont devenus incontournables dans de nombreux
              secteurs créatifs et professionnels. Leur application s'étend à
              des événements comme les concerts, où des personnages
              animatroniques peuvent interagir avec le public, ou encore dans
              des escape games, où ils ajoutent une dimension interactive et
              mystérieuse à l'expérience. <br />
              <br /> Ils sont également très utilisés dans l’univers du
              spectacle, des films et des parcs à thème, où des créatures
              fantastiques ou des robots peuvent être intégrés pour des effets
              visuels époustouflants. En outre, ces animatroniques peuvent être
              utilisées dans des lieux comme les boîtes de nuit pour des
              installations visuelles dynamiques, ou dans des expositions
              artistiques, des musées, des salons professionnels, et même des
              attractions touristiques pour immerger les visiteurs dans des
              univers imaginaires. <br /> <br />
              Leur versatilité permet de les adapter à une multitude de
              scénarios et de configurations, avec la possibilité de les allier
              à des hologrammes, apportant ainsi une touche de magie et de
              réalisme là où ils sont intégrés.
            </Typography>
          </Box>

          <Box
            component="section"
            sx={{
              flex: 0.7,
              display: "flex", // Utilisation du flexbox pour centrer l'image
              justifyContent: "center", // Centre horizontalement
              alignContent: "center", // Centre verticalement
              alignItems: "center",
            }}
          >
            <video
              autoPlay
              muted
              loop
              style={{
                width: "100%",
                height: "550px",
              }}
            >
              <source src={video} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture des vidéos.
            </video>
          </Box>
        </Stack>
      </Box>

      <Features features={feature} flex="1 1 320px" maxWidth="320px" />

      <Box my={4} width="80%" margin="auto">
        <Typography
          variant="h2"
          sx={{
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Conclusion
        </Typography>
        <Typography variant="body1">
          En résumé, mes animatroniques sont bien plus que de simples objets
          mécaniques. Ce sont des créations vivantes qui allient technologie,
          créativité et innovation. <br /> Je conçois et crée des animatroniques
          uniques et personnalisés me permettant de m’adapter aux différentes
          contraintes et exigences et suis à votre écoute que ce soit pendant la
          phase de création, la mise en place, ainsi que la vie de votre
          animatronique. <br /> <br /> Les animatroniques que je crée sont
          conçus pour être extrêmement robustes tout en étant faciles à réparer
          si nécessaire. Grâce à l’utilisation de matériaux durables et la
          conception modulaire, chaque pièce peut être facilement remplacée, ce
          qui garantit une longévité accrue des dispositifs, même dans des
          environnements exigeants. <br />
          Cela permet de réduire les coûts de maintenance et d’assurer une
          utilisation fiable sur le long terme.
        </Typography>
      </Box>
      <Box>
        <CreationList creations={creations} basePath="animatroniques" />
      </Box>
    </div>
  );
}
