import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import ExperienceCard from "./Cards/ExperienceCard";
import SectionWrapper from "../../hoc/SectionWrapper";
import { styles } from "../../styles";
import { experiences } from "../../constants/content";
import { textVariant } from "../../utils/motion";

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>This is why I'm here</p>
                <h2 className={styles.sectionHeadText}>Work Experience</h2>
            </motion.div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "experience");
