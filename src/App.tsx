
import { Outlet } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import ScrollToTop from './router/scrollTop';
import Layout from './layout/layout';


// Création du thème personnalisé avec un fond noir
const theme = createTheme({
 
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
    body2: {
      fontSize: "1rem",
      fontFamily: "Alice",
  
      fontWeight: "lighter",
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <ScrollToTop />
    <Layout>
      <Outlet />
    </Layout>
  </ThemeProvider>
    
  )
}

export default App
