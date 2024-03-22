import { createTheme } from "@mui/material";
import "../styles/font.css";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f1f1f1",
      secondary: "#72a0c1",
      primaryLight: "#4682b4",
    },
    secondary: {
      main: "#fff",
      light: "rgba(255, 255, 255, 0.7)",
      grey: "#555",
      dark: "#333",
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


// let darkTheme = {
//   palette: {
//     primary: {
//       main: "#1d2951",
//       secondary: "#72a0c1",
//       primaryLight: "#4682b4",
//     },
//     secondary: {
//       main: "#fff",
//       light: "rgba(255, 255, 255, 0.7)",
//       grey: "#555",
//       dark: "#333",
//     },
//     boxShadow: {
//       shadow:
//         "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
//     },
//     background: {
//       backgroundColor: {
//         backgroundColor: "#2b4162",
//         backgroundImage: "linear-gradient(280deg, #2b4162 0%, #12100e 74%)",
//       },
//     },
//   },
//   typography: {
//     fontFamily: ["Proxima-Soft"],
//   },
//   breakpoints: {
//     xs: "0px",
//     sm: "600px",
//     md: "900px",
//     lg: "1200px",
//     xl: "1536px",
//   },
// };