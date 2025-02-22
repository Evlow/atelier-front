
import { useEffect, useState } from "react";
import anima from "../assets/anima.png";
import arduino from "../assets/arduino.jpg";
import video from "../assets/videos/video.mp4";
import Arabesque1 from "../assets/Arabesque1.svg";
import Arabesque2 from "../assets/Arabesque2.svg";
import { Box, Typography, Stack } from "@mui/material";
import { Creation } from "../models/creation";
import NavBar from "../components/navBar/navBar";
import Footer from "../components/footer/footer";
import CreationList from "../creations/creationList";

export default function Animatronics() {
  const [creations, setCreations] = useState<Creation[]>([]);

  useEffect(() => {
    const categoryId = 1;   
    fetch(`http://preprodback.karim-portfolio.xyz/api/Creation/GetCreationsByCategoryId/${categoryId}`)
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
      <NavBar />
 {/* Citation */}
 <Stack
          component="article"
          justifyContent="center"
          alignItems="center"
          direction={{ xs: "column", md: "row" }}
          sx={{ marginTop: "70px", marginBottom: "70px" }}
        >
          <Box
            component="img"
            src={Arabesque1}
            alt="Arabesque 1"
            sx={{
              height: { xs: "70px", sm: "40px" },
            }}
          />

          <Typography
            variant="h3"
            sx={{
              fontFamily: "Alice",
              textAlign: "center",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Plongez dans un monde où l'innovation rencontre la magie, avec les
            animatroniques !
          </Typography>
          <Box>
            <Box
              component="img"
              src={Arabesque2}
              alt="Arabesque 2"
              sx={{
                height: { xs: "70px", sm: "40px" },
              }}
            />
          </Box>
        </Stack>
        <Box width="90%" margin='auto'>
          <Typography
            variant="h2"
            sx={{
              marginTop: "50px",

              textAlign: "left",
              fontSize: { xs: "3rem", md: "4rem" },
            }}
          >
            Processus de Création
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
            <Box component="section" flex={1}>
              <Typography
                component="section"
                variant="body1"
                sx={{
                  textAlign: "justify",
                }}
              >
                La réalisation de mes animatroniques repose sur une combinaison
                d’'impression 3D, d’électronique, de mécanique, de techniques
                d’habillage (poils, plumes, silicone, peinture, etc.) et de
                programmation. Les structures de mes animatroniques sont
                imprimées en 3D (ABS ou équivalents), ce qui permet une
                personnalisation totale tant au niveau de l’apparence que de la
                fonctionnalité, ainsi qu’un poids réduit tout en préservant la
                solidité. <br />
                <br />
                Ces structures sont ensuite équipées de servomoteurs ou moteurs
                brushless de haute qualité qui permettent de contrôler avec
                précision les mouvements, que ce soit pour animer des membres,
                des têtes ou des visages. Les moteurs sont choisis pour leur
                fiabilité et leur capacité à garantir des mouvements fluides et
                réalistes, tout en étant extrêmement robustes. <br />
                <br /> De plus, l'utilisation de modules sonores intégrés permet
                de donner une dimension supplémentaire à chaque animatronique,
                en ajoutant des sons ou des dialogues qui enrichissent
                l’expérience. Ces éléments sonores sont entièrement
                personnalisables, ce qui permet d'adapter chaque animatronique
                aux besoins spécifiques du projet.
              </Typography>
            </Box>
            <Box
              component="section"
              sx={{
                flex: 0.7,
                display: "flex", // Utilisation du flexbox pour centrer l'image
                alignItems: "center", // Centre verticalement
                justifyContent: "center", // Aligne l'image à gauche
              }}
            >
              <img
                src={anima}
                alt="Processus de Création"
                style={{
                  maxWidth: "70%",
                  height: "auto",
                }}
              />
            </Box>
          </Stack>
        </Box>

        <Box width="90%" margin='auto'>
          <Typography
            variant="h2"
            sx={{
              textAlign: "right",

              fontSize: { xs: "3rem", md: "4rem" },
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
                Autre point important de mes animatroniques : leur capacité à
                être programmées ou animés à distance. Utilisant la technologie
                Arduino, chaque animatronique peut être configuré pour répondre
                à des scénarios précis, en fonction de l’événement ou de
                l’usage. <br /> <br />
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
       
        <Box width="90%" margin='auto'>
          <Typography
            variant="h2"
            sx={{
              textAlign: "left",
              fontSize: { xs: "3rem", md: "4rem" },
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
                visuels époustouflants. En outre, ces animatroniques peuvent
                être utilisées dans des lieux comme les boîtes de nuit pour des
                installations visuelles dynamiques, ou dans des expositions
                artistiques, des musées, des salons professionnels, et même des
                attractions touristiques pour immerger les visiteurs dans des
                univers imaginaires. <br /> <br />
                Leur versatilité permet de les adapter à une multitude de
                scénarios et de configurations, avec la possibilité de les
                allier à des hologrammes, apportant ainsi une touche de magie et
                de réalisme là où ils sont intégrés.
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
        <Box my={4} width="90%" margin='auto'>
          <Typography
            variant="h3"
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
            créativité et innovation. <br /> Je conçois et crée des
            animatroniques uniques et personnalisés me permettant de m’adapter
            aux différentes contraintes et exigences et suis à votre écoute que
            ce soit pendant la phase de création, la mise en place, ainsi que la
            vie de votre animatronique. <br /> <br /> Les animatroniques que je
            crée sont conçus pour être extrêmement robustes tout en étant
            faciles à réparer si nécessaire. Grâce à l’utilisation de matériaux
            durables et la conception modulaire, chaque pièce peut être
            facilement remplacée, ce qui garantit une longévité accrue des
            dispositifs, même dans des environnements exigeants. <br />
            Cela permet de réduire les coûts de maintenance et d’assurer une
            utilisation fiable sur le long terme.
          </Typography>
        </Box>
      <Box>
        <CreationList creations={creations}  basePath="animatroniques" />
      </Box>

      <Footer />
    </div>
  );
}
