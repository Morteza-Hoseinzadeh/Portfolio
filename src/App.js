import React from "react";
// components
import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/heroSection/index";
// Theme
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./constant/themePalette";
// styles
import "./styles/style.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          position: "sticky",
          background: "rgb(169,205,229)",
          background:
            "linear-gradient(90deg, rgba(169,205,229,1) 0%, rgba(121,146,161,1) 19%, rgba(153,185,208,1) 100%)",
        }}
      >
        <Navbar />
        <HeroSection />
      </Box>
    </ThemeProvider>
  );
}
