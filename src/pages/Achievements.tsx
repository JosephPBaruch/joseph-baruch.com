import { Box, Typography } from '@mui/material';

const Achievements = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Achievements</Typography>
      <Typography variant="h6" gutterBottom>Bachelor's Degree</Typography>
      <Typography variant="body1">
        I have completed my Bachelor's degree with a minor in Mathematics.
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Pursuing Certificate in AI/ML</Typography>
      <Typography variant="body1">
        I am currently pursuing a certificate in Artificial Intelligence and Machine Learning.
      </Typography>
    </Box>
  );
};

export default Achievements;
