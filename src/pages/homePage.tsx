import {
  Box,
  Button,
  Stack,
  Typography,
  Avatar,
  List,
  ListItem,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
// import Arabesque1 from "../assets/Arabesque1.svg";
// import Arabesque2 from "../assets/Arabesque2.svg";
import Engrenage from "../assets/engrenage.svg";
import Engrenage1 from "../assets/engrenage1.svg";
import LogoInsta from "../assets/logo-insta.png";
import creation from "../assets/creation.jpg";
import escape from "../assets/escape.jpg";
import { Link } from "react-router-dom";
import HomePageCarrousel from "../components/carrousel/homePageCarrousel";
import atelier from "../assets/Banniere.jpg";
import {
  Brush,
  Visibility,
  Star,
  Support,
  Lightbulb,
} from "@mui/icons-material";
import Social from "../components/social/social";
import Features from "../components/features/features";

export default function HomePage() {
  const features = [
    {
      title: "Créations sur-mesure",
      description:
        "Chaque pièce est pensée et fabriquée selon vos envies, pour un résultat personnalisé.",
      icon: <Brush sx={{ color: "#8B0000", fontSize: "40px" }} />,
    },
    {
      title: "Immersion totale",
      description:
        "Escape games, animatroniques et hologrammes pour des expériences captivantes et inoubliables.",
      icon: <Visibility sx={{ color: "#8B0000", fontSize: "40px" }} />,
    },
    {
      title: "Qualité haut de gamme",
      description:
        "Un travail minutieux avec des matériaux et des techniques de pointe pour un rendu exceptionnel.",
      icon: <Star sx={{ color: "#8B0000", fontSize: "40px" }} />,
    },
    {
      title: "Accompagnement",
      description:
        "Je vous guide et vous conseille à chaque étape pour transformer vos idées en réalité.",
      icon: <Support sx={{ color: "#8B0000", fontSize: "40px" }} />,
    },
    {
      title: "Impact visuel fort",
      description:
        "Des créations qui attirent le regard et marquent les esprits, idéales pour vos événements et espaces.",
      icon: <Lightbulb sx={{ color: "#8B0000", fontSize: "40px" }} />,
    },
  ];

  // useEffect(() => {
  //   if (!creationsLoaded) dispatch(fetchCreationsAsync());
  // }, [creationsLoaded, dispatch]);

  return (
    <div>
      <Box
        sx={{
          position: "relative", // Positionnement relatif pour le conteneur
          width: "100%", // Largeur du conteneur à 100%

          height: { xs: "auto", sm: "300px", md: "400px", lg: "800px" }, // Hauteur dynamique en fonction de l'écran
          display: "flex", // Utilisation de Flexbox pour la disposition
          flexDirection: { xs: "column", sm: "row" }, // Sur mobile (xs), l'image et le texte sont empilés, sur desktop (sm et plus), l'image est à gauche et le texte à droite
          justifyContent: "center", // Centrer le contenu
          alignItems: "center", // Alignement des éléments
        }}
      >
        {/* Partie image */}
        <Box
          component="img"
          srcSet={`${atelier}?w=1000&h=500&fit=crop 1000w, ${atelier}?w=600&h=300&fit=crop 600w`}
          sizes="(max-width: 600px) 600px, 1000px"
          alt="image bannière atelier d'onirium"
          sx={{
            width: "100%", // L'image prend toute la largeur
            height: { xs: "auto", sm: "100%" }, // Hauteur ajustée pour mobile et desktop
            objectFit: "cover", // L'image couvre l'espace sans déformation
            position: { xs: "relative", sm: "absolute" }, // Sur mobile, on utilise "relative" pour que l'image reste dans le flux de la page
            top: { xs: "0", sm: "0" }, // Position verticale ajustée pour chaque taille d'écran
            left: { xs: "0", sm: "0" }, // Position horizontale ajustée
          }}
        />

        {/* Partie texte */}
        <Box
          sx={{
            margin: "0 auto",

            position: { xs: "relative", sm: "absolute" }, // Sur mobile, texte reste dans le flux normal, sinon il est absolu
            top: { xs: "auto", sm: "50%" }, // Sur mobile, on n'utilise pas de "top" pour le texte, sur desktop, centré verticalement
            left: { xs: "0", sm: "20px" }, // Espace à gauche pour le texte sur desktop
            transform: { xs: "none", sm: "translateY(-50%)" }, // Centrer verticalement sur desktop
            zIndex: 1, // Texte au-dessus de l'image
            padding: { xs: 0, sm: "30px" }, // Espacement dynamique
          }}
        >
          <Typography
            variant="h2"
            sx={{
              margin: "0 auto",

              textAlign: "left" ,  
              textShadow: "1px 1px 5px rgba(255, 255, 255, 0.6)",
              width: "100%", // Largeur du texte ajustée
              paddingTop: "30px",
              paddingX: { xs: "20px", sm: 0 }, // Espacement horizontal ajusté

              fontSize: { xs: "3.5rem", sm: "3rem", md: "4rem" }, // Taille du texte ajustée
            }}
          >
            Votre imagination n’a pas de limites… <br />
          </Typography>
          <Typography
            variant="h2"
            sx={{
              margin: "0 auto",
              textAlign: "left" ,  
              textShadow: "1px 1px 5px rgba(255, 255, 255, 0.6)",
              width: "100%", // Largeur du texte ajustée
              fontSize: { xs: "3.5rem", sm: "3rem", md: "4rem" }, // Taille du texte ajustée
              paddingBottom: "30px",
              paddingX: { xs: "20px", sm: 0 }, // Espacement horizontal ajusté

            }}
          >
            Mes créations non plus !
          </Typography>
          <Typography
            variant="body1"
            sx={{
              margin: { xs: "0 auto", sm: "0 auto", md: "0" },
              width: { xs: "80%", sm: "45%", md: "45%" }, // Largeur du texte ajustée
              marginBottom: { xs: "40px", sm: "40px", md: "40px" }, 
            }}
          >
            Vous êtes une entreprise à la recherche de créations personnalisées
            pour vos événements ou vos bureaux ? <br />
            <br />
            Vous êtes un particulier et souhaitez transformer votre intérieur
            avec des objets uniques ? <br />
            <br />
            Vous êtes un organisateur d'événements et vous avez besoin d'un
            décor immersif et original ? <br />
            <br />
            Vous êtes au bon endroit !
          </Typography>

          {/* Bouton */}
          <Box>
            <Button
              component={Link}
              to="/me-contacter"
              sx={{
                margin:  { xs: "0 auto", sm: 0, md: 0 }, 
                marginY:  { xs: "20px", sm: 0, md: 0 }, 

                width: { xs: "50%", sm: "40%", md: "25%" }, // Taille du bouton ajustée pour mobile et bureau
                height: 50,
                fontSize: { xs: "16px", sm: "18px" }, // Augmenter la taille du texte sur mobile et bureau
                backgroundColor: "#e7e2e1",
                color: "#640a02",
                fontFamily: "Gowun",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                },
              }}
            >
              Me contacter
              <span style={{ color: "#640a02", marginLeft: "5px" }}>&gt;</span>
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Section principale */}
      <Box component="main" sx={{ width: "80%", margin: "0 auto" }}>
        {/* Section Qui suis-je */}
        <Typography
          variant="h2"
          sx={{
            paddingY: { xs: "30px", sm: "30px", md: "40px" },
            textAlign: { xs: "left", sm: "center", md: "center" },
            textShadow: "1px 1px 5px rgba(255, 255, 255, 0.6)",
          }}
        >
          Qui suis-je ?
        </Typography>

        <Stack component="article" direction={{ xs: "column", md: "row" }}>
          {/* Texte à droite sur desktop, en bas sur mobile */}
          <Typography variant="body1">
            Depuis toujours, j'ai cette passion de créer, qu’il s’agisse
            d’objets, de décors ou d’expériences. La création a toujours été
            pour moi un moyen d’exprimer mon imagination et d’explorer de
            nouvelles possibilités.
            <br />
            <br />
            Aujourd’hui, mon objectif est de vous faire <strong>rêver</strong>,
            d’explorer de nouveaux horizons et de redéfinir les frontières de la
            créativité et de l’innovation. Mon approche repose sur un mélange d'
            <strong>artisanat traditionnel</strong> et de
            <strong>technologies modernes</strong>, afin de créer des
            expériences qui marquent les esprits.
            <br />
            <br />
            En tant qu'<strong>artiste polyvalente</strong>, je m'adapte à
            chaque projet avec une attention particulière aux détails. Que ce
            soit pour des <strong>escape games immersifs</strong>, des{" "}
            <strong>animatroniques réalistes</strong> qui donnent vie aux
            décors, ou des <strong>objets en bois gravés et découpés</strong>,
            chaque création est unique et personnalisée.
            <br />
            <br />
            Je propose également des <strong>créations sur mesure</strong> pour
            les entreprises, les événements et les particuliers. Mon but ?
            Transformer vos idées en réalité et vous offrir une expérience
            mémorable !
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          marginY: "50px", // Ajout de marge en haut et en bas pour l'espace
          backgroundColor: "#E7E2E1",
          position: "relative",
          overflow: "hidden",
          pt: "50px", // Adding padding-top to avoid overlap with the image
          pb: "50px", // Adding padding-bottom for spacing
        }}
      >
        {/* Engrenage gauche */}
        <Box
          component="img"
          src={Engrenage1}
          alt="Engrenage gauche"
          sx={{
            position: "absolute",
            top: { xs: "-65px", sm: "-120px" }, // Adjust top position for smaller screens
            left: { xs: "-65px", sm: "-115px" }, // Adjust left position for smaller screens
            width: { xs: "250px", sm: "450px", md: "550px" }, // Responsive width
            height: { xs: "300px", sm: "450px", md: "550px" }, // Responsive height
            opacity: 0.5,
            transform: "rotate(33deg)", // Optional rotation
          }}
        />

        {/* Contenu central */}
        <Box
          sx={{
            width: { xs: "%", sm: "50%", md: "25%" },
            m: "0 auto",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "black",
              fontSize : { xs: "3rem", sm: "3.5rem", md: "5rem" },
            }}
          >
            Ne manquez rien !
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "black",
              mb: "30px",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
              padding: '10px',
            }}
          >
            Suivez L'Atelier d'Onirium sur les réseaux sociaux pour plonger dans
            l'univers de mes créations et ne rien manquer de mes dernières
            nouveautés !
          </Typography>

          {/* Composant Social à proximité du texte */}
          <Social />
        </Box>

        {/* Engrenage droit */}
        <Box
          component="img"
          src={Engrenage}
          alt="Engrenage droit"
          sx={{
            position: "absolute",
            bottom: { xs: "-80px", sm: "-115px" }, // Adjust bottom position for smaller screens
            right: { xs: "-60px", sm: "-115px" }, // Adjust right position for smaller screens
            width: { xs: "250px", sm: "450px", md: "600px" }, // Make width responsive
            height: { xs: "300px", sm: "450px", md: "650px" }, // Responsive height
            opacity: 0.5,
            transform: "rotate(-60deg)", // Optional rotation
          }}
        />
      </Box>

      {/* Carrousel */}
      <HomePageCarrousel />
      {/* Citation */}
      {/* <Stack
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
            fontFamily: "Gowun",
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
      </Stack> */}

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
              style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
              srcSet={`${creation}?w=600&h=400 600w, ${creation}?w=1200&h=800 1200w`}
              sizes="(max-width: 600px) 600px, 1200px"
              loading="lazy"
            />
          </Box>

          <Box sx={{ flex: 1, order: { xs: 1, md: 0 } }}>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                marginBottom: "20px",
                textShadow: "1px 1px 5px rgba(255, 255, 255, 0.6)",
              }}
            >
              Animatroniques
            </Typography>

            <Typography variant="body1">
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
                  width: { xs: "70%", sm: "30%" }, // Agrandissement de la taille du bouton sur mobile et bureau
                  height: 50, // Augmenter la hauteur du bouton
                  fontSize: { xs: "16px", sm: "18px" }, // Augmenter la taille du texte sur mobile et bureau
                  backgroundColor: "#e7e2e1", // Fond beige clair
                  color: "#640a02", // Texte bordeaux
                  fontFamily: "Gowun", // Police Alice
                  margin: "5px",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center", // Centrer le texte
                  marginTop: "50px",
                  transition: "all 0.3s ease", // Animation fluide pour les changements
                  "&:hover": {
                    transform: "scale(1.1)", // Agrandissement plus important du bouton au survol
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Ombre légère pour un effet de profondeur
                    cursor: "pointer", // Modifier le curseur pour indiquer que le bouton est cliquable
                  },
                  "& span": {
                    transition: "transform 0.3s ease", // Animation fluide pour l'icône
                  },
                  "&:hover span": {
                    transform: "translateX(5px)", // Déplacer légèrement l'icône ">" vers la droite au survol
                  },
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
                marginBottom: "20px",
                marginTop: "20px",
                textShadow: "1px 1px 5px rgba(255, 255, 255, 0.6)",
              }}
            >
              Escape Games
            </Typography>

            <Typography component="section" variant="body1">
              Dark Hypercube Experience est un projet nomade qui représente une
              avancée majeure dans le domaine de l’immersion. <br />
              Le concept repose sur un mécanisme central novateur, ainsi que de
              décors ultra-immersifs, conçus pour offrir une dynamique de jeu
              inédite et une expérience encore jamais vue dans l’univers des
              escape games. <br />
              <br />
              L'objectif de Dark Hypercube Experience est de proposer aux
              joueurs une aventure immersive, pleine de surprises et
              d'interactions inattendues, tout en gardant une fluidité et une
              intensité constantes tout au long du jeu.
            </Typography>
            <Typography
              component="section"
              variant="body1"
              sx={{
                textAlign: "center",
              }}
            ></Typography>
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
                  width: { xs: "70%", sm: "30%" }, // Agrandissement de la taille du bouton sur mobile et bureau
                  height: 50, // Augmenter la hauteur du bouton
                  fontSize: { xs: "16px", sm: "18px" }, // Augmenter la taille du texte sur mobile et bureau
                  backgroundColor: "#e7e2e1", // Fond beige clair
                  color: "#640a02", // Texte bordeaux
                  fontFamily: "Gowun", // Police Alice
                  margin: "5px",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center", // Centrer le texte
                  marginTop: "50px",
                  transition: "all 0.3s ease", // Animation fluide pour les changements
                  "&:hover": {
                    transform: "scale(1.1)", // Agrandissement plus important du bouton au survol
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Ombre légère pour un effet de profondeur
                    cursor: "pointer", // Modifier le curseur pour indiquer que le bouton est cliquable
                  },
                  "& span": {
                    transition: "transform 0.3s ease", // Animation fluide pour l'icône
                  },
                  "&:hover span": {
                    transform: "translateX(5px)", // Déplacer légèrement l'icône ">" vers la droite au survol
                  },
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
                objectFit: "contain",
              }}
              srcSet={`${escape}?w=600&h=400 600w, ${escape}?w=1200&h=800 1200w`}
              sizes="(max-width: 600px) 600px, 1200px"
              loading="lazy"
            />
          </Box>
        </Stack>

        <Features features={features} />
        <Stack
          component="article"
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="flex-start"
          justifyContent="space-between"
        >
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
              alt="Hologrammes et Mapping"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
              srcSet={`${creation}?w=600&h=400 600w, ${creation}?w=1200&h=800 1200w`}
              sizes="(max-width: 600px) 600px, 1200px"
              loading="lazy"
            />
          </Box>

          <Box sx={{ flex: 1, order: { xs: 1, md: 0 } }}>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                marginBottom: "20px",
                textShadow: "1px 1px 5px rgba(255, 255, 255, 0.6)",
              }}
            >
              Hologrammes & Mappings
            </Typography>

            <Typography variant="body1">
              Les hologrammes et les technologies de mapping révolutionnent la
              perception de l’espace et de l’image. <br />
              Grâce à ces solutions innovantes, chaque environnement peut se
              transformer en une expérience immersive et spectaculaire, adaptée
              à divers événements et scénarios. <br />
              <br />
              En synchronisant les projections visuelles avec l’architecture ou
              des objets, ces technologies métamorphosent les espaces et créent
              des univers fascinants, offrant ainsi une immersion unique. <br />
              <br />
              Elles ouvrent un champ infini de possibilités pour captiver et
              surprendre le public. Adaptées aussi bien aux spectacles qu’aux
              événements professionnels, elles apportent une dimension innovante
              et émotionnelle à chaque projet.
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
                to="/hologrammes-et-mapping"
                sx={{
                  width: { xs: "70%", sm: "30%" }, // Agrandissement de la taille du bouton sur mobile et bureau
                  height: 50, // Augmenter la hauteur du bouton
                  fontSize: { xs: "16px", sm: "18px" }, // Augmenter la taille du texte sur mobile et bureau
                  backgroundColor: "#e7e2e1", // Fond beige clair
                  color: "#640a02", // Texte bordeaux
                  fontFamily: "Gowun", // Police Alice
                  margin: "5px",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center", // Centrer le texte
                  marginTop: "50px",
                  transition: "all 0.3s ease", // Animation fluide pour les changements
                  "&:hover": {
                    transform: "scale(1.1)", // Agrandissement plus important du bouton au survol
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Ombre légère pour un effet de profondeur
                    cursor: "pointer", // Modifier le curseur pour indiquer que le bouton est cliquable
                  },
                  "& span": {
                    transition: "transform 0.3s ease", // Animation fluide pour l'icône
                  },
                  "&:hover span": {
                    transform: "translateX(5px)", // Déplacer légèrement l'icône ">" vers la droite au survol
                  },
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
                marginBottom: "20px",
                marginTop: "20px",
                textShadow: "1px 1px 5px rgba(255, 255, 255, 0.6)",
              }}
            >
              Création diverses
            </Typography>

            {/* Texte galerie exposition */}
            <Typography component="section" variant="body1">
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
                to="/creations-diverse"
                sx={{
                  width: { xs: "70%", sm: "30%" }, // Agrandissement de la taille du bouton sur mobile et bureau
                  height: 50, // Augmenter la hauteur du bouton
                  fontSize: { xs: "16px", sm: "18px" }, // Augmenter la taille du texte sur mobile et bureau
                  backgroundColor: "#e7e2e1", // Fond beige clair
                  color: "#640a02", // Texte bordeaux
                  fontFamily: "Gowun", // Police Alice
                  margin: "5px",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center", // Centrer le texte
                  marginTop: "50px",
                  transition: "all 0.3s ease", // Animation fluide pour les changements
                  "&:hover": {
                    transform: "scale(1.1)", // Agrandissement plus important du bouton au survol
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Ombre légère pour un effet de profondeur
                    cursor: "pointer", // Modifier le curseur pour indiquer que le bouton est cliquable
                  },
                  "& span": {
                    transition: "transform 0.3s ease", // Animation fluide pour l'icône
                  },
                  "&:hover span": {
                    transform: "translateX(5px)", // Déplacer légèrement l'icône ">" vers la droite au survol
                  },
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
              alt="Créations diverses"
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
              }}
              srcSet={`${escape}?w=600&h=400 600w, ${escape}?w=1200&h=800 1200w`}
              sizes="(max-width: 600px) 600px, 1200px"
              loading="lazy"
            />
          </Box>
        </Stack>
      </Box>

      <Box sx={{ maxWidth: "80%", margin: "0 auto", paddingY: 4 }}>
        {/* En-tête avec titre Instagram */}
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            marginBottom: "20px",
            marginTop: "20px",
            textShadow: "1px 1px 5px rgba(255, 255, 255, 0.6)",
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
              <Typography variant="body1">latelierdonirium</Typography>
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
              startIcon={<InstagramIcon />}
              href="https://www.instagram.com/latelierdonirium/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: { xs: "50%", sm: "15%" }, // Agrandissement de la taille du bouton sur mobile et bureau
                height: 50, // Augmenter la hauteur du bouton
                fontSize: { xs: "16px", sm: "18px" }, // Augmenter la taille du texte sur mobile et bureau
                backgroundColor: "#e7e2e1", // Fond beige clair
                color: "#640a02", // Texte bordeaux
                fontFamily: "Gowun", // Police Alice
                margin: "5px",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center", // Centrer le texte
                marginTop: "50px",
                transition: "all 0.3s ease", // Animation fluide pour les changements
                "&:hover": {
                  transform: "scale(1.1)", // Agrandissement plus important du bouton au survol
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Ombre légère pour un effet de profondeur
                  cursor: "pointer", // Modifier le curseur pour indiquer que le bouton est cliquable
                },
                "& span": {
                  transition: "transform 0.3s ease", // Animation fluide pour l'icône
                },
                "&:hover span": {
                  transform: "translateX(5px)", // Déplacer légèrement l'icône ">" vers la droite au survol
                },
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
