import { motion } from "framer-motion";

import SectionWrapper from "../../hoc/SectionWrapper";
import ProjectCard from "./Cards/ProjectCard";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { projects } from "../../constants/content";

const Work = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What I have done so far</p>
                <h2 className={styles.sectionHeadText}>
                    My Web Application Projects
                </h2>
            </motion.div>
            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Following projects are some showcases through real-world
                    example of my work. It reflects some of my skills to provide
                    full-stack commercial solutions and how to work with
                    different technology. You can find more from my github
                    repository via{" "}
                    <a
                        href="https://github.com/cloki0610?tab=repositories"
                        className="text-secondary font-bold"
                        target="_blank"
                    >
                        My GitHub
                    </a>
                    .
                </motion.p>
            </div>
            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Work, "work");
