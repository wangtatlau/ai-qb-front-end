import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PersonalDetails.module.css";
import useBodyClass from "./useBodyClass";
import MainSidebarLayout from "../components/layout/MainSidebarLayout";

function PersonalDetails() {
  useBodyClass(styles.ChangePasswordBody);

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');
  const [isModified, setIsModified] = useState(false);

  const navigate = useNavigate();

  const fetchDetails = async () => {
    // Example URL, change to your actual API endpoint
    const detailsURL = "URLHERE";

    try {
      const response = await fetch(detailsURL);
      if (!response.ok) throw new Error('Failed to fetch.');

      const data = await response.json();
      setEmail(data.email);
      setUsername(data.username);
      setName(data.name);
      setUniversity(data.university);
    } catch (error) {
      console.error('Error fetching details:', error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  // Function to check if details have been modified
  const handleInputChange = (value, setter) => {
    setter(value);
    setIsModified(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Change details request submitted.'); // Placeholder for actual API call
  };

  return (
    <MainSidebarLayout>
      <div className={styles.mainContainer}>
        <div className={styles.barConainer}>
        <h3 className={styles.setting} onClick={() => navigate("/setting")}>&lt;Setting</h3>
          <h2 className={styles.title}>Personal Details</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.fieldContainer}>
              <label className={styles.subtitle}>Email</label>
              <input type="email" value={email}
                onChange={(e) => handleInputChange(e.target.value, setEmail)} className={styles.field} required />
            </div>
            <div className={styles.fieldContainer}>
              <label className={styles.subtitle}>Username</label>
              <input type="text" value={username}
                onChange={(e) => handleInputChange(e.target.value, setUsername)} className={styles.field} required />
            </div>
            <div className={styles.fieldContainer}>
              <label className={styles.subtitle}>Name</label>
              <input type="text" value={name}
                onChange={(e) => handleInputChange(e.target.value, setName)} className={styles.field} required />
            </div>
            <div className={styles.fieldContainer}>
              <label className={styles.subtitle}>University</label>
              <input type="text" value={university}
                onChange={(e) => handleInputChange(e.target.value, setUniversity)} className={styles.field} required />
            </div>
            {isModified && (
              <button type="submit" className={styles.button}>Submit Changes</button>
            )}
          </form>
        </div>
      </div>
    </MainSidebarLayout>
  );
}

export default PersonalDetails;