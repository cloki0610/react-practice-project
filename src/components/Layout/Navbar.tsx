import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import NavLinks from "./NavLinks";
import { styles } from "../../styles";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";

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
            Rocky&nbsp;<span className="sm:block hidden">| Web Developer</span>
          </p>
        </NavLink>
        {/* Desktop Nav */}
        <NavLinks active={active} setActive={setActive} />
        {/* Mobile Nav */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu(Mobile)"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((prevState) => !prevState)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <NavLinks
              active={active}
              setActive={setActive}
              mobileToggle={setToggle}
              mobile
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
