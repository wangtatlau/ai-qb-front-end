import React, { useState } from "react";
import styles from "./SignUp.module.css";
import logo from "../static/logos/qVault_var1.png";
import { useNavigate } from "react-router-dom";
import useBodyClass from "./useBodyClass";
import tick from "../static/logos/abstract_tick.png";

const SignUpPage = () => {


  //setter for form fields
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };
  //Need to change when have server
  const handleSignUp = async () => {
    // Basic validation (e.g., checking for empty fields) can go here
    if (!email || !password || !username || !name || !university) {
      alert("Please fill in all fields");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    // Prepare the data for sending
    const userData = {
      email,
      username,
      name,
      university,
      password,
    };
  
    const signUpURL = "YOUR_SIGNUP_API_ENDPOINT"; // Replace with your actual sign-up API endpoint
  
    try {
      const response = await fetch(signUpURL, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          // Include other headers as required by your API
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log("Success:", data);
      navigate("/"); // Adjust the route as necessary
    } catch (error) {
      console.error("Error during sign up:", error);
      // Handle errors here, e.g., showing an error message to the user
      alert("Failed to sign up: " + error.message);
    }
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
                    onChange={handleInputChange(setEmail)}
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
                    onChange={handleInputChange(setUsername)} 
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
                    onChange={handleInputChange(setName)}
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
                    onChange={handleInputChange(setUniversity)}
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
                    onChange={handleInputChange(setPassword)}
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
                    onChange={handleInputChange(setConfirmPassword)}
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
