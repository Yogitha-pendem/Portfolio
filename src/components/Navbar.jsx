// src/components/Navbar.jsx

import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#0f172a" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Yogitha Portfolio
        </Typography>

        <Box>
          <Button sx={{ color: "white" }}>Home</Button>
          <Button sx={{ color: "white" }}>Projects</Button>
          <Button sx={{ color: "white" }}>Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;