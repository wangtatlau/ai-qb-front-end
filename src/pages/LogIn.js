import React, { useState } from "react";
import styles from "./LogIn.module.css";
import logo from "../static/logos/qVault_var1.png";
import { useNavigate } from "react-router-dom";
import useBodyClass from "./useBodyClass";
import tick from "../static/logos/abstract_tick.png";

const LogInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  useBodyClass(styles.LogInBody);

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleLogIn = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }
    const loginData = {
      username,
      password,
    };

    const logInURL = "https://secure-backend-qvault.com/login";

    try {
      const response = await fetch(logInURL, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
        throw new Error(errorData.msg || "An unknown error occurred.");
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      console.log("Login Success:", data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during login:", error);
      alert("Failed to log in: " + error.message);
    }
  };
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
            <h2 className={styles.header}>Log In</h2>
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
                    value={username}
                    onChange={handleInputChange(setUsername)}
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
                    value={password}
                    onChange={handleInputChange(setPassword)}
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
            <img src={tick} className={styles.tick} />
            <p className={styles.signUpHeader}>New here?</p>
            <p className={styles.signUpDescription}>
              Sign up and start learning with us!
            </p>
            <button
              className={styles.signupButton}
              onClick={() => navigate("/signup")}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;