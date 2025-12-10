import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
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

const CoverLetter: React.FC = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Container sx={{ p: 3 }} maxWidth="md" className={classes.root}>
      <Typography variant="h4" gutterBottom>
        My Cover Letter
      </Typography>
      <Box>
        <Typography variant="body1" align="center" gutterBottom>
          Feel free to check out my cover letter to learn more about my
          experience, skills, and education.
        </Typography>
      </Box>
      {isSmallScreen ? (
        <Box>
          <Typography variant="body1" align="center" gutterBottom>
            <Link href="/CoverLetter.pdf" download>
              Download Cover Letter
            </Link>
          </Typography>
        </Box>
      ) : (
        <Box className={classes.pdfContainer}>
          <iframe
            src="https://josephbaruch.com/CoverLetter.pdf"
            width="100%"
            height="800vh"
            style={{ border: "none" }}
            title="Cover Letter"
          />
        </Box>
      )}
    </Container>
  );
};
export default CoverLetter;
