import { useEffect, useState } from "react";
import { Creation } from "../models/creation";
import CreationList from "../creations/creationList";
import { Box } from "@mui/material";

export default function VariousCreations() {
    const [creations, setCreations] = useState<Creation[]>([]);
  
    useEffect(() => {
        const categoryId = 4;   
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
  
  
        <Box>
          <CreationList creations={creations} basePath="creations-diverses"/>
        </Box>
  
   
      </div>
    );
  }
  