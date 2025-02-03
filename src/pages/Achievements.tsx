import { Box, Typography } from '@mui/material';

const Achievements = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Achievements</Typography>
      <Typography variant="h6" gutterBottom>Bachelor's Degree</Typography>
      <Typography variant="body1">
        I will be graduating with a BS in Computer Science and a minor in mathematics in May 2026.
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Undergraduate Certificate in AI/ML</Typography>
      <Typography variant="body1">
        I am currently pursuing a certificate in Artificial Intelligence and Machine Learning with the expected completion date of May 2026.
      </Typography>
    </Box>
  );
};

export default Achievements;
