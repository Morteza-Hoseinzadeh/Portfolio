import { createTheme } from "@mui/material";
import "../styles/font.css";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1d2951",
      secondary: "#72a0c1",
      primaryLight: "#4682b4",
    },
    secondary: {
      main: "#fff",
      light: "rgba(255, 255, 255, 0.7)",
      dark: "#252525",
      disabled: "rgba(255, 255, 255, 0.5)",
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
