import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '50px',
  },
  pdfContainer: {
    width: '100%',
    height: '80vh',
    marginTop: '20px',
  },
});

const Resume: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h4" gutterBottom>
        My Resume
      </Typography>
      <Box>
        <Typography variant="body1" align="center" gutterBottom>
         Feel free to check out my resume to learn more about my experience, skills, and education.
        </Typography>
      </Box>
      <Box className={classes.pdfContainer}>
        <iframe
          src="/Resume.pdf"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="Resume"
        />
      </Box>
    </Container>
  );
};

export default Resume;
