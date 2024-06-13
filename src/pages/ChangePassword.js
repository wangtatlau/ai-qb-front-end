import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChangePassword.module.css";
import useBodyClass from "./useBodyClass";
import MainSidebarLayout from "../components/layout/MainSidebarLayout";

function ChangePassword({recordTimeStamp}) {
  useBodyClass(styles.ChangePasswordBody);
  // State to store the password inputs
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const validatePassword = (password) => {
    const isLongEnough = password.length >= 10;
    const hasNumbers = /\d/.test(password);
    const hasLetters = /[a-zA-Z]/.test(password);

    return isLongEnough && hasNumbers && hasLetters;
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setNewPassword(newPassword);
    setIsPasswordValid(validatePassword(newPassword));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!currentPassword || !newPassword || !confirmNewPassword || !isPasswordValid) {
      setErrorMessage("Please fill all fields with valid information.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setErrorMessage("New Password and Confirm New Password do not match.");
      return;
    }

    if (newPassword === currentPassword) {
      setErrorMessage("New Password cannot be the same as the Current Password.");
      return;
    }

    const loginData = {
      currentPassword,
      newPassword,
    };
    const token = localStorage.getItem("token");
    const changePasswordUrl = "http://3.217.124.119/change-password";
    try {
      const response = await fetch(changePasswordUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
        throw new Error(errorData.msg || "An unknown error occurred.");
      }

      const data = await response.json();
      alert('Password updated successfully');
      console.log("Success:", data);
      handleLogout();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to change password: " + error.message);
    }
    console.log('Change password request submitted.');

  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    alert("Please login using the new password")
  };

  return (
    <MainSidebarLayout>
      <div className={styles.mainContainer}>
        <div className={styles.barConainer}>
          <h3 className={styles.settings} onClick={() => {navigate("/settings"); recordTimeStamp('settings');}}>&lt;Settings</h3>
          <h2 className={styles.title}>Change Password</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.fieldContainer}>
              <label className={styles.subtitle}>Current Password</label>
              <input type="password" value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)} className={styles.field} required />
            </div>
            <div className={styles.fieldContainer}>
              <label className={styles.subtitle}>New Password</label>
              <input type="password" value={newPassword}
                onChange={handlePasswordChange} className={styles.field} required />
              {!isPasswordValid && (
                <p className={styles.validationError}>
                  Password must be at least 10 characters long and include both letters and numbers.
                </p>
              )}
            </div>
            <div className={styles.fieldContainer}>
              <label className={styles.subtitle}>Confirm New Password</label>
              <input type="password" value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)} className={styles.field} required />
            </div>
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}
            <div>
              <button type="submit" disabled={!isPasswordValid} className={styles.button}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </MainSidebarLayout>
  );
}

export default ChangePassword;