import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { theme } from "../../../constant/themePalette";

// Icons
import Telegram from "../../../assets/icons/social-media/icons8-telegram.svg";
import Instagram from "../../../assets/icons/social-media/icons8-instagram.svg";
import LinkedIn from "../../../assets/icons/social-media/icons8-linkedin.svg";
import Github from "../../../assets/icons/icons8-github.svg";

export default function Index() {
  const matchMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const icons = [
    {
      title: "LinkdIn",
      img: LinkedIn,
      url: "",
    },
    {
      title: "Github",
      img: Github,
      url: "https://github.com/Morteza-Hoseinzadeh/",
    },
    {
      title: "Instagram",
      img: Instagram,
      url: "https://www.instagram.com/morteza.hnz/",
    },
    {
      title: "Telegram",
      img: Telegram,
      url: "https://t.me/morteza_hnz",
    },
  ];

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
        #Social Media
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: theme.palette.primary.main,
          textAlign: matchMdDown ? "center" : "left",
          width: "90%",
          p: 4,
          mx: "auto",
          mt: 2,
          borderRadius: 5,
          boxShadow: theme.palette.boxShadow.shadow,
        }}
      >
        <Grid
          container
          item
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          {icons.map((item, i) => (
            <Grid item mt={matchMdDown ? 2 : 0} key={i}>
              <a href={item.url} target="_blank">
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "70px" }}
                />
              </a>
              <Typography
                textAlign="center"
                color={theme.palette.secondary.main}
              >
                {item.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
