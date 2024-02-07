import React, { startTransition } from "react";
import styles from "./LogIn.module.css";
import logo from "../static/logos/qVault_var1.png";
import { useNavigate } from "react-router-dom";
import useBodyClass from "./useBodyClass";

const LogInPage = () => {
  //Need to change when have server
  const handleLogIn = () => {
    navigate("/dashboard");
  };
  const navigate = useNavigate();
  useBodyClass(styles.LogInBody);

  return (
    <div>
      <div className={styles.pageContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.logoContainer}>
            <img
              src={logo}
              alt="Logo"
              className={styles.logo}
              onClick={() => navigate("/")}
            />
          </div>
          <div className={styles.innerLeft}>
            <h2 className={styles.header}>Log In to Your Account</h2>
            <div className={styles.formContainer}>
              <form onSubmit={handleLogIn} className={styles.form}>
                <div className={styles.inputContainer}>
                  <label htmlFor="username" className={styles.inputlabel}>
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className={styles.inputField}
                    required
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor="password" className={styles.inputlabel}>
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={styles.inputField}
                    required
                  />
                </div>
                <div className={styles.submitContainer}>
                  <button type="submit" className={styles.loginButton}>
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.rightPillar}>
            <h2 className={styles.signUpHeader}>New here?</h2>
            <h4 className={styles.signUpDescription}>
              Sign up and start learning with us!
            </h4>
            <button className={styles.signupButton} onClick={() => navigate("/signup")}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
