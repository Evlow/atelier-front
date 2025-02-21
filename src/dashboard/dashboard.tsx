import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  CircularProgress,
  Card,
  Button,
  CardActionArea,
  CardMedia,
  Box,
  Grid,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CreationForm from "../creations/creationForm";
import AddIcon from "@mui/icons-material/Add";
import { Link as RouterLink } from "react-router-dom";
import { User } from "../models/user";
import { Creation } from "../models/creation";
import NavBarAdmin from "../admin/navBarAdmin/navBarAdmin";

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [selectedCreation, setSelectedCreation] = useState<
    Creation | undefined
  >(undefined);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [creationToDelete, setCreationToDelete] = useState<number | null>(null);
  const [creations, setCreations] = useState<Creation[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setError("Utilisateur non authentifié. Redirection...");
        setTimeout(() => navigate("/connexion"), 2000);
        return;
      }

      try {
        const response = await fetch(
          "http://preprodback.karim-portfolio.xyz/api/Account/GetCurrentUser/currentUser",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }

        const data: User = await response.json();
        setUser(data);
      } catch {
        setError("Impossible de récupérer les informations utilisateur");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  // Fonction pour charger les créations
  useEffect(() => {
    const fetchCreations = async () => {
      const token = localStorage.getItem("authToken");
      try {
        const response = await fetch(
          "http://preprodback.karim-portfolio.xyz/api/Creation/GetCreations",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des créations");
        }

        const data: Creation[] = await response.json();
        setCreations(data);
      } catch {
        setError("Impossible de récupérer les créations");
      }
    };

    fetchCreations();
  }, []);

  const handleSelectCreation = (creation: Creation) => {
    setSelectedCreation(creation);
    setEditMode(true);
  };

  const cancelEdit = () => {
    setEditMode(false);
    setSelectedCreation(undefined);
  };

  const openDeleteDialog = (id: number) => {
    setDialogOpen(true);
    setCreationToDelete(id);
  };

  const confirmDeleteCreation = async () => {
    if (creationToDelete === null) return;

    const token = localStorage.getItem("authToken");
    try {
      const response = await fetch(
        `http://preprodback.karim-portfolio.xyz/api/Creation/DeleteCreation/${creationToDelete}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression de la création");
      }

      setCreations(
        creations.filter((creation) => creation.id !== creationToDelete)
      );
      setDialogOpen(false);
    } catch {
      setError("Impossible de supprimer la création");
    }
  };

  if (editMode) {
    return (
      <CreationForm
        creation={selectedCreation}
        cancelEdit={cancelEdit}
        isSubmitting={loading}
      />
    );
  }

  return (
    <>
      <NavBarAdmin />
      <Box>
        <Typography
          variant="h3"
          color="white"
          textAlign="center"
          fontSize="1.8rem"
          padding="30px"
          fontFamily="Alice"
        >
          {error ? (
            <Typography color="error" textAlign="center">
              {error}
            </Typography>
          ) : user ? (
            `✨Wesh ${user.userName}, maintenant c'est à toi de te débrouiller pour gérer ton site !✨`
          ) : (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <CircularProgress color="inherit" />
            </Box>
          )}
        </Typography>
      </Box>
      <Container sx={{ paddingTop: 2, paddingBottom: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                maxWidth: "250px",
                margin: "auto",
                backgroundColor: "#e7e2e1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "250px",
                alignContent: "center",
              }}
            >
              <Button
                onClick={() => setEditMode(true)}
                variant="outlined"
                sx={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textTransform: "none",
                  flexDirection: "column",
                }}
              >
                <Typography color="black" marginBottom="8px" fontSize="1.2rem">
                  Ajouter une création
                </Typography>
                <AddIcon sx={{ fontSize: "3rem", color: "#640a02" }} />
              </Button>
            </Card>
          </Grid>
          {creations.map((creation) => (
            <Grid item xs={12} sm={6} md={3} key={creation.id}>
              <Card
                sx={{
                  maxWidth: "250px",
                  margin: "auto",
                  backgroundColor: "#e7e2e1",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Typography
                  gutterBottom
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "black",
                    textAlign: "center",
                    padding: "10px",
                  }}
                >
                  {creation.name}
                </Typography>
                <RouterLink
                  to={`/creations/${creation.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={
                        Array.isArray(creation.pictureUrls)
                          ? creation.pictureUrls[0]
                          : creation.pictureUrls
                      }
                      alt={creation.name}
                      sx={{ objectFit: "cover" }}
                    />
                  </CardActionArea>
                </RouterLink>
                <Box
                  sx={{
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    onClick={() => handleSelectCreation(creation)}
                    variant="outlined"
                    sx={{
                      width: "45%",
                      backgroundColor: "transparent",
                      border: "1px solid #640a02",
                      color: "black",
                      margin: "5px",
                      fontFamily: "Alice",
                      textTransform: "none",
                    }}
                  >
                    Modifier
                  </Button>
                  <Button
                    onClick={() => openDeleteDialog(creation.id)}
                    variant="outlined"
                    sx={{
                      width: "45%",
                      backgroundColor: "transparent",
                      border: "1px solid #640a02",
                      color: "black",
                      margin: "5px",
                      fontFamily: "Alice",
                      textTransform: "none",
                    }}
                  >
                    Supprimer
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Dialog de confirmation pour suppression */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Confirmation de suppression</DialogTitle>
        <DialogContent>
          <Typography color="black">
            Es-tu sûr de vouloir supprimer cette création ?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="error">
            Annuler
          </Button>
          <Button onClick={confirmDeleteCreation} color="primary">
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
