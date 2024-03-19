import React, { startTransition } from "react";
import styles from "./SignUp.module.css";
import logo from "../static/logos/qVault_var1.png";
import { useNavigate } from "react-router-dom";
import useBodyClass from "./useBodyClass";
import tick from "../static/logos/abstract_tick.png";

const SignUpPage = () => {
  //Need to change when have server
  const handleSignUp = () => {
    navigate("/login");
  };
  const navigate = useNavigate();
  useBodyClass(styles.SignUpBody);

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
            <h2 className={styles.header}>Create Your Account</h2>
            <div className={styles.formContainer}>
              <form onSubmit={handleSignUp} className={styles.form}>
                <div className={styles.inputContainer}>
                  <label htmlFor="email" className={styles.inputlabel}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.inputField}
                    required
                  />
                </div>
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
                  <label htmlFor="name" className={styles.inputlabel}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.inputField}
                    required
                  />
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor="university" className={styles.inputlabel}>
                    University
                  </label>
                  <input
                    type="text"
                    id="university"
                    name="university"
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
                <div className={styles.inputContainer}>
                  <label
                    htmlFor="confirmPassword"
                    className={styles.inputlabel}
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className={styles.inputField}
                    required
                  />
                </div>
                <div
                  className={styles.inputContainer}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    id="termsConditions"
                    name="termsConditions"
                    className={styles.checkbox}
                    required
                  />
                  <label
                    htmlFor="termsConditions"
                    className={styles.checkboxLabel}
                    style={{ marginLeft: "8px" }}
                  >
                    I agree to the Terms and Conditions
                  </label>
                </div>
                <div className={styles.submitContainer}>
                  <button type="submit" className={styles.signupButton}>
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.rightPillar}>
            <img src={tick} className={styles.tick} />
            <p className={styles.signUpHeader}>Already have an account?</p>
            <p className={styles.signUpDescription}>Log in here!</p>
            <button
              className={styles.loginButton}
              onClick={() => navigate("/login")}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
