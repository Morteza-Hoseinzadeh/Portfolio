import React from "react";
import { Grid } from "@mui/material";
import { theme } from "../../constant/themePalette";
import img from "../../assets/Background-Image/background.png";

export default function HeroSectionImg() {
  return (
    <Grid
      container
      item
      xs={12}
      md={6}
      sx={{
        order: { xs: 1, md: 2 },
        justifyContent: "center",
      }}
    >
      <img src={img} alt="back-image" style={{ width: "75%" }} />
    </Grid>
  );
}
