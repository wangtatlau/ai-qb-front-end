import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PersonalDetails.module.css";
import useBodyClass from "./useBodyClass";
import MainSidebarLayout from "../components/layout/MainSidebarLayout";

function PersonalDetails({recordTimeStamp}) {
  useBodyClass(styles.ChangePasswordBody);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [isModified, setIsModified] = useState(false);

  const navigate = useNavigate();

  const fetchDetails = async () => {
    const detailsURL = "https://secure-backend-qvault.com/personal-details";
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(detailsURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("Failed to fetch.");

      const data = await response.json();
      setEmail(data.email);
      setUsername(data.username);
      setName(data.name);
      setUniversity(data.university);
    } catch (error) {
      console.error("Error fetching details:", error);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updateURL = "https://secure-backend-qvault.com/update-details"; // Replace with your actual API endpoint
    const token = localStorage.getItem("token");

    const userDetails = {
      email,
      username,
      name,
      university,
    };

    try {
      const response = await fetch(updateURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userDetails),
      });

      if (response.ok) {
        alert("Details updated successfully");
        console.log("Details updated successfully");
        setIsModified(false);
        handleLogout();
      } else {
        const errorData = await response.json();
        console.log(errorData);
        throw new Error(errorData.error || "An unknown error occurred.");
      }
    } catch (error) {
      console.error("Error updating details:", error.message || error);
      alert(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    alert("Please login again.");
  };

  return (
    <MainSidebarLayout>
      <div className={styles.mainContainer}>
        <div className={styles.barConainer}>
          <h3 className={styles.settings} onClick={() => {navigate("/settings"); recordTimeStamp('settings')}}>
            &lt;Settings
          </h3>
          <h2 className={styles.title}>Personal Details</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.fieldContainer}>
              <label className={styles.subtitle}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => handleInputChange(e.target.value, setEmail)}
                className={styles.field}
                required
              />
            </div>
            <div className={styles.fieldContainer}>
              <label className={styles.subtitle}>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => handleInputChange(e.target.value, setUsername)}
                className={styles.field}
                required
              />
            </div>
            <div className={styles.fieldContainer}>
              <label className={styles.subtitle}>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => handleInputChange(e.target.value, setName)}
                className={styles.field}
                required
              />
            </div>
            <div className={styles.fieldContainer}>
              <label className={styles.subtitle}>University</label>
              <select
                value={university}
                onChange={(e) =>
                  handleInputChange(e.target.value, setUniversity)
                }
                className={styles.field}
                required
              >
                <option value="King's College London">
                  King's College London
                </option>
                <option value="Other">Other</option>
              </select>
            </div>
            {isModified && (
              <button type="submit" className={styles.button}>
                Submit Changes
              </button>
            )}
          </form>
        </div>
      </div>
    </MainSidebarLayout>
  );
}

export default PersonalDetails;
