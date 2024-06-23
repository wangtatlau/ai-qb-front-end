import React, { useState } from "react";
import styles from "./Feedback.module.css";
import MainSidebarLayout from "../components/layout/MainSidebarLayout";
import useBodyClass from "./useBodyClass";

const Feedback = ({ recordTimeStamp }) => {
  const [feedback, setFeedback] = useState("");

  const handleInputChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!feedback) {
        return;
    }
    const feedbackURL = "https://secure-backend-qvault.com/feedback";
    const token = localStorage.getItem("token");
    try {
        const response = await fetch(feedbackURL, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(feedback),
        });

        if (!response.ok) throw new Error("Failed to fetch.");
        const data = await response.json();
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    console.log("Feedback submitted:", feedback);
    alert("Thank you for your feedback!");
    setFeedback("");
  };

  useBodyClass(styles.feedbackBody);

  return (
    <MainSidebarLayout>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>Feedback</h1>
        <p className={styles.info}>Please submit your feedback here or email team@qvault.ai</p>
        <form onSubmit={handleSubmit} className={styles.feedbackForm}>
          <textarea
            value={feedback}
            onChange={handleInputChange}
            className={styles.textarea}
            placeholder="Write your feedback here..."
          />
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </MainSidebarLayout>
  );
};

export default Feedback;