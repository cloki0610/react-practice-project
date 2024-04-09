import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { useScrollIntoView } from "../hooks/useScrollIntoView";

const SectionWrapper = (Component: React.ComponentType, idName: string) =>
    function SectionWrapperComponent() {
        const pageRef = useScrollIntoView(idName);

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
