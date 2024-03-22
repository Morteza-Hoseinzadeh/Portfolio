import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  useTheme,
  Container,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";

import { IconLanguage, IconMoon, IconSun } from "@tabler/icons-react";
import { Link } from "react-scroll";
import { updateTheme } from "../../constant/themePalette";

const pages = [
  {
    title: "About",
    to: "AboutMe",
  },
  {
    title: "Skills",
    to: "MySkills",
  },
  {
    title: "Experience",
    to: "MyExperience",
  },
  {
    title: "Social",
    to: "MySocialMedia",
  },
  {
    title: "Contact",
    to: "ContactMe",
  },
];

function Navbar() {
  const theme = useTheme();
  const [isDarkMode, setIsDarkMode] = React.useState(undefined);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(newDarkMode));
    window.location.reload();
  };

  React.useEffect(() => {
    const storedDarkMode = localStorage.getItem("isDarkMode");
    setIsDarkMode(storedDarkMode ? JSON.parse(storedDarkMode) : false);
  }, [isDarkMode]);

  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{
        background: "rgba(255, 255, 255, 0.08)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(6.3px)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              fontWeight: 700,
              textDecoration: "none",
              color: theme.palette.secondary.main,
            }}
          >
            Portfolio
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {pages.map((page, index) => (
              <Link
                activeClass="active"
                to={page.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                key={index}
              >
                <Button
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: theme.palette.secondary.main,
                    display: "block",
                  }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button sx={{ color: theme.palette.secondary.main }}>
              <IconLanguage /> Translate
            </Button>
            <Button
              sx={{ color: theme.palette.secondary.main }}
              onClick={handleDarkMode}
            >
              {isDarkMode ? <IconSun /> : <IconMoon />}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
