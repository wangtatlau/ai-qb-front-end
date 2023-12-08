import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./HomeNavbar.module.css"; // Adjust the path based on your project structure

function HomeNavbar() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink exact to="/" className={classes.link}>
            Home
          </NavLink>
        </li>
        <li>
          <Link to="/#about" className={classes.link}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/#contact" className={classes.link}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/signup" className={classes.link}>
            Signup
          </Link>
        </li>
        <li>
          <Link to="/login" className={classes.link}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HomeNavbar;
