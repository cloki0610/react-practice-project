import React from "react";
import { motion } from "framer-motion";

import ServiceCard from "./Cards/ServiceCard";
import SectionWrapper from "../../hoc/SectionWrapper";
import { styles } from "../../styles";
import { services } from "../../constants/content";
import { fadeIn, textVariant } from "../../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Intorduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-2-3xl leading-[30px]"
      >
        Junior Full Stack Developer with a solid foundation in Python, React,
        Django, Flask, Bootstrap, JQuery, and .NET Core. Graduated from Code
        Institute Diploma and Hong Kong Metropolitan University in Chinese
        Language and Literature. SAA level in AWS Cloud Services, looking for a
        new opportunity in the tech industry.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
