import { Box, Card, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Feature {
  icon?: ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
  flex?: string;
  maxWidth?: string;
}

export default function Features({ features, flex="1 1 250px", maxWidth="250px" }: FeaturesProps) {
  return (
    <Box
      sx={{
        margin: "60px auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
      }}
    >
      {features.map((feature, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            flex: flex,
            maxWidth: maxWidth,
            minWidth: "240px",
          }}
        >
          <Card
            sx={{
              boxSizing: "border-box",
              textAlign: "center",
              width: "100%",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "#E7E2E1",
              paddingY: 1,
              transition: "transform 0.3s ease-in-out",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 1.25,
                height: "auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {feature.icon}
                <Typography variant="h4" sx={{ marginY: 1, color: "black" }}>
                  {feature.title}
                </Typography>
              </Box>

        <div
          style={{ textAlign: "center", color: "black", marginTop: "10px" }}
          dangerouslySetInnerHTML={{ __html: feature.description }}
        />
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
}
