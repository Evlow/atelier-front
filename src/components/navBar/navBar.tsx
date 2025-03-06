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

// Styled NavLink avec une meilleure interaction et transition
const StyledNavLink = styled(NavLink)({
  textDecoration: 'none',
  color: 'black',
  fontSize: '1.3rem',
  padding: '10px 20px', // Un peu plus d'espace pour un effet de clic plus confortable
  borderRadius: '6px',
  position: 'relative',
  display: 'inline-block',
  transition: 'all 0.3s ease', // Animation plus rapide
  '&:hover': {
    color: '#640a02', // Bordeaux au survol
    textDecoration: 'none',
    transform: 'scale(1.05)', // Légère agrandissement au survol pour donner un effet dynamique
  },
  '&:before': {
    content: "''",
    position: 'absolute',
    left: '0',
    right: '0',
    bottom: '0',
    height: '3px',
    backgroundColor: '#640a02',
    transform: 'scaleX(0)',
    transformOrigin: 'center',
    transition: 'transform 0.25s ease-out',
  },
  '&:hover:before': {
    transform: 'scaleX(1)', // La ligne s'étend lors du survol
  },
  '&.active': {
    color: '#640a02', // Bordeaux quand le lien est actif
    textDecoration: 'none',
  },
  '&.active:before': {
    transform: 'scaleX(1)',
    transformOrigin: 'center',
  },
  // Effet responsive pour mobile
  '@media (max-width: 768px)': {
    padding: '8px 15px', // Réduit un peu la taille des boutons sur mobile
    '&:hover:before': {
    },
    '&:hover': {
      color: 'black',
    },
  },
});

// Styles pour les éléments <li>
const StyledListItem = styled('li')({
  padding: '10px 20px', // Plus d'espace autour de chaque élément de la liste
  fontSize: '1.3rem',
  whiteSpace: 'nowrap',
  textShadow: "1px 1px 4px rgba(0, 0, 0, 0.3)",

  display: 'inline-block',
  transition: 'transform 0.2s ease-in-out', // Animation légère
  '&:hover': {
    transform: 'translateY(-3px)', // Légère élévation au survol
  },
  '@media (max-width: 768px)': {
    padding: '12px 16px', // Ajuste pour les petits écrans
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
        
        paddingTop: { xs: "10px", sm: "20px" },
        paddingBottom: { xs: "5px", sm: "15px" },
        backgroundColor: "#e7e2e1",
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
              <StyledListItem key={item.path}>
                <StyledNavLink to={item.path}>
                  {item.title}
                </StyledNavLink>
              </StyledListItem>
            ))}
          </ul>
        </Box>
      </Container>
    </AppBar>
  );
}
