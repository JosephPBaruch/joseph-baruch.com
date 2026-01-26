import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface Project {
  title: string;
  description: string;
  technologies: string;
  link?: string;
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // paddingTop: '30px',
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

  const projects: Project[] = [
    {
      title: 'Kvis - Kubernetes Visualization Tool',
      description: 'A comprehensive Kubernetes visualization tool built with React, Go, Docker and Kubernetes (k3d). Provides real-time cluster monitoring and resource management capabilities.',
      technologies: 'React, Go, Docker, Kubernetes',
      link: 'https://github.com/JosephPBaruch/kvis',
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing my projects and experience. Built with React, TypeScript, and Material-UI, deployed on AWS with Docker containerization.',
      technologies: 'React, TypeScript, MUI, Docker, AWS',
      link: 'https://github.com/JosephPBaruch/josephbaruch.com',
    },
    {
      title: 'Weather Data Web Application',
      description: 'Full-stack weather application using Express.js with authenticated API calls to Meteomatics and Google API for real-time data retrieval. Features responsive frontend and containerized deployment.',
      technologies: 'JavaScript, Node.js, Express.js, Docker',
      link: 'https://github.com/JosephPBaruch/data_web_app',
    },
    {
      title: 'Climate Image Classification Model',
      description: 'Machine learning project using YOLOv8 for climate image classification. Trained models with optimized hyperparameters to achieve high accuracy in climate pattern recognition.',
      technologies: 'Python, YOLOv8, Machine Learning',
    }
    // Add more projects as needed
  ];

  return (
    <Container sx={{ p: 3 }} maxWidth="md" className={classes.root}>
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
                  <Typography variant="body2" gutterBottom sx={{ mb: 1.5 }}>
                    {project.description}
                  </Typography>
                  <Typography variant="caption" color="textSecondary" sx={{ fontStyle: 'italic' }}>
                    Technologies: {project.technologies}
                  </Typography>
                </CardContent>
                {project.link && (
                  <CardActions>
                    <Button size="small" color="primary" href={project.link} target="_blank">
                      View on GitHub
                    </Button>
                  </CardActions>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
