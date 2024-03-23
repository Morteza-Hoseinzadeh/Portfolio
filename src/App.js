import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";

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
          backgroundColor: theme.palette.background.backgroundColor,
        }}
      >
        <Router>
          <Navbar />
          <HeroSection />
          <BodySection />
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
                replace={route.replace}
              />
            ))}
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}
