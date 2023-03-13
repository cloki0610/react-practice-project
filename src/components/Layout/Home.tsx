import React from "react";
import {
  About,
  Experience,
  Hero,
  StarsCanvas,
  Tech,
  Work,
  Contact,
} from "../HomePage";

export const Home = () => {
  return (
    <div className="relative z-0">
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Work />
      <Contact />
      <StarsCanvas />
    </div>
  );
};
