import { useState } from "react";
import { AppBar, Toolbar, IconButton, MenuItem, Container, Box, Typography } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import { SiTiktok } from "react-icons/si";
import { NavLink } from "react-router-dom";
import Divider from '@mui/material/Divider';
import { styled } from '@mui/system'; // Pour gérer les pseudo-classes CSS

// Liste des éléments du menu de navigation
const nav = [
  { title: "Accueil", path: "/accueil" },
  { title: "Animatroniques", path: "/animatroniques" },
  { title: "Escape Games", path: "/escape-games" },
  { title: "Hologrammes & mapping", path: "/hologrammes-et-mapping" },
  { title: "Créations diverses", path: "/creations-diverses" },
  { title: "Me contacter", path: "/me-contacter" },
];

  
  const StyledNavLink = styled(NavLink)({
    textDecoration: 'none',
    color: 'black',
    fontSize: '1.3rem',
    padding: '4px 20px',
    borderRadius: '6px',
    position: 'relative',
    display: 'inline-block',
    transition: 'all 0.6s ease-in-out',
    '&:hover': {
      color: '#640a02', // Bordeaux au survol
      textDecoration: 'none',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      left: '0',
      right: '0',
      bottom: '0',
      height: '3px',
      backgroundColor: '#640a02', // Ligne en bas du lien
      transform: 'scaleX(0)', // Au départ, la ligne est invisible
      transformOrigin: 'center', // Commencer l'animation au centre
      transition: 'transform 0.25s ease-out',
    },
    '&:hover:before': {
      transform: 'scaleX(1)', // La ligne s'étend lorsque l'on survole
      transformOrigin: 'center', // L'extension commence au centre
    },
     // Classe pour l'état actif
  '&.active': {
    color: '#640a02', // Bordeaux quand le lien est actif
    textDecoration: 'none', // Pas de soulignement
  },
  '&.active:before': {
    transform: 'scaleX(1)', // La ligne reste visible quand le lien est actif
    transformOrigin: 'center', // La ligne reste ancrée au centre
  },
   // Enlever l'effet de surlignement sur mobile
   '@media (max-width: 768px)': {
    '&:hover:before': {
      transform: 'scaleX(0)', // Enlever la ligne sous le texte
    },
    '&:hover': {
      color: 'black', // Pas de changement de couleur au survol sur mobile
    },
  },
  });
  


export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => setMenuOpen(true);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#e7e2e1",
        paddingTop: { xs: "20px", sm: "30px" },
        paddingBottom: { xs: "10px", sm: "30px" },
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Menu Burger */}
        <IconButton
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon sx={{ fontSize: "30px", color: "black" }} />
        </IconButton>

        {/* Titre */}
        <Typography
          color="black"
          variant="h1"
          sx={{
            flexGrow: 1,
            textAlign: "center",
            fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem", lg: "5rem" },
          }}
        >
          L'Atelier d'Onirium
        </Typography>
      </Toolbar>

      <Divider
        sx={{
          margin: "0 auto",
          backgroundColor: "#640a02",
          border: 0,
          height: "4px",
          width: "80%",
          marginY: 2,
           // Masquer le Divider sur mobile
    '@media (max-width: 768px)': {
      display: 'none',
    },
        }}
      />

      {/* Menu Mobile */}
      {menuOpen && (
        <Box
          sx={{
            paddingTop: "80px",
            position: "fixed",
            paddingBottom: { xs: "50px", sm: "30px", md: "20px" },
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#e7e2e1",
            zIndex: 1300,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {nav.map((item) => (
            <MenuItem key={item.path} onClick={handleMenuClose}>
              <StyledNavLink to={item.path}>
                {item.title}
              </StyledNavLink>
            </MenuItem>
          ))}

          <Box sx={{ marginTop: "20px", display: "flex", gap: 2 }}>
            <IconButton
              component="a"
              href="https://www.facebook.com/latelierdonirium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook sx={{ fontSize: 30, color: "black" }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/latelierdonirium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram sx={{ fontSize: 30, color: "black" }} />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.tiktok.com/@latelierdonirium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTiktok style={{ fontSize: 30, color: "black" }} />
            </IconButton>
          </Box>

          <IconButton
            aria-label="close-menu"
            onClick={handleMenuClose}
            sx={{
              position: "absolute",
              top: "10px",
              left: "10px",
              fontSize: "30px",
              color: "black",
            }}
          >
            X
          </IconButton>
        </Box>
      )}

      {/* Menu Desktop */}
      <Container sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
        <Box component="nav">
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              padding: 0,
              margin: 0,
              flexWrap: "nowrap",
            }}
          >
            {nav.map((item) => (
              <li
                key={item.path}
                style={{
                  padding: "20px",
                  fontSize: "1.3rem",
                  whiteSpace: "nowrap",
                }}
              >
                <StyledNavLink to={item.path}>
                  {item.title}
                </StyledNavLink>
              </li>
            ))}
          </ul>
        </Box>
      </Container>
    </AppBar>
  );
}
