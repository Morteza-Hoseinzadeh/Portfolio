import React from "react";
import Details from "./PerformanceMetrics";
import Communicate from "./Communicate";
import Experince from "./Experince";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import ContactMe from "../FooterSection/ContactMe";
import SocialMedia from "./SocialMedia";

export default function BodySection() {
  return (
    <>
      <Details />
      <Communicate />
      <AboutMe />
      <Skills />
      <Experince />
      <SocialMedia />
      <ContactMe />
    </>
  );
}
