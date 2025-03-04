import { Box, Typography, Link as MuiLink, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import Social from "../social/social";

const footerLinks = [
  { title: "Me contacter", path: "/me-contacter" },
  { title: "Politique de confidentialité", path: "/politique-de-confidentialite" },
  // { title: "CGV", path: "/CGV" },
  { title: "Espace administrateur", path: "/connexion" },

];


export default function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#E7E2E1",
          padding: "20px 0",
          width: "100%",
          marginTop:"20px",
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="space-around"
          alignItems="center"
          sx={{
            backgroundColor: "#E7E2E1",
          }}
        >
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "3rem", sm: "4rem" },
                color: "black",
                marginBottom: "10px",
              }}
            >
              L'Atelier d'Onirium
            </Typography>
            <Social />

          </Grid>

          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerLinks.map((item) => (
                <li
                  key={item.path}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <MuiLink
                    component={NavLink}
                    to={item.path}
                    sx={{
                      fontFamily: "Gowun",
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    {item.title}
                  </MuiLink>
                </li>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            backgroundColor: "#E7E2E1",
            textAlign: "center",
            paddingTop: "10px",
            paddingBottom: "20px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "black",
              fontSize: { xs: "0.8rem", sm: "1rem" },
            }}
          >
            &copy;
            <MuiLink
              href="https://www.linkedin.com/in/mathilde-peauger/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "black",
                textDecoration: "none",
                fontWeight: "lighter",
              }}
            >
            Mathilde PEAUGER
            </MuiLink>
            - fait avec ❤️- tous droits réservés.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
