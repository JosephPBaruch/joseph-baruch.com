import React from 'react';
import { Container, Typography, Box, Avatar, Grid, Paper } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" alignItems="center" py={5}>
        <Avatar
          alt="Joseph Baruch"
          src="./Assets/me.jpeg" // Replace with your image path
          sx={{ width: 150, height: 150, mb: 3 }}
        />
        <Typography variant="h4" gutterBottom>
          Hello, I'm Joseph Baruch!
        </Typography>
        <Typography variant="h6" color="textSecondary" align="center">
          Aspiring Software Engineer with a passion for building full-stack applications, cloud services, and exploring cutting-edge technologies. I enjoy solving complex problems and am always looking to learn and grow in the software development industry.
        </Typography>
        <Grid container spacing={3} mt={5}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Skills & Technologies
              </Typography>
              <Typography variant="body1">
                - Full-stack Development (Go, React, MUI)
                <br />
                - CI/CD Pipelines, Docker, Kubernetes
                <br />
                - Testing (Jest, Cypress, Go Test)
                <br />
                - Version Control, Agile Methodologies
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Recent Experience
              </Typography>
              <Typography variant="body1">
                - Software Engineer Intern at Schweitzer Engineering Laboratories
                <br />
                - SI-PASS Leader for Computer Science at University of Idaho
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
