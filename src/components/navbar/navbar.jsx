import * as React from "react";

// import { LinkReactRouter } from "react-router-dom";
import { Link } from "react-router-dom";

// Mui material imports
import {
  Button,
  useTheme,
  Container,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import { IconLanguage, IconMoon, IconSun } from "@tabler/icons-react";

// Scroll link
import LinkScroll from "react-scroll/modules/components/Link";

// flags
import { IR, GB, SA, FR, DE } from "country-flag-icons/react/3x2";

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

const flags = [
  {
    title: "United Kingdom",
    svg: <GB style={{ width: "25px", marginRight: "10px" }} />,
    url: "/en",
  },
  {
    title: "Iran",
    svg: <IR style={{ width: "25px", marginRight: "10px" }} />,
    url: "/fa",
  },
  {
    title: "Saudi Arabia",
    svg: <SA style={{ width: "25px", marginRight: "10px" }} />,
    url: "/sa",
  },
  {
    title: "France",
    svg: <FR style={{ width: "25px", marginRight: "10px" }} />,
    url: "/fr",
  },
  {
    title: "Germany",
    svg: <DE style={{ width: "25px", marginRight: "10px" }} />,
    url: "/de",
  },
];

function Navbar() {
  const theme = useTheme();
  const [isDarkMode, setIsDarkMode] = React.useState(undefined);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <LinkScroll
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
              </LinkScroll>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{ color: theme.palette.secondary.main }}
            >
              <IconLanguage /> Translate
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{
                display: "flex",
                flexDirection: "colum",
                alignItems: "flex-start",
              }}
            >
              {flags.map((flag, i) => (
                <Link
                  to={flag.url}
                  key={i}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem onClick={handleClose}>
                    {flag.svg}
                    {flag.title}
                  </MenuItem>
                </Link>
              ))}
            </Menu>

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
