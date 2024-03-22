import { createTheme } from "@mui/material";
import "../styles/font.css";

const lightTheme = {
  primary: {
    main: "#D6E6F2",
    secondary: "#72a0c1",
    primaryLight: "#4682b4",
    primaryMain: "#D6E6F2",
  },
  secondary: {
    main: "#fff",
    light: "#fff",
    grey: "#252525",
    dark: "#252525",
  },
  boxShadow: {
    shadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  },
  background: {
    backgroundColor: {
      backgroundColor: "#ffffff",
      backgroundImage: "linear-gradient(340deg, #eee 0%, #335c81 74%)",
    },
  },
};

const darkTheme = {
  primary: {
    main: "#fff",
    secondary: "#72a0c1",
    primaryLight: "#fff",
    primaryMain: "#151515",
  },
  secondary: {
    main: "#fff",
    light: "#fff",
    grey: "#fff",
    dark: "#fff",
  },
  boxShadow: {
    shadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  },
  background: {
    backgroundColor: {
      backgroundColor: "#2b4162",
      backgroundImage: "linear-gradient(280deg, #2b4162 0%, #12100e 74%)",
    },
  },
};

const applyTheme = (theme) => {
  return createTheme({
    palette: theme,
    typography: {
      fontFamily: ["Proxima-Soft"],
    },
    breakpoints: {
      xs: "0px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
  });
};

export let theme;

export const updateTheme = () => {
  const isDarkModeEnabled = localStorage.getItem("isDarkMode") === "true";
  const currentTheme = isDarkModeEnabled ? darkTheme : lightTheme;
  theme = applyTheme(currentTheme);
};

updateTheme();

const handleThemeChange = () => {
  updateTheme();
};

window.addEventListener("storage", handleThemeChange);
