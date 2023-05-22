import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import type { DropDownType } from "../../interfaces/HomepageType";
import { projectList } from "../../constants/content";
import { navbar } from "../../utils/motion";
import { motion } from "framer-motion";

const DropDown = ({ title, active, setActive }: DropDownType) => {
    const [toggle, setToggle] = useState<boolean>(false);
    const onToggle = () => {
        setToggle((prevState) => !prevState);
    };
    return (
        <li className="relative">
            <div
                className={`${
                    active === title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={onToggle}
            >
                {title}
            </div>
            <motion.ul
                variants={navbar}
                animate={toggle ? "show" : "hidden"}
                className="p-6 black-gradient absolute my-2 min-w-[120px] z-10 rounded-xl"
            >
                {projectList.map((project) => (
                    <li className="py-3 text-secondary hover:text-white">
                        <NavLink
                            to={project.url}
                            onClick={() => {
                                setActive(title);
                                setToggle(false);
                            }}
                        >
                            {project.name}
                        </NavLink>
                    </li>
                ))}
            </motion.ul>
        </li>
    );
};

export default DropDown;
