import { Box, Link as MuiLink } from "@mui/material";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import tiktok from "../../assets/tiktok.svg";

const socialLinks = [
  {
    name: "facebook",
    url: "https://www.facebook.com/latelierdonirium",
    icon: facebook,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/latelierdonirium?igsh=MWF3Z2dyNzR5N2l0Yw==",
    icon: instagram,
  },
  {
    name: "tikTok",
    url: "https://www.tiktok.com/@latelierdonirium?_t=8pf3S8fZJab&_r=1",
    icon: tiktok,
  },
];

export default function Social() {
  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        padding: 0,
        listStyle: "none",
      }}
    >
      {socialLinks.map((link) => (
        <li key={link.name}>
          <MuiLink
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "inline-block",
              width: 40,
              height: 40,
            }}
          >
            <img
              src={link.icon}
              alt={link.name}
              style={{ width: "100%", height: "100%" }}
            />
          </MuiLink>
        </li>
      ))}
    </Box>
  );
}
