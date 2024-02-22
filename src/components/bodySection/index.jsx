import React from "react";
import Details from "./PerformanceMetrics";
import Communicate from "./Communicate";
import Experience from "./Experience";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import ContactMe from "../FooterSection/ContactMe";
import SocialMedia from "./SocialMedia";
import { Paper } from "@mui/material";

export default function BodySection() {
  return (
    <>
      <Paper sx={{ background: "none", boxShadow: "none", p: 0 }}>
        <Details />
      </Paper>

      <Paper sx={{ background: "none", boxShadow: "none", p: 0 }}>
        <Communicate />
      </Paper>

      <Paper id="AboutMe" sx={{ background: "none", boxShadow: "none", p: 0 }}>
        <AboutMe />
      </Paper>

      <Paper id="MySkills" sx={{ background: "none", boxShadow: "none", p: 0 }}>
        <Skills />
      </Paper>

      <Paper id="MyExperience" sx={{ background: "none", boxShadow: "none", p: 0 }}>
        <Experience />
      </Paper>

      <Paper id="MySocialMedia" sx={{ background: "none", boxShadow: "none", p: 0 }}>
        <SocialMedia />
      </Paper>

      <Paper id="ContactMe" sx={{ background: "none", boxShadow: "none", p: 1 }}>
        <ContactMe />
      </Paper>
    </>
  );
}
