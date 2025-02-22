
import { useEffect, useState } from "react";

import NavBar from "../components/navBar/navBar";
import Footer from "../components/footer/footer";
import { Creation } from "../models/creation";
import CreationList from "../creations/creationList";
import { Box } from "@mui/material";

export default function EscapeGames() {
  const [creations, setCreations] = useState<Creation[]>([]);

  useEffect(() => {
    const categoryId = 2;   
    fetch(`http://preprodback.karim-portfolio.xyz/api/Creation/GetCreationsByCategoryId/${categoryId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur dans la réponse de l'API");
        }
        return response.json();
      })
      .then((data) => setCreations(data))
      .catch((error) => console.error("Erreur lors de la requête : ", error));
  }, []);

  return (
    <div>
      <NavBar />

      <Box>
        <CreationList creations={creations} basePath="escapes-gamer"/>
      </Box>

      <Footer />
    </div>
  );
}
