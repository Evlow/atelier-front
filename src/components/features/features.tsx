import { Box, Card, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}

export default function Features({ features }: FeaturesProps) {
  return (
    <Box sx={{ margin: "60px auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3 }}>
      {features.map((feature, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            flex: "1 1 250px",
            maxWidth: "250px",
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
              justifyContent: "flex-start",
              alignItems: "center",
              background: "#E7E2E1",
              paddingY: 2,
              transition: "transform 0.3s ease-in-out",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                p: 1.25,
                height: "auto",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
                {feature.icon}
                <Typography variant="h4" sx={{ marginTop: 1, color: "black" }}>
                  {feature.title}
                </Typography>
              </Box>

              <Typography variant="body1" sx={{ textAlign: "center", color: "black" }}>
                {feature.description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
}
