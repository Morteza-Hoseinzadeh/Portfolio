import React, { useState } from "react";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { theme } from "../../../constant/themePalette";
import { useTranslation } from "react-i18next";
import { IconSend2 } from "@tabler/icons-react";

export default function Index() {
  const matchMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const user_infoes = useState({
    username: null,
    phone: null,
    email: null,
    text: null,
  });

  const inputs = [
    {
      tag: {
        input: (
          <input
            type="text"
            style={{ width: matchMdDown ? "100%" : "90%" }}
            placeholder="User Name"
          />
        ),
      },
    },
    {
      tag: {
        input: (
          <input
            type="text"
            style={{ width: matchMdDown ? "100%" : "90%" }}
            placeholder="Phone Number"
          />
        ),
      },
    },
    {
      tag: {
        input: (
          <input
            type="text"
            style={{ width: matchMdDown ? "100%" : "90%" }}
            placeholder="Email"
          />
        ),
      },
    },
    {
      tag: {
        textarea: (
          <textarea cols="30" rows="10" placeholder="Ask Your Queations?" />
        ),
      },
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
        #Contact
      </Typography>
      <Grid
        container
        sx={{
          backgroundColor: theme.palette.primary.main,
          width: "90%",
          p: 4,
          m: "4px auto 16px",
          borderRadius: 5,
          boxShadow: theme.palette.boxShadow.shadow,
        }}
      >
        <Grid item xs={12} textAlign="center">
          <Typography variant="h4" color={theme.palette.secondary.main}>
            Let's Talk
            <strong> Together</strong>
          </Typography>
          <Typography mt={1} color={theme.palette.secondary.grey}>
            Let's chat and talk about programming, and if you have any questions
            about this site, I'd be happy to help.
          </Typography>
        </Grid>

        <Grid container item mt={4}>
          <Grid container item xs={12} md={6}>
            {inputs.map((input, i) => (
              <Grid
                item
                xs={12}
                key={i}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {input.tag.input}
              </Grid>
            ))}
          </Grid>
          <Grid container item xs={12} md={6}>
            {inputs.map((input, i) => (
              <Grid
                item
                xs={12}
                key={i}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {input.tag.textarea}
              </Grid>
            ))}
          </Grid>
          <Grid container item display="flex" justifyContent="end" mt={2}>
            <Button
              variant="contained"
              sx={{
                color: theme.palette.secondary.main,
                outline: `1px solid ${theme.palette.primary.primaryLight}`,
                mr: 2,
                "&:hover": {
                  backgroundColor: theme.palette.primary.primaryLight,
                },
              }}
            >
              Clear
            </Button>

            <Button
              variant="outlined"
              sx={{
                backgroundColor: theme.palette.primary.primaryLight,
                color: theme.palette.secondary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.primaryLight,
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
