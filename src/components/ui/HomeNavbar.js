import React from 'react';
import { HashLink } from 'react-router-hash-link';
import styles from './HomeNavbar.module.css';
import logo from "../../static/logos/qVault_transparent.png";
import { useNavigate } from "react-router-dom";

const HomeNavBar = () => {

  const navigate = useNavigate();
  return (
    <div className={styles.navBar}>
      <div className={styles.leftContainer}>
        <HashLink smooth to="/#home" className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </HashLink>
        <HashLink smooth to="/#home" className={styles.leftItemContainer}>
          <p className={styles.navLink}>Overview</p>
        </HashLink>
        <HashLink smooth to="/#about" className={styles.leftItemContainer}>
          <p className={styles.navLink}>About Us</p>
        </HashLink>
        <HashLink smooth to="/#contact" className={styles.leftItemContainer}>
          <p className={styles.navLink}>Contact Us</p>
        </HashLink>
      </div>
      <div className={styles.rightContainer}>
        <div onClick={() => navigate('/signup')} className={styles.itemContainer}>
          <p className={styles.navLink}>Sign Up</p>
        </div>
        <div onClick={() => navigate('/login')} className={styles.itemContainer}>
          <p className={styles.navLink}>Log In</p>
        </div>
      </div>
    </div>
  );
};

export default HomeNavBar;