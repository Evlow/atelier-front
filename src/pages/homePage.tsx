import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  Avatar,
  List,
  ListItem,
  Link as MuiLink,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import Home from "../assets/home.jpg";
import Arabesque1 from "../assets/Arabesque1.svg";
import Arabesque2 from "../assets/Arabesque2.svg";
import Engrenage from "../assets/engrenage.svg";
import Engrenage1 from "../assets/engrenage1.svg";
import LogoInsta from "../assets/logo-insta.png";
import creation from "../assets/creation.jpg";
import escape from "../assets/escape.jpg";
import { Link } from "react-router-dom";
import HomePageCarrousel from "../components/carrousel/homePageCarrousel";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import tiktok from "../assets/tiktok.svg";
import atelier from "../assets/Banniere.jpg";
export default function HomePage() {
  const socialLinks = [
    {
      name: "facebook",
      url: "https://www.facebook.com/latelierdonirium",
      icon: facebook,
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/latelierdonirium?igsh=MWF3Z2dyNzR5N2l0Yw==",
      icon: instagram,
    },
    {
      name: "tikTok",
      url: "https://www.tiktok.com/@latelierdonirium?_t=8pf3S8fZJab&_r=1",
      icon: tiktok,
    },
  ];

  // useEffect(() => {
  //   if (!creationsLoaded) dispatch(fetchCreationsAsync());
  // }, [creationsLoaded, dispatch]);

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "600px",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={atelier}
          alt="image bannière atelier d'onirium"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // L'image couvre toute la bannière
          }}
        />
      </Box>
      {/* Section principale */}
      <Box
        component="main"
        sx={{ width: "80%", margin: "0 auto", paddingY: 4 }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            padding: "20px",
            fontSize: { xs: "3rem", md: "5rem" },
          }}
        >
          L'Atelier d'Onirium, la création au-delà du réel
        </Typography>

        <Stack
          component="article"
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body1" sx={{ flex: 1, textAlign: "justify" }}>
            L'Atelier d'Onirium est avant tout un lieu où l'imagination prend
            vie à travers des projets variés et originaux. Mon approche repose
            sur un mélange d'artisanat traditionnel et de technologies modernes
            pour créer des expériences qui marquent les esprits.
            <br />
            <br />
            En tant qu'artiste polyvalente, je m'adapte à chaque projet avec une
            attention particulière aux détails, que ce soit pour des escape
            games immersifs où les joueurs vivent des aventures uniques, des
            animatroniques réalistes qui ajoutent une dimension vivante à des
            décors, ou encore des objets en bois gravés et découpés qui
            apportent une touche personnelle à votre intérieur.
            <br />
            <br />
            Mon univers est atypique, influencé par le fantastique, et j'aime
            repousser les limites de ce qui est possible. Chaque création, qu'il
            s'agisse de décors grandeur nature, d'impressions 3D, ou d'éléments
            sur mesure comme des mugs personnalisés, est conçue pour sortir de
            l'ordinaire et offrir une expérience visuelle et sensorielle unique.
            <br />
            <br />
            Mon objectif est de vous inviter à rêver, à explorer des mondes
            nouveaux, tout en redéfinissant les codes de la créativité et de
            l'innovation.
          </Typography>

          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
              src={Home}
              alt="L'Atelier d'Onirium"
              style={{ maxWidth: "80%", height: "auto" }}
            />
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          backgroundColor: "#E7E2E1",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "80%", md: "45%" },
            m: "50px auto",
            textAlign: "center",
          }}
        >
          {/* Engrenage image */}
          <Box
            component="img"
            src={Engrenage1}
            alt="Engrenage gauche"
            sx={{
              position: "absolute", // Position it within the container
              top: "-120px",
              left: "-115px", // Move it to the left side (use negative value to position it outside)
              width: { xs: "400px", sm: "450px", md: "550px" }, // Make width responsive
              height: { xs: "400px", sm: "450px", md: "550px" }, // Make height responsive
              opacity: 0.5,
              overflow: "hidden", // Ensure no overflow
              transform: "rotate(33deg)", // Optional rotation
            }}
          />

          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "5rem", sm: "6rem", md: "7rem" }, // Adjusts the font size based on screen size
              color: "black",
            }}
          >
            Ne manquez rien
          </Typography>

          <Typography variant="body1" sx={{ padding: "10px", color: "black" }}>
            Suivez L'Atelier d'Onirium sur les réseaux sociaux pour plonger dans
            l'univers de mes créations et ainsi ne rien manquer de mes dernières
            nouveautés !
          </Typography>
        </Box>

        <Grid container justifyContent="center" spacing={2}>
          {socialLinks.map((link) => (
            <li key={link.name}>
              <MuiLink
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "inline-block",
                  width: 40,
                  height: 40,
                }}
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  style={{ width: "100%", height: "100%" }}
                />
              </MuiLink>
            </li>
          ))}
        </Grid>

        {/* Engrenage image */}
        <Box
          component="img"
          src={Engrenage}
          alt="Engrenage droit"
          sx={{
            position: "absolute", // Position it within the container
            bottom: "-115px",
            right: "-115px", // Move it to the left side (use negative value to position it outside)
            width: { xs: "400px", sm: "450px", md: "600px" }, // Make width responsive
            height: { xs: "450px", sm: "450px", md: "650px" }, // Make height responsive
            opacity: 0.5,
            overflow: "hidden", // Ensure no overflow
            transform: "rotate(-60deg)", // Optional rotation
          }}
        />
      </Box>

      {/* Carrousel */}
      <HomePageCarrousel />
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
          Créer quelque chose d'unique, c'est donner vie à une idée qui
          n'existait nulle part ailleurs.
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

      <Box component="main" sx={{ width: "80%", margin: "0 auto", mt: 4 }}>
        <Stack
          component="article"
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
              src={creation}
              alt="animatronique"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>

          <Box sx={{ flex: 1, order: { xs: 1, md: 0 } }}>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: { xs: "3rem", md: "4rem" },
                marginBottom: "20px",
              }}
            >
              Les Animatroniques
            </Typography>

            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Les animatroniques sont des créations robotiques qui reproduisent
              des mouvements réalistes, souvent utilisés pour simuler des
              animaux, des peluches, des personnages, ou même des créatures
              fantastiques. <br /> <br />
              Grâce à des moteurs et des modules sonores sophistiqués, elles
              offrent une expérience immersive captivante dans divers
              environnements (escape-game, évenementiel, cinéma, parcs
              d’attraction, discothèque, etc. ). <br />
              <br />
              En tant que créatrice d'animatroniques, je mets à profit des
              technologies avancées pour donner vie à des créations uniques,
              qu'elles soient inspirées du réel ou du fantastique.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Button
                component={Link}
                to="/animatroniques"
                sx={{
                  width: { xs: "70%", sm: "25%" }, // Ajuste la taille du bouton sur mobile et bureau
                  height: 40,
                  backgroundColor: "#e7e2e1", // Fond bordeaux
                  borderColor: "#640a02", // Bordure blanche
                  color: "#640a02", // Texte blanc
                  fontFamily: "Alice", // Police "Alice"
                  border: "1px solid", // Ajout d'une bordure
                  margin: "5px",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "50px",
                }}
              >
                Découvrir
                <span style={{ color: "#640a02", marginLeft: "5px" }}>
                  &gt;
                </span>
              </Button>
            </Box>
          </Box>
        </Stack>

        <Stack
          component="article"
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{ marginTop: "50px" }}
        >
          <Box sx={{ flex: 1, order: { xs: 1, md: 0 } }}>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: { xs: "3rem", md: "4rem" },
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              Escape Games
            </Typography>

            <Typography
              component="section"
              variant="body1"
              sx={{
                textAlign: "center",
              }}
            >
              Dark Hypercube Experience est un projet nomade qui représente une
              avancée majeure dans le domaine de l’immersion. <br />
              Le concept repose sur un mécanisme central novateur, ainsi que de
              décors ultra-immersifs, conçus pour offrir une dynamique de jeu
              inédite et une expérience encore jamais vue dans l’univers des
              escape games. <br /><br />L'objectif de Dark Hypercube Experience est de
              proposer aux joueurs une aventure immersive, pleine de surprises
              et d'interactions inattendues, tout en gardant une fluidité et une
              intensité constantes tout au long du jeu.
            </Typography>
            <Typography
              component="section"
              variant="body1"
              sx={{
                textAlign: "center",
              }}
            >
             
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Button
                component={Link}
                to="/escape-games"
                sx={{
                  width: { xs: "70%", sm: "25%" }, // Ajuste la taille du bouton sur mobile et bureau
                  height: 40,
                  backgroundColor: "#e7e2e1", // Fond bordeaux
                  borderColor: "#640a02", // Bordure blanche
                  color: "#640a02", // Texte blanc
                  fontFamily: "Alice", // Police "Alice"
                  border: "1px solid", // Ajout d'une bordure
                  margin: "5px",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "50px",
                }}
              >
                Découvrir
                <span style={{ color: "#640a02", marginLeft: "5px" }}>
                  &gt;
                </span>
              </Button>
            </Box>
          </Box>
          {/* Image galerie expo */}
          <Box
            component="section"
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={escape}
              alt="Escape Games"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Stack>

        <Stack
          component="article"
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
              src={creation}
              alt="Création unique"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>

          <Box sx={{ flex: 1, order: { xs: 1, md: 0 } }}>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: { xs: "3rem", md: "4rem" },
                marginBottom: "20px",
              }}
            >
              Les Animatroniques
            </Typography>

            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Les animatroniques sont des créations robotiques qui reproduisent
              des mouvements réalistes, souvent utilisés pour simuler des
              animaux, des peluches, des personnages, ou même des créatures
              fantastiques. <br /> <br />
              Grâce à des moteurs et des modules sonores sophistiqués, elles
              offrent une expérience immersive captivante dans divers
              environnements (escape-game, évenementiel, cinéma, parcs
              d’attraction, discothèque, etc. ). <br />
              <br />
              En tant que créatrice d'animatroniques, je mets à profit des
              technologies avancées pour donner vie à des créations uniques,
              qu'elles soient inspirées du réel ou du fantastique.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Button
                component={Link}
                to="/creations-atelier"
                sx={{
                  width: { xs: "70%", sm: "25%" }, // Ajuste la taille du bouton sur mobile et bureau
                  height: 40,
                  backgroundColor: "#e7e2e1", // Fond bordeaux
                  borderColor: "#640a02", // Bordure blanche
                  color: "#640a02", // Texte blanc
                  fontFamily: "Alice", // Police "Alice"
                  border: "1px solid", // Ajout d'une bordure
                  margin: "5px",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "50px",
                }}
              >
                Découvrir
                <span style={{ color: "#640a02", marginLeft: "5px" }}>
                  &gt;
                </span>
              </Button>
            </Box>
          </Box>
        </Stack>

        <Stack
          component="article"
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="flex-start"
          justifyContent="space-between"
          sx={{ marginTop: "50px" }}
        >
          {/* Conteneur pour le titre et la description */}
          <Box sx={{ flex: 1, order: { xs: 1, md: 0 } }}>
            {/* Titre "Galerie Expo" */}
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontSize: { xs: "3rem", md: "4rem" },
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              Les Escape Games
            </Typography>

            {/* Texte galerie exposition */}
            <Typography
              component="section"
              variant="body1"
              sx={{
                textAlign: "center",
              }}
            >
              Mon univers est atypique, influencé par le fantastique, et j'aime
              repousser les limites de ce qui est possible. <br />
              Chaque création, qu'il s'agisse de décors grandeur nature,
              d'impressions 3D, ou d'éléments sur mesure comme des mugs
              personnalisés, est conçue pour sortir de l'ordinaire et offrir une
              expérience visuelle et sensorielle unique.
              <br />
              <br />
              Mon objectif est de vous inviter à rêver, à explorer des mondes
              nouveaux, tout en redéfinissant les codes de la créativité et de
              l'innovation.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Button
                component={Link}
                to="/escape-games"
                sx={{
                  width: { xs: "70%", sm: "25%" }, // Ajuste la taille du bouton sur mobile et bureau
                  height: 40,
                  backgroundColor: "#e7e2e1", // Fond bordeaux
                  borderColor: "#640a02", // Bordure blanche
                  color: "#640a02", // Texte blanc
                  fontFamily: "Alice", // Police "Alice"
                  border: "1px solid", // Ajout d'une bordure
                  margin: "5px",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "50px",
                }}
              >
                Découvrir
                <span style={{ color: "#640a02", marginLeft: "5px" }}>
                  &gt;
                </span>
              </Button>
            </Box>
          </Box>
          {/* Image galerie expo */}
          <Box
            component="section"
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={creation}
              alt="Galerie Exposition"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Stack>
      </Box>

      {/* Section Création Unique */}
      <Box sx={{ maxWidth: "80%", margin: "0 auto", paddingY: 4 }}>
        {/* En-tête avec titre Instagram */}
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "3rem", md: "4rem" },
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          Instagram
        </Typography>

        {/* En-tête avec profil */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            marginBottom: 1,
          }}
        >
          {/* Lien autour de l'Avatar pour rediriger vers Instagram */}
          <Link
            to="https://www.instagram.com/latelierdonirium/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              alt="L'Atelier d'Onirium"
              src={LogoInsta}
              sx={{
                width: { xs: 90, sm: 100, md: 120 },
                height: { xs: 90, sm: 100, md: 120 },
              }}
            />
          </Link>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box>
              <Typography variant="h5">latelierdonirium</Typography>
              {/* Statistiques en row */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },

                  gap: { xs: 1, md: 2 },
                  flexWrap: "wrap",
                }}
              >
                <Typography variant="body1">105 publications</Typography>
                <Typography variant="body1">145 followers</Typography>
                <Typography variant="body1">27 suivi(e)s</Typography>
              </Box>
            </Box>

            {/* Bouton "S'abonner" */}
            <Button
              variant="contained"
              startIcon={<InstagramIcon />}
              href="https://www.instagram.com/latelierdonirium/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                height: 40,
                backgroundColor: "#e7e2e1", // Fond bordeaux
                borderColor: "#640a02", // Bordure bordeaux
                color: "#640a02", // Texte bordeaux
                fontFamily: "Alice", // Police "Alice"
                border: "1px solid", // Bordure
                textTransform: "none", // Pas de transformation du texte
                marginTop: { xs: 2, md: 0 }, // Espacement en fonction de l'écran
              }}
            >
              S'abonner
            </Button>
          </Box>
        </Box>

        {/* Description */}
        <Box sx={{ marginBottom: 1 }}>
          <Typography
            variant="body1"
            sx={{
              color: "#CFC5C3",
            }}
          >
            <List sx={{ paddingLeft: { xs: 0, md: "115px" } }}>
              <ListItem sx={{ color: "#CFC5C3", padding: "0" }}>
                ✨ Créatrice dont l'objectif est de repousser les limites du
                réel ! ✨
              </ListItem>
              <ListItem sx={{ color: "#CFC5C3", padding: "0" }}>
                🔑 Escape-games
              </ListItem>
              <ListItem sx={{ color: "#CFC5C3", padding: "0" }}>
                ⚙️ Animatroniques
              </ListItem>
              <ListItem sx={{ color: "#CFC5C3", padding: "0" }}>
                🎬 Hologrammes & Mapping
              </ListItem>
              <ListItem sx={{ color: "#CFC5C3", padding: "0" }}>
                🎭 Créations diverses
              </ListItem>
              <ListItem
                sx={{ color: "#CFC5C3", fontWeight: "lighter", padding: 0 }}
              >
                <Link
                  to="https://latelierdonirium.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#CFC5C3", textDecoration: "none" }}
                >
                  https://latelierdonirium.fr
                </Link>
              </ListItem>
            </List>
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
