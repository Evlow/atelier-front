import { useEffect, useState } from "react";
import anima from "../assets/anima.png";
import arduino from "../assets/arduino.jpg";
import video from "../assets/videos/video.mp4";
import { Box, Typography, Stack, Card, CardContent } from "@mui/material";
import { Creation } from "../models/creation";
import CreationList from "../creations/creationList";

export default function Animatronics() {
  const [creations, setCreations] = useState<Creation[]>([]);

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
          <Box component="section" flex={1} >
            <Typography
              component="section"
              variant="body1"
              sx={{
                width: "50%",
                textAlign: "justify",
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

      <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 4, // Espacement entre les cartes
    padding: 2,
  }}
>
  {/* Carte 1 */}
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      flex: "1 1 250px",
      maxWidth: "250px",
      minWidth: "240px",
    }}
  >
    <Card
      sx={{
        boxSizing: "border-box",
        textAlign: "center",
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        background: "#E7E2E1",
        paddingY: 2,
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          p: 1.25,
          height: "auto",
        }}
      >
        <Typography variant="h4" sx={{ marginTop: 1, color: "black" }}>
          1. Impression 3D et Structure
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", color: "black" }}>
          Les structures de mes animatroniques sont imprimées en 3D (principalement en ABS ou matériaux équivalents). Cela permet une personnalisation totale et un poids réduit tout en préservant la solidité et la fonctionnalité des créations.
        </Typography>
      </CardContent>
    </Card>
  </Box>

  {/* Carte 2 */}
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      flex: "1 1 250px",
      maxWidth: "250px",
      minWidth: "240px",
    }}
  >
    <Card
      sx={{
        boxSizing: "border-box",
        textAlign: "center",
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        background: "#E7E2E1",
        paddingY: 2,
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          p: 1.25,
          height: "auto",
        }}
      >
        <Typography variant="h4" sx={{ marginTop: 1, color: "black" }}>
          2. Moteurs et Mécanisme
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", color: "black" }}>
          L’utilisation de moteurs de haute qualité (servomoteurs et moteurs brushless) permet de contrôler précisément les mouvements des animatroniques, qu’il s’agisse de membres, de têtes ou de visages. Ces moteurs sont choisis pour leur robustesse et leur fiabilité afin de garantir des mouvements réalistes.
        </Typography>
      </CardContent>
    </Card>
  </Box>

  {/* Carte 3 */}
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      flex: "1 1 250px",
      maxWidth: "250px",
      minWidth: "240px",
    }}
  >
    <Card
      sx={{
        boxSizing: "border-box",
        textAlign: "center",
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        background: "#E7E2E1",
        paddingY: 2,
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          p: 1.25,
          height: "auto",
        }}
      >
        <Typography variant="h4" sx={{ marginTop: 1, color: "black" }}>
          3. Programmation et Contrôle à Distance
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", color: "black" }}>
          Grâce à la technologie Arduino, chaque animatronique peut être programmée pour exécuter des scénarios précis. En outre, un panneau de contrôle à distance permet à un opérateur d'animer les créatures en temps réel.
        </Typography>
      </CardContent>
    </Card>
  </Box>

  {/* Carte 4 */}
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      flex: "1 1 250px",
      maxWidth: "250px",
      minWidth: "240px",
    }}
  >
    <Card
      sx={{
        boxSizing: "border-box",
        textAlign: "center",
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        background: "#E7E2E1",
        paddingY: 2,
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          p: 1.25,
          height: "auto",
        }}
      >
        <Typography variant="h4" sx={{ marginTop: 1, color: "black" }}>
          4. Personnalisation Sonore
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", color: "black" }}>
          Les animatroniques peuvent être équipées de modules sonores pour ajouter des dialogues ou des sons enrichissant l’expérience. Ces éléments sont entièrement personnalisables selon les besoins spécifiques du projet.
        </Typography>
      </CardContent>
    </Card>
  </Box>

  {/* Carte 5 */}
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      flex: "1 1 250px",
      maxWidth: "250px",
      minWidth: "240px",
    }}
  >
    <Card
      sx={{
        boxSizing: "border-box",
        textAlign: "center",
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        background: "#E7E2E1",
        paddingY: 2,
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          p: 1.25,
          height: "auto",
        }}
      >
        <Typography variant="h4" sx={{ marginTop: 1, color: "black" }}>
          5. Robustesse et Maintenance Facile
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", color: "black" }}>
          Les animatroniques sont conçues pour être robustes tout en étant faciles à réparer. Leur conception modulaire permet de remplacer rapidement les pièces et d'assurer une longévité élevée, même dans des environnements exigeants.
        </Typography>
      </CardContent>
    </Card>
  </Box>

  {/* Carte 6 */}
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      flex: "1 1 250px",
      maxWidth: "250px",
      minWidth: "240px",
    }}
  >
    <Card
      sx={{
        boxSizing: "border-box",
        textAlign: "center",
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        background: "#E7E2E1",
        paddingY: 2,
        transition: "transform 0.3s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          p: 1.25,
          height: "auto",
        }}
      >
        <Typography variant="h4" sx={{ marginTop: 1, color: "black" }}>
          6. Applications Diversifiées
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", color: "black" }}>
          Les animatroniques trouvent leur place dans une multitude de secteurs : Événements et concerts, Escape games, Parcs à thème et films, Installations visuelles dynamiques.
        </Typography>
      </CardContent>
    </Card>
  </Box>
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
                textAlign: "justify",
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
                textAlign: "justify",
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
        <Typography variant="body1" sx={{ textAlign: "justify" }}>
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
