import React from "react";

// components
import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/heroSection/index";
import BodySection from "./components/bodySection";
import SnowEffect from "./components/snowEffect/snowEffect";

// Theme
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./constant/themePalette";

// styles
import "./styles/style.css";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnowEffect />
      <Box
        sx={{
          width: "100vw",
          height: "100%",
          backgroundSize: "cover",
          backgroundColor: theme.palette.background.backgroundColorLight,
        }}
      >
        <Navbar />
        <HeroSection />
        <BodySection />
      </Box>
    </ThemeProvider>
  );
}
