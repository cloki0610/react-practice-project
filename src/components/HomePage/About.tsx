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
                I am a skilled web developer proficient in TypeScript, React,
                Vue3, TailwindCSS, and Next.js. Additionally, I possess solid
                expertise in Python, C#, and Rust for machine learning and data
                analysis. I hold the AWS Solution Architect Associate
                certificate and have a strong grasp of Kubernetes and Docker. My
                educational background includes a degree in Chinese Language and
                Literature from Hong Kong Metropolitan University in 2021, and I
                am currently pursuing a Master's in Computer Science at the
                University of York, following completion of a bootcamp diploma
                program. With two years of experience as a clerk and one year as
                a freelancer in translation and web development, I am now
                actively seeking new opportunities in the tech industry.
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
