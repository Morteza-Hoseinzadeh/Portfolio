import React from "react";
import { theme } from "../../../constant/themePalette";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import {
  IconMessages,
  IconDiamond,
  IconPuzzle,
  IconSitemap,
} from "@tabler/icons-react";

export default function Communicate() {
  const matchMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const communicateDetails = [
    {
      title: "Time Management",
      icon: <IconMessages color={theme.palette.secondary.main} />,
      detail:
        "Time management in programming involves efficiently allocating your time and resources to complete tasks, meet deadlines, and maintain productivity.",
    },
    {
      title: "Care About Work",
      icon: <IconDiamond color={theme.palette.secondary.main} />,
      detail:
        "Teamwork is essential for success in software development projects, where multiple individuals collaborate to achieve common goals.",
    },
    {
      title: "Team Work",
      icon: <IconPuzzle color={theme.palette.secondary.main} />,
      detail:
        "In the context of programming or software development, teamwork is especially important as projects often involve complex tasks that require diverse skills and expertise.",
    },
    {
      title: "Public Communication",
      icon: <IconSitemap color={theme.palette.secondary.main} />,
      detail:
        "Effective public communication is essential for building relationships, influencing opinions, fostering understanding, and achieving organizational goals.",
    },
  ];

  return (
    <>
      <Typography
        mt={matchMdDown ? 16 : 24}
        variant={"h5"}
        color={theme.palette.primary.main}
        sx={{
          p: 1,
          textAlign: matchMdDown ? "center" : "left",
          ml: matchMdDown ? 0 : 8,
        }}
      >
        #Communicate
      </Typography>
      <Grid
        container
        mb={8}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          ml: matchMdDown ? 0 : 10,
          p: matchMdDown ? 1 : 0,
        }}
      >
        <Grid
          item
          xs={12}
          md={5}
          pr={matchMdDown ? 0 : 2}
          px={matchMdDown ? 4 : 0}
          textAlign={matchMdDown ? "center" : "left"}
        >
          <Typography
            variant={matchMdDown ? "h4" : "h3"}
            color={theme.palette.secondary.main}
          >
            Why Hire Me For Your Next Project?
          </Typography>
          <Typography
            mt={1.5}
            color={theme.palette.primary.main}
            display="inline-block"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit fuga
            optio harum facere ducimus. Fuga numquam, minus dolores ea eos
            delectus voluptates nisi qui, quibusdam nam cupiditate deleniti,
            vitae atque. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quaerat esse aliquid nemo quam fugit
            numquam voluptates blanditiis nisi iste officiis!
          </Typography>

          <Button variant="contained" sx={{ mt: 2 }}>
            Hire Me
          </Button>
        </Grid>

        <Grid item xs={12} md={7} px={8} mt={matchMdDown ? 8 : 0}>
          <Grid container pr={matchMdDown ? 0 : 4}>
            {communicateDetails.map((detail, index) => (
              <Grid
                item
                xs={12}
                md={6}
                mb={4}
                key={index}
                textAlign={matchMdDown ? "center" : "left"}
              >
                {detail.icon}
                <Typography
                  variant="h5"
                  mb={0.5}
                  color={theme.palette.secondary.main}
                >
                  {detail.title}
                </Typography>
                <Typography
                  color={theme.palette.primary.main}
                  pr={matchMdDown ? 0 : 2}
                >
                  {detail.detail}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
