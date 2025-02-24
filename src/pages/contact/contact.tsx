import React, { useState } from "react";
import { TextField, Typography, Container, Box } from "@mui/material";
import emailjs from "emailjs-com";
import { LoadingButton } from "@mui/lab";
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";

export default function Contact() {
  const [userEmail, setEmail] = useState("");
  const [userFirstName, setFirstName] = useState("");
  const [userLastName, setLastName] = useState("");
  const [userMessage, setMessage] = useState("");
  const [userPhone, setPhone] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("😀 Merci pour votre message, il sera traité au plus vite 😀");

    const templateId = "template_oltfym4";
    const serviceId = "service_vz72zyt";
    const publicKey = "_nibA5A1dNcgUaToq";

    const templateParams = {
      from_userFirstName: userFirstName,
      from_userLastName: userLastName,
      from_email: userEmail,
      to_name: "L'Atelier d'Onirium",
      message: userMessage,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response: unknown) => {
        console.log("Email sent successfully", response);
        setFirstName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <NavBar />
      <Container>
        <Typography variant="h2" align="center" padding="30px">
          Contactez-moi
        </Typography>

        <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
          {/* Texte à gauche */}
          <Box
            flex={1}
            sx={{ paddingRight: { md: 4 }, marginBottom: { xs: 4, md: 0 } }}
          >
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                marginBottom: 5, // Espace entre les paragraphes
                lineHeight: 1.8, // Ajuste la hauteur de ligne pour améliorer la lisibilité
                paddingBottom: "20px",
              }}
            >
              Si vous avez un projet sur mesure à soumettre ou des questions
              concernant mes services, n'hésitez pas à remplir ce formulaire
              pour me contacter. <br />
              <span>contact@latelierdonirium.fr</span>

              
            </Typography>
          </Box>

          {/* Formulaire à droite */}
          <Box flex={1}>
            <form onSubmit={submitForm}>
              <Box display="flex" flexDirection="column" gap={2}>
                <TextField
                  label="Prénom"
                  value={userFirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  fullWidth
                  required
                  InputProps={{
                    style: { color: "white" }, // Change text color to white
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#E7E2E1", // Set the border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#E7E2E1", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#E7E2E1", // Border color when focused
                      },
                    },
                  }}
                />
                <TextField
                  label="Nom"
                  value={userLastName}
                  onChange={(e) => setLastName(e.target.value)}
                  fullWidth
                  required
                  InputProps={{
                    style: { color: "white" }, // Change text color to white
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#E7E2E1", // Set the border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#E7E2E1", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#E7E2E1", // Border color when focused
                      },
                    },
                  }}
                />
                <TextField
                  label="Téléphone"
                  value={userPhone}
                  onChange={(e) => setPhone(e.target.value)}
                  fullWidth
                  InputProps={{
                    style: { color: "white" }, // Change text color to white
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#E7E2E1", // Set the border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#E7E2E1", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#E7E2E1", // Border color when focused
                      },
                    },
                  }}
                />
                <TextField
                  label="E-mail"
                  type="email"
                  value={userEmail}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  required
                  InputProps={{
                    style: { color: "white" }, // Change text color to white
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#E7E2E1", // Set the border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#E7E2E1", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#E7E2E1", // Border color when focused
                      },
                    },
                  }}
                />
                <TextField
                  label="Message"
                  value={userMessage}
                  onChange={(e) => setMessage(e.target.value)}
                  multiline
                  rows={8}
                  fullWidth
                  required
                  InputProps={{
                    style: { color: "white" }, // Change text color to white
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#E7E2E1", // Set the border color
                      },
                      "&:hover fieldset": {
                        borderColor: "#E7E2E1", // Border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#E7E2E1", // Border color when focused
                      },
                    },
                  }}
                />
                <LoadingButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: "20px",
                    mb: "20px",
                      backgroundColor: "#e7e2e1", // Fond bordeaux
                borderColor: "#640a02", // Bordure bordeaux
                color: "#640a02", // Texte bordeaux
                fontFamily: "Alice", // Police "Alice"
                border: "1px solid", // Bordure
                  }}
                >
                  Envoyer le message
                </LoadingButton>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
