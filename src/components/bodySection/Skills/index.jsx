import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { theme } from "../../../constant/themePalette";

// Icons
import html from "../../../assets/icons/icons8-html-5.svg";
import css from "../../../assets/icons/icons8-css3.svg";
import js from "../../../assets/icons/icons8-javascript.svg";
import bootstrap from "../../../assets/icons/icons8-bootstrap.svg";
import tailwind from "../../../assets/icons/icons8-tailwind-css.svg";
import sass from "../../../assets/icons/icons8-sass.svg";
import react from "../../../assets/icons/icons8-react-native.svg";
import typescript from "../../../assets/icons/icons8-typescript.svg";
import redux from "../../../assets/icons/icons8-redux.svg";
import npm from "../../../assets/icons/icons8-npm.svg";
import git from "../../../assets/icons/icons8-git.svg";
import github from "../../../assets/icons/icons8-github.svg";
import firebase from "../../../assets/icons/icons8-firebase.svg";
import mui from "../../../assets/icons/icons8-material-ui.svg";
import yarn from "../../../assets/icons/yarn-package-manager-icon.svg";
import jquery from "../../../assets/icons/jquery-icon.svg";
import restfulApi from "../../../assets/icons/api-svgrepo-com.svg";

export default function Index() {
  const matchMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const skill = [
    {
      title: "Fundamentals",
      src: [html, css, js],
    },
    {
      title: "CSS Frameworks",
      src: [bootstrap, tailwind],
    },
    {
      title: "CSS Preprocessors",
      src: [sass],
    },
    {
      title: "JavaScript Frameworks",
      src: [react],
    },
    {
      title: "JavaScript Libraries",
      src: [jquery],
    },
    {
      title: "State Management Libraries",
      src: [redux],
    },
    {
      title: "Package Manager",
      src: [npm, yarn],
    },
    {
      title: "Project Management",
      src: [git],
    },
    {
      title: "Deployments",
      src: [firebase, github],
    },
    {
      title: "UI Frameworks",
      src: [mui],
    },
    {
      title: "Advance Topics",
      src: [restfulApi],
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
        #Skills
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
        }}
      >
        {skill.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Typography variant="h6" color={theme.palette.secondary.main}>
              {item.title}
            </Typography>
            {item.src.map((icon, idx) => (
              <img
                key={idx}
                src={icon}
                alt={item.title}
                style={{ margin: "2px 8px 12px 0" }}
                width="50px"
              />
            ))}
          </Grid>
        ))}
      </Grid>
    </>
  );
}
