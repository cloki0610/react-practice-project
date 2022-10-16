import { NavLink, Outlet } from "react-router-dom";
import classes from "./Layout.module.css";

export const Layout = () => {
  return (
    <>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/dice-game"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Dice Game
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/date-counter"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Date counter
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bmi-calc"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                BMI Calculator
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/calculator"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Calculator
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/weather-board"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Weather Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wordle"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Wordle Clone
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
