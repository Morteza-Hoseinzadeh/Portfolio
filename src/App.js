import React from "react";
import Navbar from "./components/navbar/navbar";
import { Box } from "@mui/material";
// import { useRoutes } from "react-router-dom";
// import routes from "./components/routes";

export default function App() {
  // let Route = useRoutes(routes);

  return (
    <html dir="ltr" lang="en">
      <Box>
        <Navbar />
      </Box>
    </html>
  );
}
