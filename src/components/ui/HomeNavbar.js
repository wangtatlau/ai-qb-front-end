import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './HomeNavbar.module.css';
import logo from "../../static/logos/qVault_transparent.png";

const HomeNavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.leftContainer}>
        <HashLink to="/#home" className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </HashLink>
        <HashLink smooth to="/#home" className={styles.itemContainer}>
          <p className={styles.navLink}>Overview</p>
        </HashLink>
        <HashLink smooth to="/#about" className={styles.itemContainer}>
          <p className={styles.navLink}>About Us</p>
        </HashLink>
        <HashLink smooth to="/#contact" className={styles.itemContainer}>
          <p className={styles.navLink}>Contact Us</p>
        </HashLink>
      </div>
      <div className={styles.rightContainer}>
        <Link to="/signup" className={styles.itemContainer}>
          <p className={styles.navLink}>Sign Up</p>
        </Link>
        <Link to="/login" className={styles.itemContainer}>
          <p className={styles.navLink}>Log In</p>
        </Link>
      </div>
    </div>
  );
};

export default HomeNavBar;