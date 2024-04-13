import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import NavLinks from "./NavLinks";
import { styles } from "../../styles";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import { navbar } from "../../utils/motion";
import Backdrop from "./Backdrop";

const Navbar = () => {
    const [active, setActive] = useState<string>("");
    const [toggle, setToggle] = useState<boolean>(false);
    return (
        <nav
            className={`${styles.paddingX} w-full flexitems-center py-5 fixed top-0 z-20 bg-primary`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <NavLink
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img
                        src={logo}
                        alt="HomePageLogo"
                        className="w-9 h-9 object-contain"
                    />
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">
                        Rocky&nbsp;
                        <span className="md:block hidden">| Web Developer</span>
                    </p>
                </NavLink>
                {/* Desktop Nav */}
                <NavLinks active={active} setActive={setActive} />
                {/* Mobile Nav */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    {!toggle && (
                        <img
                            src={menu}
                            alt="MenuOpen(Mobile)"
                            className="w-[28px] h-[28px] object-contain cursor-pointer"
                            onClick={() => setToggle((prevState) => !prevState)}
                            role="button"
                            tabIndex={0}
                        />
                    )}
                    {toggle && (
                        <Backdrop
                            onClick={() => setToggle((prevState) => !prevState)}
                        />
                    )}
                    <motion.div
                        variants={navbar}
                        animate={toggle ? "show" : "hidden"}
                        className="flex p-6 black-gradient absolute top-0 right-0 mx-4 my-2 min-w-[140px] h-screen z-20 rounded-xl"
                    >
                        <img
                            src={close}
                            alt="MenuClose(Mobile)"
                            className="w-[28px] h-[28px] object-contain cursor-pointer absolute top-5 right-5"
                            onClick={() => setToggle((prevState) => !prevState)}
                            role="button"
                            tabIndex={1}
                        />

                        <NavLinks
                            active={active}
                            setActive={setActive}
                            mobileToggle={setToggle}
                            mobile
                        />
                    </motion.div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
