import React, { useState, useEffect } from "react";
import styles from "./ChangePassword.module.css";
import useBodyClass from "./useBodyClass";
import MainSidebarLayout from "../components/layout/MainSidebarLayout";

function ChangePassword() {
  useBodyClass(styles.ChangePasswordBody);
  // State to store the password inputs
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleSubmit = (event) => {
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

    // API call logic or other password change handling can go here
    console.log('Change password request submitted.'); // Placeholder for actual API call
  };

  return (
    <MainSidebarLayout>
      <div className={styles.mainContainer}>
        <div className={styles.barConainer}>
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