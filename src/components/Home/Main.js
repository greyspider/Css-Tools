import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Main.module.css";
const Main = () => {
  return (
    <>
      <div className={classes.nav}>
        <div className={classes.logo}>
          <Link to="/">
            <img
              src="https://i.ibb.co/Ky4VYWC/image-removebg-preview.png"
              alt="image-removebg-preview"
              border="0"
              style={{ width: "50px" }}
            />
          </Link>
          <h1>CSS Tools</h1>
        </div>
        <div className={classes.links}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
            end
          >
            Border Radius
          </NavLink>
          <NavLink
            to="/box-shadow"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Box Shadow
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Main;
