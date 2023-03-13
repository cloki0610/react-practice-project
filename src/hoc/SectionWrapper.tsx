import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component: React.ComponentType, idName: string) =>
  function () {
    const pageRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
      if (pageRef && location.hash.includes(`#${idName}`)) {
        pageRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      }
    }, [pageRef, location.hash]);
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName} ref={pageRef}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
