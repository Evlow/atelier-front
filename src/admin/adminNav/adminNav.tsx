import { Box, IconButton, Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";


export default function AdminNav() {
    const navigate = useNavigate();
  
    const handleLogout = () => {
      delete localStorage["accessToken"];
      localStorage.clear();
      navigate("/connexion");
    
  };
  
    const appBarItems = [
      { icon: VisibilityIcon, path: "/" },
      { icon: LogoutIcon, path: "/deconnexion", onClick: handleLogout },
    ];
  
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#e7e2e1",
          height: "100px",
          paddingX: 2,
        }}
      >
        <Typography
          variant="h1"
          fontSize="4rem"
          color="black"
          textAlign="center"
          sx={{ flexGrow: 1 }}
        >
          L'Atelier d'Onirium
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "10px",
          }}
        >
          {appBarItems.map((item, index) => (
            <Box key={index} marginLeft={4}>
              {item.onClick ? (
                <IconButton onClick={item.onClick}>
                  <item.icon />
                </IconButton>
              ) : (
                <a href={item.path}>
                  <IconButton>
                    <item.icon />
                  </IconButton>
                </a>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    );
  }