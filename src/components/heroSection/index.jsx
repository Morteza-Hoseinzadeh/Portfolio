import React from "react";

import "../../styles/font.css";

import HeroSectionTitle from "./heroSectionTitle";
import { Grid } from "@mui/material";
import HeroSectionImg from "./heroSectionImg";

export default function HeroSection() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <HeroSectionTitle />
      <HeroSectionImg />
    </Grid>
  );
}
