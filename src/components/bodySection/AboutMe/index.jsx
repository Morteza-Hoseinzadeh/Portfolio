import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { theme } from "../../../constant/themePalette";

import myPic from "../../../assets/Background-Image/my-pic.png";

export default function Index() {
  const matchMdDown = useMediaQuery(theme.breakpoints.down("md"));
  const aboutMe = {
    name: "Morteza Hoseinzadeh",
    year_born: "2005-April",
    area_of_expertise: "Frontend Developer",
    start_work_experience: "2023-June",
    level: "Junior",
    phone: "+98906451808",
    Email: "morteza.hosseinzadeh8413@gmail.com",
    english_level: "Advanced",
    education: "Student At Islamic Azad University Islamshahr Branch",
    field_of_study: "Software Engineering",
  };

  const capitalizeAndFormat = (str) => {
    return str
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

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
        #About Me
      </Typography>
      <Grid
        container
        mt={2}
        display="flex"
        alignItems="center"
        width="92%"
        mx="auto"
      >
        <Grid
          item
          xs={12}
          mt={matchMdDown ? 2 : 0}
          sx={{
            backgroundColor: theme.palette.primary.main,
            borderRadius: 5,
            p: 4,
            mx: 2,
            boxShadow: theme.palette.boxShadow.shadow,
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={7}
              display="flex"
              flexDirection={matchMdDown ? "column" : "row"}
              alignItems="center"
            >
              <img
                src={myPic}
                alt={myPic}
                style={{
                  width: matchMdDown ? "130px" : "200px",
                }}
              />
              <Box>
                {Object.keys(aboutMe).map((key, index) => (
                  <Typography
                    key={index}
                    color={theme.palette.secondary.main}
                    ml={matchMdDown ? 0 : 2}
                    mb={matchMdDown ? 1 : 0}
                  >
                    <strong style={{ color: theme.palette.secondary.light }}>
                      {capitalizeAndFormat(key)}:
                    </strong>{" "}
                    {aboutMe[key]}
                  </Typography>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={5} mt={matchMdDown ? 4 : 0}>
              <Typography variant="h6" color={theme.palette.secondary.light}>
                Biography
              </Typography>
              <Typography color={theme.palette.secondary.main}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
                nemo similique accusantium voluptatibus error, perspiciatis
                repudiandae quo soluta quaerat exercitationem magni nam
                incidunt, amet molestiae numquam autem, vitae reprehenderit ex
                harum eaque voluptatum nulla. Repellendus iste consectetur sint
                dolor illo alias qui, vel soluta dolorem! Nam harum id quos
                debitis.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
