import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>About Me</Typography>
      <Typography variant="body1">
        Hello! I'm Joseph Baruch, a passionate software developer...
      </Typography>
    </Box>
  );
};

export default About;
