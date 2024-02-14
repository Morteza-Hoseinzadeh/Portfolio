import { createTheme } from "@mui/material";
import "../styles/font.css";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1d2951",
      // main: "#035ca6",
      secondary: "#72a0c1",
      primaryLight: "#4682b4",
    },
    secondary: {
      main: "#fff",
      light: "rgba(255, 255, 255, 0.7)",
      dark: "#333",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    boxShadow: {
      shadow:
        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
    },
    background: {
      backgroundColorLight: {
        backgroundColor: "#ffffff",
        backgroundImage: "linear-gradient(340deg, #eee 0%, #335c81 74%)",
      },
      backgroundColorDark: {
        backgroundColor: "#2b4162",
        backgroundImage: "linear-gradient(280deg, #2b4162 0%, #12100e 74%)",
      },
    },
  },
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
