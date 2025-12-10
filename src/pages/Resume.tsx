import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "50px",
  },
  pdfContainer: {
    width: "100%",
    height: "80vh",
    marginTop: "20px",
  },
});

const Resume: React.FC = () => {
  const classes = useStyles();

  return (
    <Container sx={{ p: 3 }} maxWidth="md" className={classes.root}>
      <Typography variant="h4" gutterBottom>
        My Resume
      </Typography>
      <Box>
        <Typography variant="body1" align="center" gutterBottom>
          Feel free to check out my resume to learn more about my experience,
          skills, and education.
        </Typography>
      </Box>
      <Box>
        <Typography variant="body1" align="center" gutterBottom>
          <Link href="/Resume.pdf" download>
            Download Resume
          </Link>
        </Typography>
      </Box>
      <Box className={classes.pdfContainer}>
        <img
          src="/Resume.png"
          alt="Resume"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>
    </Container>
  );
};
export default Resume;
