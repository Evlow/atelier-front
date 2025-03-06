import { Outlet } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import ScrollToTop from "./router/scrollTop";
import Layout from "./layout/layout";

// Création du thème personnalisé avec un fond noir
const theme = createTheme({
  // Palette de couleurs
  palette: {
    background: {
      default: "black",
    },
  },
  typography: {
    h1: {
      fontFamily: "Love",
      fontWeight: "lighter",
      color: "#CFC5C3",
      letterSpacing: "0.03rem",
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
      fontSize: "6rem", // Augmenté pour être plus grand que h2
      "@media (max-width:1200px)": { fontSize: "5rem" }, 
      "@media (max-width:900px)": { fontSize: "4rem" }, 
      "@media (max-width:600px)": { fontSize: "2.5rem" }, 
    },
    
    h2: {
      fontFamily: "Lovers",
      fontWeight: "lighter",
      color: "#CFC5C3",
      letterSpacing: "0.03rem",
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
      fontSize: "4.5rem", // Légèrement réduit pour éviter la confusion avec h1
      "@media (max-width:1200px)": { fontSize: "4rem" }, 
      "@media (max-width:900px)": { fontSize: "4rem" }, 
      "@media (max-width:600px)": { fontSize: "3.8rem" }, 
    },
    
    h3: {
      fontFamily: "Lovers",
      fontWeight: "lighter",
      color: "#CFC5C3",
      letterSpacing: "0.03rem",
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
      fontSize: "3rem", 
      "@media (max-width:1200px)": { fontSize: "2.8rem" }, 
      "@media (max-width:900px)": { fontSize: "2.8rem" }, 
      "@media (max-width:600px)": { fontSize: "2.8rem" }, 
    },
    
    h4: {
      fontFamily: "Lovers",
      fontWeight: "lighter",
      color: "#CFC5C3",
      letterSpacing: "0.03rem",
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
      fontSize: "2.5rem",
    },
    
    body1: {
      lineHeight: "1.5",
      fontSize: "1.3rem",
      fontFamily: "Alice",
      color: "#CFC5C3",
      fontWeight: "lighter",
      letterSpacing: "0.02rem",
      wordSpacing: "0.03rem", 
      maxWidth: "100%",
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
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
  );
}

export default App;
