import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Creation } from "../models/Creations";

interface CreationForm {
  name: string;
  description: string;
  Images?: File[];
  Videos?: File[];
  categoryId: number | string;
}

interface Props {
  creation?: Creation;

  cancelEdit: () => void;
  isSubmitting: boolean;
}

const CreationForm = ({ creation, cancelEdit, isSubmitting }: Props) => {
  const [formData, setFormData] = useState<CreationForm>({
    name: "",
    description: "",
    Images: [],
    Videos: [],
    categoryId: "",
  });
  const navigate = useNavigate(); // Initialiser la navigation
  const [categories, setCategories] = useState<{ id: number; name: string }[]>(
    []
  ); // État pour les catégories
  const [editMode, setEditMode] = useState<boolean>(false);

  // Récupérer les catégories depuis l'API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `http://preprodback.karim-portfolio.xyz/api/Category/GetCategories`
        );
        const fetchedCategories = response.data;

        setCategories(fetchedCategories); // Stocke les catégories dans l'état

        // Définit la première catégorie comme valeur par défaut
        if (fetchedCategories.length > 0) {
          setFormData((prev) => ({
            ...prev,
            categoryId: fetchedCategories[0].id, // ID de la première catégorie
          }));
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories :", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (creation) {
      setFormData({
        name: creation.name,
        description: creation.description,
        Images: creation.Images || [],
        Videos: creation.Videos || [],
        categoryId: creation.categoryId || "",
      });
      setEditMode(true);
    } else {
      setEditMode(false);
    }
  }, [creation]);

  const {
    getRootProps: getImagesRootProps,
    getInputProps: getImagesInputProps,
  } = useDropzone({
    onDrop: (acceptedFiles) => handleImagesUpload(acceptedFiles),
  });

  const {
    getRootProps: getVideosRootProps,
    getInputProps: getVideosInputProps,
  } = useDropzone({
    onDrop: (acceptedFiles) => handleVideosUpload(acceptedFiles),
  });

  const handleImagesUpload = (files: File[]) => {
    setFormData((prev) => ({
      ...prev,
      Images: [...prev.Images!, ...files],
    }));
  };

  const handleVideosUpload = (files: File[]) => {
    setFormData((prev) => ({
      ...prev,
      Videos: [...prev.Videos!, ...files],
    }));
  };

  const handleImageDelete = (index: number) => {
    setFormData((prev) => {
      const updatedImages = prev.Images?.filter((_, i) => i !== index) || [];
      return { ...prev, Images: updatedImages };
    });
  };

  const handleVideoDelete = (index: number) => {
    setFormData((prev) => {
      const updatedVideos = prev.Videos?.filter((_, i) => i !== index) || [];
      return { ...prev, Videos: updatedVideos };
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("categoryId", formData.categoryId.toString());

    if (creation && creation.Videos) {
      creation.Videos.forEach((video) => {
        formDataToSend.append("existingVideos", video);
      });
    }

    formData.Videos!.forEach((file) => {
      formDataToSend.append("Videos", file);
    });

    if (creation && creation.Images) {
      creation.Images.forEach((image) => {
        formDataToSend.append("existingImages", image);
      });
    }

    formData.Images!.forEach((file) => {
      formDataToSend.append("Images", file);
    });

    if (editMode && creation) {
      formDataToSend.append("id", String(creation.id));
    }

    try {
      let response;
      if (editMode && creation) {
        response = await axios.put(
          `http://preprodback.karim-portfolio.xyz/api/Creation/UpdateCreation/${creation.id}`,
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Mise à jour réussie", response.data);
      } else {
        response = await axios.post(
          "http://preprodback.karim-portfolio.xyz/api/Creation/CreateCreation",
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Création réussie", response.data);
      }
      navigate("/");
    } catch (error) {
      console.error("Erreur lors de la création ou mise à jour", error);
    }
  };

  return (
    <Box
      component="section"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        marginTop: "30px",
        marginBottom: "30px",
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "60%", md: "50%" },
          padding: 4,
          backgroundColor: "#e7e2e1",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          mb={4}
          sx={{
            fontFamily: "Lovers",
            color: "black",
            fontSize: { xs: "3rem", md: "5rem" },
          }}
        >
          {editMode ? "Modifier la création" : "Ajouter une création"}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Champ pour le nom de la création */}
            <Grid item xs={12}>
              <TextField
                label="Nom de la création"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>

            {/* Champ pour la description */}
            <Grid item xs={12}>
              <TextField
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                fullWidth
                multiline
                rows={4}
                required
              />
            </Grid>
            {/* Menu déroulant pour la sélection des catégories */}
            <Grid item xs={12}>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Typography sx={{ color: "#640a02" }}>Catégorie :</Typography>
                <Select
                  value={formData.categoryId}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      categoryId: e.target.value as number,
                    }))
                  }
                >
                  {categories.map((category) => (
                    <MenuItem
                      key={category.id}
                      value={category.id}
                      sx={{ color: "black" }}
                    >
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </Grid>
            {/* Zone de dépôt pour les images  */}
            <Grid item xs={12}>
              <Box
                {...getImagesRootProps()}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                  gap: 2,
                  border: "2px dashed #640a02",
                  padding: 2,
                  cursor: "pointer",
                }}
              >
                <input {...getImagesInputProps()} />
                <CloudUploadIcon fontSize="large" sx={{ color: "black" }} />
                <Typography variant="body2" sx={{ color: "black" }}>
                  Ajoute tes images ici !
                </Typography>
              </Box>
            </Grid>

            {/* Prévisualisation des images  */}
            {formData.Images!.length > 0 && (
              <Grid item xs={12}>
                <Box display="flex" gap={2}>
                  {formData.Images!.map((file, index) => (
                    <Box key={index} sx={{ position: "relative" }}>
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Additional ${index}`}
                        style={{ maxWidth: 200, marginTop: "10px" }}
                      />
                      <Button
                        sx={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          backgroundColor: "rgba(255, 0, 0, 0.6)",
                          color: "white",
                        }}
                        onClick={() => handleImageDelete(index)}
                      >
                        Supprimer
                      </Button>
                    </Box>
                  ))}
                </Box>
              </Grid>
            )}

            {/* Zone de dépôt pour les vidéos  */}
            <Grid item xs={12}>
              <Box
                {...getVideosRootProps()}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                  gap: 2,
                  border: "2px dashed #640a02",
                  padding: 2,
                  cursor: "pointer",
                }}
              >
                <input {...getVideosInputProps()} />
                <CloudUploadIcon fontSize="large" sx={{ color: "black" }} />
                <Typography variant="body2" sx={{ color: "black" }}>
                  Ajoute tes vidéos ici !
                </Typography>
              </Box>
            </Grid>

            {/* Prévisualisation des vidéos  */}
            {formData.Videos!.length > 0 && (
              <Grid item xs={12}>
                <Box display="flex" gap={2} flexWrap="wrap">
                  {formData.Videos!.map((file, index) => (
                    <Box
                      key={index}
                      sx={{ position: "relative", maxWidth: 200 }}
                    >
                      <video
                        src={URL.createObjectURL(file)}
                        controls
                        style={{
                          maxWidth: "100%",
                          maxHeight: "150px",
                          marginTop: "10px",
                        }}
                      />
                      <Button
                        sx={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          backgroundColor: "rgba(255, 0, 0, 0.6)",
                          color: "white",
                        }}
                        onClick={() => handleVideoDelete(index)}
                      >
                        Supprimer
                      </Button>
                    </Box>
                  ))}
                </Box>
              </Grid>
            )}

            {/* Boutons pour soumettre ou annuler */}
            <Grid item xs={12} textAlign="center">
              <LoadingButton
                type="submit"
                loading={isSubmitting}
                variant="contained"
                color="primary"
                sx={{ marginRight: 2 }}
              >
                {editMode ? "Mettre à jour" : "Ajouter"}
              </LoadingButton>
              <Button variant="outlined" onClick={cancelEdit}>
                Annuler
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default CreationForm;
