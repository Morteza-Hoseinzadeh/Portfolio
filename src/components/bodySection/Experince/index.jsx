import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { theme } from "../../../constant/themePalette";

import img from "../../../assets/Company-Images/ariana.webp";
import img2 from "../../../assets/Company-Images/rahaco.webp";

export default function Index() {
  const matchMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const experiencesTitle = ["company", "date", "area_of_expertise", "total"];
  const experiences = [
    {
      company: "Ariana labs",
      start_date: "2023-December",
      end_date: "",
      area_of_expertise: "React Developer - Frontend Developer",
      total: "",
      description:
        "Lorem ipsum, adipisicing elit. Quisquam repudiandae dolores fugiat culpa sint consequuntur beatae modi laudantium corrupti, necessitatibus earum veniam ad perferendis mollitia doloribus ipsa? Ab, optio cum.Lorem ipsum, adipisicing elit. Quisquam repudiandae dolores fugiat culpa sint consequuntur beatae modi laudantium corrupti, necessitatibus earum veniam ad perferendis mollitia doloribus ipsa? Ab, optio cum.",
      img: img,
    },
    {
      company: "Rahaco",
      start_date: "2023-June",
      end_date: "2023-October",
      area_of_expertise: "Frontend Developer - Web Designer",
      total: "4 month",
      description:
        "Lorem ipsum, adipisicing elit. Quisquam repudiandae dolores fugiat culpa sint consequuntur beatae modi laudantium corrupti, necessitatibus earum veniam ad perferendis mollitia doloribus ipsa? Ab, optio cum.Lorem ipsum, adipisicing elit. Quisquam repudiandae dolores fugiat culpa sint consequuntur beatae modi laudantium corrupti, necessitatibus earum veniam ad perferendis mollitia doloribus ipsa? Ab, optio cum.",
      img: img2,
    },
  ];

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
        #Experiences
      </Typography>

      <Grid
        container
        mt={2}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
      >
        {experiences.map((item, index) => (
          <Grid
            key={index}
            item
            xs={12}
            md={5}
            mt={matchMdDown ? 2 : 0}
            sx={{
              backgroundColor: theme.palette.primary.main,
              borderRadius: 5,
              p: 4,
              mx: 2,
              boxShadow: theme.palette.boxShadow.shadow,
            }}
          >
            <Grid item sx={{ display: "flex", alignItems: "flex-start" }}>
              <img
                src={item.img}
                alt={item.company_name}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  marginRight: "12px",
                  backgroundColor: "white",
                }}
              />
              <Box>
                {experiencesTitle.map((title, index) => (
                  <Typography color={theme.palette.secondary.main} key={index}>
                    <span style={{ color: theme.palette.secondary.light }}>
                      {capitalizeAndFormat(title) + ": "}
                    </span>
                    {item[title]}

                    {title === "date" &&
                      `${item.start_date ? item.start_date : "Unknown"} / 
                        ${item.end_date ? item.end_date : "Until now"}`}
                    {title === "total" && !item.total && "-"}
                  </Typography>
                ))}
              </Box>
            </Grid>

            <Typography
              variant="h6"
              color={theme.palette.secondary.main}
              mt={2}
            >
              {item.company}
            </Typography>

            <Typography color={theme.palette.secondary.main}>
              {item.description}
            </Typography>

            <Typography mt={2} color={theme.palette.secondary.light}>
              Click To See More About {item.company}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
