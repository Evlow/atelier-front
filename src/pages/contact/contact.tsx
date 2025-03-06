import React, { useState } from "react";
import {
  TextField,
  Typography,
  Container,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import emailjs from "emailjs-com";
import { LoadingButton } from "@mui/lab";
import Social from "../../components/social/social";

export default function Contact() {
  const [userEmail, setEmail] = useState("");
  const [userFirstName, setFirstName] = useState("");
  const [userLastName, setLastName] = useState("");
  const [userMessage, setMessage] = useState("");
  const [userPhone, setPhone] = useState("");

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const validateForm = () => {
    if (!userEmail || !userFirstName || !userLastName || !userMessage) {
      setSnackbarMessage("Veuillez remplir tous les champs obligatoires.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return false;
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(userEmail)) {
      setSnackbarMessage("Veuillez entrer un email valide.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      return false;
    }
    return true;
  };

  // Fonction pour envoyer l'email de confirmation
  const sendConfirmationEmail = (userFirstName: string, userEmail: string) => {
    const confirmationTemplateParams = {
      from_userFirstName: userFirstName,
      from_userEmail: userEmail,
    };

    // Envoi de l'email de confirmation à l'utilisateur
    emailjs
      .send(
        "service_vz72zyt", // Service ID EmailJS
        "template_av6thyg", // ID du modèle d'e-mail de confirmation
        confirmationTemplateParams, // Paramètres dynamiques (nom, email)
        "_nibA5A1dNcgUaToq" // Votre User ID EmailJS
      )
      .then((result) => {
        console.log("Email de confirmation envoyé : ", result.text);
      })
      .catch((error) => {
        console.log(
          "Erreur dans l'envoi de l'email de confirmation : ",
          error.text
        );
      });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const templateId = "template_oltfym4";
    const serviceId = "service_vz72zyt";
    const publicKey = "_nibA5A1dNcgUaToq";

    const templateParams = {
      from_userFirstName: userFirstName,
      from_userLastName: userLastName,
      from_userPhone: userPhone,
      from_userEmail: userEmail,
      to_name: "L'Atelier d'Onirium",
      message: userMessage,
    };

    // Envoi du message
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setSnackbarMessage("Votre message a été envoyé avec succès!");
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
        setFirstName("");
        setEmail("");
        setPhone("");
        setMessage("");

        // Envoi de l'email de confirmation à l'utilisateur
        sendConfirmationEmail(`${userFirstName} ${userLastName}`, userEmail);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setSnackbarMessage("Une erreur est survenue. Veuillez réessayer.");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      });
  };

  return (
    <>
      <Container>
        <Typography variant="h2" align="center" padding="30px" sx={{ textShadow: "1px 1px 5px rgba(255, 255, 255, 0.6)" }}
        >
          Contactez-moi
        </Typography>
        {/* Snackbar positionnée en haut de la page */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }} // Position de la snackbar en haut
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity={snackbarSeverity}
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
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
                alignSelf: "center",
                marginBottom: 5, // Espace entre les paragraphes
                paddingBottom: "20px",
              }}
            >
              Si vous avez un projet sur mesure à soumettre ou des questions
              concernant mes services, n'hésitez pas à remplir ce formulaire
              pour me contacter. <br />
            </Typography>
            <Social />
          </Box>

          {/* Formulaire à droite */}
          <Box flex={1}>
            <Box
              display="flex"
              flexDirection="column"
              gap={2}
              component="form"
              onSubmit={handleSubmit}
              noValidate
            >
              <TextField
                variant="standard"
                label="Prénom"
                value={userFirstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                required
                sx={{
                  "& .MuiInputBase-root": {
                    color: "#E7E2E1", // Texte blanc

                    borderBottom: "1px solid #E7E2E1", // Bordure blanche en bas
                  },
                  "& .MuiInputBase-root:before": {
                    borderBottom: "1px solid #E7E2E1", // Bordure blanche avant focus
                  },
                  "& .MuiInputBase-root:after": {
                    borderBottom: "1px solid #E7E2E1", // Bordure blanche après focus
                  },
                  "& .MuiFormLabel-root": {
                    color: "#E7E2E1", // Label blanc avant focus
                  },
                  "& .MuiInputBase-root.Mui-focused:before": {
                    borderBottom: "1px solid #E7E2E1", // Bordure blanche quand le champ est en focus
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "#E7E2E1", // Label blanc lorsqu'il est en focus
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#E7E2E1 !important", // Désactive la couleur bleue du focus
                    },
                  "& .MuiInputBase-root:focus": {
                    borderBottom: "2px solid #E7E2E1 !important", // Assurer que la bordure reste blanche même au focus
                  },
                  "& .MuiInputBase-root:focus .MuiFormLabel-root": {
                    color: "#E7E2E1 !important", // Assurer que le label reste blanc même au focus
                  },
                }}
              />

              <TextField
                variant="standard"
                label="Nom"
                value={userLastName}
                onChange={(e) => setLastName(e.target.value)}
                fullWidth
                required
                sx={{
                  "& .MuiInputBase-root": {
                    color: "#E7E2E1", // Texte blanc
                    borderBottom: "1px solid #E7E2E1", // Bordure blanche en bas
                  },
                  "& .MuiInputBase-root:before": {
                    borderBottom: "1px solid #E7E2E1", // Bordure blanche avant focus
                  },
                  "& .MuiInputBase-root:after": {
                    borderBottom: "1px solid #E7E2E1", // Bordure blanche après focus
                  },
                  "& .MuiFormLabel-root": {
                    color: "#E7E2E1", // Label blanc avant focus
                  },
                  "& .MuiInputBase-root.Mui-focused:before": {
                    borderBottom: "1px solid #E7E2E1", // Bordure blanche quand le champ est en focus
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "#E7E2E1", // Label blanc lorsqu'il est en focus
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#E7E2E1 !important", // Désactive la couleur bleue du focus
                    },
                  "& .MuiInputBase-root:focus": {
                    borderBottom: "2px solid #E7E2E1 !important", // Assurer que la bordure reste blanche même au focus
                  },
                  "& .MuiInputBase-root:focus .MuiFormLabel-root": {
                    color: "#E7E2E1 !important", // Assurer que le label reste blanc même au focus
                  },
                }}
              />
              <TextField
                variant="standard"
                label="Téléphone"
                value={userPhone}
                onChange={(e) => setPhone(e.target.value)}
                fullWidth
                sx={{
                  "& .MuiInputBase-root": {
                    color: "#E7E2E1", // Texte blanc

                    borderBottom: "1px solid #E7E2E1", // Bordure blanche en bas
                  },
                  "& .MuiInputBase-root:before": {
                    borderBottom: "1px solid #E7E2E1", // Bordure blanche avant focus
                  },
                  "& .MuiInputBase-root:after": {
                    borderBottom: "1px solid #E7E2E1", // Bordure blanche après focus
                  },
                  "& .MuiFormLabel-root": {
                    color: "#E7E2E1", // Label blanc avant focus
                  },
                  "& .MuiInputBase-root.Mui-focused:before": {
                    borderBottom: "1px solid #E7E2E1", // Bordure blanche quand le champ est en focus
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "#E7E2E1", // Label blanc lorsqu'il est en focus
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#E7E2E1 !important", // Désactive la couleur bleue du focus
                    },
                  "& .MuiInputBase-root:focus": {
                    borderBottom: "2px solid #E7E2E1 !important", // Assurer que la bordure reste blanche même au focus
                  },
                  "& .MuiInputBase-root:focus .MuiFormLabel-root": {
                    color: "#E7E2E1 !important", // Assurer que le label reste blanc même au focus
                  },
                }}
              />
              <TextField
                variant="standard"
                label="E-mail"
                type="email"
                value={userEmail}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
                sx={{
                  "& .MuiInputBase-root": {
                    color: "#E7E2E1", // Texte blanc

                    borderBottom: "1px solid #E7E2E1", // Bordure blanche en bas
                  },
                  "& .MuiInputBase-root:before": {
                    borderBottom: "1px solid #E7E2E1", // Bordure blanche avant focus
                  },
                  "& .MuiInputBase-root:after": {
                    borderBottom: "1px solid #E7E2E1", // Bordure blanche après focus
                  },
                  "& .MuiFormLabel-root": {
                    color: "#E7E2E1", // Label blanc avant focus
                  },
                  "& .MuiInputBase-root.Mui-focused:before": {
                    borderBottom: "1px solid #E7E2E1", // Bordure blanche quand le champ est en focus
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "#E7E2E1", // Label blanc lorsqu'il est en focus
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#E7E2E1 !important", // Désactive la couleur bleue du focus
                    },
                  "& .MuiInputBase-root:focus": {
                    borderBottom: "2px solid #E7E2E1 !important", // Assurer que la bordure reste blanche même au focus
                  },
                  "& .MuiInputBase-root:focus .MuiFormLabel-root": {
                    color: "#E7E2E1 !important", // Assurer que le label reste blanc même au focus
                  },
                }}
              />
              <TextField
                variant="standard"
                label="Message"
                value={userMessage}
                onChange={(e) => setMessage(e.target.value)}
                multiline
                rows={10}
                fullWidth
                required
                sx={{
                  "& .MuiInputBase-root": {
                    color: "#E7E2E1", // Texte blanc

                    borderBottom: "1px solid #E7E2E1", // Bordure blanche en bas
                  },
                  "& .MuiInputBase-root:before": {
                    borderBottom: "1px solid #E7E2E1", // Bordure blanche avant focus
                  },
                  "& .MuiInputBase-root:after": {
                    borderBottom: "1px solid #E7E2E1", // Bordure blanche après focus
                  },
                  "& .MuiFormLabel-root": {
                    color: "#E7E2E1", // Label blanc avant focus
                  },
                  "& .MuiInputBase-root.Mui-focused:before": {
                    borderBottom: "1px solid #E7E2E1", // Bordure blanche quand le champ est en focus
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "#E7E2E1", // Label blanc lorsqu'il est en focus
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#E7E2E1 !important", // Désactive la couleur bleue du focus
                    },
                  "& .MuiInputBase-root:focus": {
                    borderBottom: "2px solid #E7E2E1 !important", // Assurer que la bordure reste blanche même au focus
                  },
                  "& .MuiInputBase-root:focus .MuiFormLabel-root": {
                    color: "#E7E2E1 !important", // Assurer que le label reste blanc même au focus
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
                  backgroundColor: "#E7E2E1", // Fond clair
                  borderColor: "#640a02", // Bordure bordeaux
                  color: "#640a02", // Texte bordeaux
                  fontFamily: "Alice", // Police "Alice"
                  border: "1px solid", // Bordure
                }}
              >
                Envoyer le message
              </LoadingButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
