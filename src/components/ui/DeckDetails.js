import styles from "./DeckDetails.module.css"; // Assume you have CSS for the modal
import React, { useState, useEffect } from "react";

const DeckDetails = ({ close, itemId }) => {
//   if (!isOpen) return null;

  useEffect(() => {
    const fetchDeckDetails = async () => {
      if (!itemId) return;
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          `http://3.217.124.119/deck-details/${itemId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        // setDeckDetails(data);
      } catch (error) {
        console.error("Failed to fetch deck details:", error);
      }
    };

    fetchDeckDetails();
  }, [itemId]);

  return (
    <div className={styles.modalOverlay} onClick={close}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={close}>
          Close
        </button>

      </div>
    </div>
  );
};

export default DeckDetails;
