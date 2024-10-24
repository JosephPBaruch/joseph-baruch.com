import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '30px',
  },
  projectsContainer: {
    maxHeight: '80vh',
    overflowY: 'auto',
    padding: '20px',
  },
  projectCard: {
    marginBottom: '20px',
  },
  title: {
    fontWeight: 'bold',
  },
});

const Projects: React.FC = () => {
  const classes = useStyles();

  const projects = [
    {
      title: 'Project One',
      description: 'A full-stack web application built with React, Node.js, and MongoDB.',
      link: 'https://github.com/yourusername/project-one',
    },
    {
      title: 'Project Two',
      description: 'A Kubernetes-based microservice project with Go and Docker.',
      link: 'https://github.com/yourusername/project-two',
    },
    {
      title: 'Project Three',
      description: 'A CI/CD pipeline setup using Jenkins and Docker for automated deployments.',
      link: 'https://github.com/yourusername/project-three',
    },
    // Add more projects as needed
  ];

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h4" className={classes.title} gutterBottom>
        My Projects
      </Typography>
      <Box className={classes.projectsContainer}>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <Card className={classes.projectCard} variant="outlined">
                <CardContent>
                  <Typography variant="h6" className={classes.title} gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href={project.link} target="_blank">
                    View on GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
