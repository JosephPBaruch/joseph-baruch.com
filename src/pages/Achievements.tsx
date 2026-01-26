import { Typography, Container, Paper, Divider } from '@mui/material';

const Achievements = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom fontWeight={600} sx={{ mb: 3 }}>
        Education & Achievements
      </Typography>
      
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h5" gutterBottom fontWeight={600}>
          Bachelor of Science in Computer Science
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          University of Idaho, Moscow
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Expected Graduation:</strong> May 2026
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>GPA:</strong> 3.8
        </Typography>
        <Typography variant="body1">
          <strong>Minor:</strong> Mathematics
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Undergraduate Certificate in AI/ML
        </Typography>
        <Typography variant="body1">
          Currently pursuing a certificate in Artificial Intelligence and Machine Learning with an expected completion date of May 2026. Gaining expertise in machine learning algorithms, data science, and AI applications.
        </Typography>
      </Paper>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" gutterBottom fontWeight={600} sx={{ mb: 2 }}>
        Leadership & Involvement
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          SI-PASS Leader - Computer Science
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          University of Idaho | September 2023 - December 2023
        </Typography>
        <Typography variant="body1">
          Led supplemental instruction sessions to support student success in computer science courses. Designed engaging session plans incorporating effective study techniques, mentored students, and demonstrated advanced knowledge of programming concepts.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom fontWeight={600}>
          Leadership Member - Association for Computing Machinery
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          University of Idaho | August 2022 - August 2023
        </Typography>
        <Typography variant="body1">
          Organized and led meetings to foster the development of computer science students and promote professional growth. Collaborated with faculty to align organizational initiatives with university objectives for computer science programs.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Achievements;
