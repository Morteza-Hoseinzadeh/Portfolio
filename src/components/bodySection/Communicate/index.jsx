import React from "react";
import { theme } from "../../../constant/themePalette";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { IconDiamond, IconPuzzle, IconSitemap } from "@tabler/icons-react";
import { IconMessages } from "@tabler/icons-react";

export default function Communicate() {
  const matchMdDown = useMediaQuery(theme.breakpoints.down("md"));
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
          pr={matchMdDown ? 0 : 4}
          textAlign={matchMdDown ? "center" : "left"}
          sx={{ borderRight: `2px solid ${theme.palette.secondary.main}` }}
        >
          <Typography
            variant={matchMdDown ? "h4" : "h3"}
            color={theme.palette.secondary.main}
          >
            Why Hire Me For Your Next Project?
          </Typography>
          <Typography mt={1.5} color={theme.palette.primary.main}>
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

        <Grid item xs={12} md={7} px={12} mt={matchMdDown ? 8 : 0}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} mb={4}>
              <IconDiamond color={theme.palette.secondary.main} />
              <Typography
                variant="h5"
                mb={0.5}
                color={theme.palette.secondary.main}
              >
                Time Management
              </Typography>
              <Typography color={theme.palette.primary.main}>
                Time management in programming involves efficiently allocating
                your time and resources to complete tasks, meet deadlines, and
                maintain productivity.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} mb={4}>
              <IconPuzzle color={theme.palette.secondary.main} />
              <Typography
                variant="h5"
                mb={0.5}
                color={theme.palette.secondary.main}
              >
                Care About Work
              </Typography>
              <Typography color={theme.palette.primary.main}>
                Teamwork is essential for success in software development
                projects, where multiple individuals collaborate to achieve
                common goals.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} mb={4}>
              <IconSitemap color={theme.palette.secondary.main} />
              <Typography
                variant="h5"
                mb={0.5}
                color={theme.palette.secondary.main}
              >
                Team Work
              </Typography>
              <Typography color={theme.palette.primary.main}>
                In the context of programming or software development, teamwork
                is especially important as projects often involve complex tasks
                that require diverse skills and expertise.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} mb={4}>
              <IconMessages color={theme.palette.secondary.main} />
              <Typography
                variant="h5"
                mb={0.5}
                color={theme.palette.secondary.main}
              >
                Public Communication
              </Typography>
              <Typography color={theme.palette.primary.main}>
                Effective public communication is essential for building
                relationships, influencing opinions, fostering understanding,
                and achieving organizational goals.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
