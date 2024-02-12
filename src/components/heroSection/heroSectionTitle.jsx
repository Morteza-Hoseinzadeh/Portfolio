import {
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { IconArrowDownRight } from "@tabler/icons-react";

export default function HeroSectionTitle() {
  const theme = useTheme();
  const matchMdDown = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      item
      xs={12}
      md={5}
      sx={{
        order: { xs: 2, md: 1 },
        justifyContent: { xs: "center", md: "left" },
        textAlign: { xs: "center", md: "left" },
        ml: { xs: 0, md: "75px" },
        color: theme.palette.secondary.main,
        p: 3,
      }}
    >
      <Typography variant={!matchMdDown ? "h3" : "h4"} component="p">
        Hello, It's Me
      </Typography>
      <Typography variant={!matchMdDown ? "h2" : "h4"} component="p">
        Morteza Hoseinzadeh
      </Typography>
      <Typography variant={!matchMdDown ? "h3" : "h4"} component="p">
        And I'm a
        <span
          style={{
            color: theme.palette.primary.main,
            marginLeft: 10,
          }}
        >
          Frontend Developer
        </span>
      </Typography>
      <Typography variant="h6" component="p" mt={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non
        eaque perspiciatis impedit mollitia possimus vitae, ipsa rerum
        exercitationem asperiores tempora, qui saepe repudiandae.
      </Typography>

      <Grid
        container
        item
        sx={{
          mt: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "left" },
        }}
      >
        <Button
          sx={{
            background: "rgba(255, 255, 255, 0.16)",
            borderRadius: "4px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(7.3px)",
            color: theme.palette.secondary.main,
            p: "8px 12px",
          }}
        >
          Contact Me
        </Button>
        <Button
          sx={{
            color: theme.palette.secondary.main,
            p: "8px 12px",
            ml: 1,
          }}
          endIcon={<IconArrowDownRight />}
        >
          View Portfolio
        </Button>
      </Grid>
    </Grid>
  );
}
