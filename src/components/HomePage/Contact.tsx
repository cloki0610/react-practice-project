import React from "react";
import { motion } from "framer-motion";

import SectionWrapper from "../../hoc/SectionWrapper";
import { styles } from "../../styles";
import { slideIn } from "../../utils/motion";
import { PortalCubeCanvas } from "./canvas";

const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-1 overflow-hidden">
      <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl md:h-[550px] h-[350px] min-w-[400px]"
      >
        <p className={styles.sectionSubText}>Get in touch with me</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <br />
        <p className="text-white text-[20px] font-medium mb-4">
          E-mail: cloki0610@gmail.com
        </p>
        <br />
        <p className="text-white text-[20px] font-medium mb-4">
          Mobile: +44 7868123373
        </p>
      </motion.div>
      <motion.div
        variants={slideIn("down", "tween", 0.5, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <PortalCubeCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
