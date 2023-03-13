import React from "react";
import { NavLink } from "react-router-dom";

import DropDown from "./DropDown";
import type { NavLinkType } from "../../interfaces/HomepageType";
import { navLinks, projectList } from "../../constants/content";

const NavLinks = ({ active, setActive, mobileToggle, mobile }: NavLinkType) => {
  const ListStyle = mobile
    ? "list-none flex justify-end items-start flex-col gap-4"
    : "list-none hidden sm:flex flex-row gap-10";
  const itemStyle = mobile
    ? "font-popins text-[16px]"
    : "hover:text-white text-[18px]";
  return (
    <ul className={ListStyle}>
      {navLinks.map((link) =>
        link.id === "projects" ? (
          mobile ? (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } ${itemStyle} font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
                mobileToggle && mobileToggle(false);
              }}
            >
              <span>{link.title}</span>
              <ul>
                {projectList.map((project) => (
                  <li
                    key={project.name}
                    className={`mt-3 py-1 pl-3 text-secondary text-sm ${
                      mobile ? "font-popins" : "hover:text-white"
                    }`}
                  >
                    <NavLink
                      to={project.url}
                      onClick={() => {
                        setActive("projects");
                        mobileToggle && mobileToggle(false);
                      }}
                    >
                      {project.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <DropDown
              key={link.id}
              title={link.title}
              active={active}
              setActive={setActive}
            />
          )
        ) : (
          <li
            key={link.id}
            className={`${
              active === link.title ? "text-white" : "text-secondary"
            } ${itemStyle} font-medium cursor-pointer`}
            onClick={() => {
              setActive(link.title);
              mobileToggle && mobileToggle(false);
            }}
          >
            <NavLink to={{ pathname: "/", hash: `${link.id}` }} reloadDocument>
              {link.title}
            </NavLink>
          </li>
        )
      )}
    </ul>
  );
};

export default NavLinks;
