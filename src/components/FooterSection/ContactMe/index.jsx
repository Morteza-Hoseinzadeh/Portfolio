import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { theme } from "../../../constant/themePalette";

export default function Index() {
  const matchMdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Typography
        mt={8}
        variant={"h5"}
        color={theme.palette.primary.main}
        sx={{
          p: 1,
          textAlign: matchMdDown ? "center" : "left",
          ml: matchMdDown ? 0 : 8,
        }}
      >
        #Contact Me
      </Typography>
    </>
  );
}
