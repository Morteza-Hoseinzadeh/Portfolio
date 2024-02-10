import { createTheme } from "@mui/material";
import "../styles/font.css";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#778ba5",
      secondary: "#72a0c1",
      primaryLight: "#4682b4",
      primaryDark: "#1d2951",
    },
    secondary: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: ["Proxima-Soft"],
  },
});
