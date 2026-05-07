// src/components/Footer.jsx

import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0f172a",
        color: "white",
        textAlign: "center",
        padding: 3,
      }}
    >
      <Typography variant="h6">Yogitha Pendem</Typography>

      <Typography variant="body2">
        © 2026 All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;