import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import CoverLetter from "./pages/CoverLetter";
// import About from './pages/About';
import Achievements from "./pages/Achievements";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Switch from '@mui/material/Switch';
import { Link } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function App() {
  const pages = ["Home", "Projects", "Resume", "Cover Letter", "Achievements"]; // "About",
  const [page, setPage] = useState("Home");
  const [darkMode, setDarkMode] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#303030" : "#f5f5f5",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "background.default",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page}
                      onClick={() => {
                        setPage(page);
                        handleCloseNavMenu();
                      }}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    padding: "9px 0px 0px 10px",
                  }}
                >
                  Joseph Baruch
                </Typography>
              </Box>

              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Joseph Baruch
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => setPage(page)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <IconButton onClick={() => setDarkMode(!darkMode)}>
                <DarkModeIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
        <Box sx={{ flex: 1, pb: 3 }}>
          {page !== "Home" || <Home />}
          {page !== "Projects" || <Projects />}
          {page !== "Resume" || <Resume />}
          {page !== "Cover Letter" || <CoverLetter />}
          {page !== "Achievements" || <Achievements />}
        </Box>
        <AppBar
          position="static"
          component="footer"
          sx={{ top: "auto", bottom: 0, display: "flex" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="body1"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Joseph Baruch
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "flex" },
                  justifyContent: "flex-end",
                }}
              >
                <Link
                  color="inherit"
                  href="https://github.com/JosephPBaruch"
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    mx: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                  }}
                >
                  GitHub
                </Link>
                <Link
                  color="inherit"
                  href="https://www.linkedin.com/in/joseph-peter-baruch/"
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    mx: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                  }}
                >
                  LinkedIn
                </Link>
                <Link
                  color="inherit"
                  href="mailto:josephbaruch48@gmail.com"
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    mx: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                  }}
                >
                  Contact
                </Link>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
export default App;
