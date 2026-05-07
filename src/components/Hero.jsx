// src/components/Hero.jsx

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        backgroundColor: "#e2e8f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 4,
      }}
    >
      <Container>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "#0f172a",
            marginBottom: 3,
          }}
        >
          Hi, I'm Yogitha
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: "#334155",
            marginBottom: 4,
          }}
        >
          Java & React Developer
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0f172a",
            padding: "12px 30px",
          }}
        >
          View Projects
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;