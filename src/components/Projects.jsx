

import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const Projects = () => {
  return (
    <Container sx={{ paddingY: 8 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: 5,
          fontWeight: "bold",
        }}
      >
        Projects
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Student Management System
              </Typography>

              <Typography sx={{ marginTop: 2 }}>
                Built using Spring Boot, Hibernate, JSP, and MySQL.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Lung Disease Detection
              </Typography>

              <Typography sx={{ marginTop: 2 }}>
                CNN-based deep learning model with 91% accuracy.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                BiteBee Food App
              </Typography>

              <Typography sx={{ marginTop: 2 }}>
                Food ordering application developed using Spring MVC.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
