import React from 'react';
import { Box, Typography } from '@mui/material';

const Blog = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Blog</Typography>
      <Typography variant="body1">
        Welcome to my blog! Here, I share my thoughts on software development...
      </Typography>
    </Box>
  );
};

export default Blog;
