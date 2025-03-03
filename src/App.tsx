
import { Outlet } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import ScrollToTop from './router/scrollTop';


// Création du thème personnalisé avec un fond noir
const theme = createTheme({
  components: {
    // Personnalisation du TextField
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: "#640a02", // Couleur du label par défaut
            "&.Mui-focused": {
              color: "#c26a3c", // Couleur du label lorsqu'il est en focus
            },
            "&.MuiInputLabel-shrink": {
              color: "#640a02", // Couleur du label lorsqu'il est rempli (shrink)
            },
          },
        },
      },
    },
    // Personnalisation du champ InputBase pour appliquer la couleur à la bordure sous le champ
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-focused::after": {
            borderBottom: "2px solid #640a02", // Couleur de la bordure sous le champ en focus
          },
        },
      },
    },
  },
  // Palette de couleurs
  palette: {
    background: {
      default: "black",
    },
  },
  // Typographie
  typography: {
    h1: {
      fontFamily: "Love",
      fontWeight: "lighter",
    },
    h2: {
      fontSize: "6rem",
      fontFamily: "Lovers",
      fontWeight: "lighter",
      color: "#CFC5C3", // Couleur du texte du corps
    },
    h3: {
      fontSize: "4rem",
      fontFamily: "Lovers",
      fontWeight: "lighter",
      color: "#CFC5C3",
    },
    body1: {
      fontSize: "1.1rem",
      fontFamily: "Alice",
      color: "#CFC5C3", // Couleur du texte du corps
      fontWeight: "lighter",
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <ScrollToTop /> 
    <Outlet /> 
  </ThemeProvider>
    
  )
}

export default App
