import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { theme } from "../../../constant/themePalette";

export default function Details() {
  const matchMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const details = [
    {
      Satisfied_Clients: 17,
      Project_Completed: 21,
      Reviews_Given: 19,
      Current_Projects: 3,
    },
  ];

  return (
    <Grid container mb={8} mt={matchMdDown ? 12 : 12}>
      {details.map((item, index) => (
        <Grid container item key={index}>
          {Object.keys(item).map((key) => (
            <Grid
              item
              key={key}
              xs={6}
              md={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                textAlign: "center",
                mb: matchMdDown ? 5 : 0,
                borderRight: `2px solid ${theme.palette.secondary.main}`,
              }}
            >
              <Grid flexDirection={"column"}>
                <Typography
                  variant={matchMdDown ? "h3" : "h4"}
                  sx={{ color: theme.palette.secondary.main }}
                >
                  {item[key]}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: theme.palette.primary.main }}
                >
                  {key.split("_").join(" ")}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
}
