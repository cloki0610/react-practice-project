import { motion } from "framer-motion";

import { styles } from "../../styles";

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    {/* Draw a point and a stright line */}
                    <div className="w-5 h-5 rounded-full bg-[#a75712]" />
                    <div className="w-1 sm:h-80 h-40 brown-gradient" />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} select-none`}>
                        Hi, I'm <span className="text-[#a75712]">Rocky</span>
                    </h1>
                    <p
                        className={`${styles.heroSubText} mt-2 text-white-100 select-none`}
                    >
                        Build things for the web in{" "}
                        <br className="sm:block hidden" />
                        React, Vue, TypeScript and Python.
                    </p>
                </div>
            </div>
            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[6px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
