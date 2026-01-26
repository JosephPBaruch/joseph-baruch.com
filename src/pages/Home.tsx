import React from 'react';
import { Container, Typography, Box, Avatar, Paper, Stack } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container maxWidth="md" >
      <Box display="flex" flexDirection="column" alignItems="center" py={5}>
        <Avatar
          alt="Joseph Baruch"
          src="/me.jpeg" // Replace with your image path
          sx={{ width: 150, height: 150, mb: 3 }}
        />
        <Typography variant="h3" gutterBottom fontWeight={600}>
          Joseph Baruch
        </Typography>
        <Typography variant="h6" color="textSecondary" align="center" sx={{ maxWidth: '800px', mx: 'auto' }}>
          Software Engineer passionate about building scalable full-stack applications and cloud-native solutions. Currently pursuing a B.S. in Computer Science at the University of Idaho with a 3.8 GPA.
        </Typography>
        <Stack spacing={3} mt={5} direction={{ xs: 'column', sm: 'row' }} justifyContent="center">
          <Paper elevation={3} sx={{ p: 3, flex: 1 }}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Technical Expertise
            </Typography>
            <Typography variant="body1" component="div">
              <strong>Languages:</strong> JavaScript, TypeScript, Python, Go, C++, C
              <br />
              <strong>Frameworks:</strong> React, Node.js, Express.js, MUI
              <br />
              <strong>Tools:</strong> Docker, Kubernetes, Git, Unix
              <br />
              <strong>Testing:</strong> Jest, Cypress, Go Test
            </Typography>
          </Paper>
          <Paper elevation={3} sx={{ p: 3, flex: 1 }}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Current Experience
            </Typography>
            <Typography variant="body1" component="div">
              <strong>Software Engineer Intern</strong>
              <br />
              Schweitzer Engineering Laboratories
              <br />
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                Developing full-stack applications with Go and React, managing Kubernetes deployments, and maintaining CI/CD pipelines.
              </Typography>
            </Typography>
          </Paper>
        </Stack>
      </Box>
    </Container>
  );
};

export default Home;
