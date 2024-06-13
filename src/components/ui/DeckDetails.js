import styles from "./DeckDetails.module.css"; // Assume you have CSS for the modal
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DeckDetails = ({ close, itemId, useCount, recordTimeStampDeck }) => {
  //   if (!isOpen) return null;
  const navigate = useNavigate();
  const [deckDetails, setDeckDetails] = useState({
    deckName: "Name",
    creator: "author",
    upvotes: 0,
    description: "This deck has no description",
    university: "uni",
  });

  useEffect(() => {
    const fetchDeckDetails = async () => {
      if (!itemId) return; // Return early if no itemId is provided
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
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        console.log(data);
        setDeckDetails({
          deckName: data.name,
          creator: data.creator,
          upvotes: data.upvotes,
          description: data.description,
          university: data.university,
        });
      } catch (error) {
        console.error("Failed to fetch deck details:", error);
      }
    };

    fetchDeckDetails();
  }, [itemId]);

  const startDeck = async () => {
    recordTimeStampDeck(itemId, 'startdeck')
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(`http://3.217.124.119/start-deck/${itemId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("Failed to start deck session");
      const data = await response.json();
      // console.log("Deck session started:", result);
      navigate("/question", { state: { questionStack: data.questionStack, deckId: data.deckId } });
    } catch (error) {
      console.error("Error starting deck:", error);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={close}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.mainContent}>
          <button className={styles.closeButton} onClick={close}>
            ✕
          </button>
          <div>
            <h2 className={styles.title}>{deckDetails.deckName}</h2>
          </div>
          <div>
            <h4 className={styles.subtitle}>By {deckDetails.creator}</h4>
          </div>
          <div className={styles.horizontal}>
            <div className={styles.verticalOne}>
              <h4 className={styles.subtitle}>Upvotes</h4>
              <h4 className={styles.subtitle}>{deckDetails.upvotes}</h4>
            </div>
            <div className={styles.verticalTwo}>
              <h4 className={styles.subtitle}>Used by</h4>
              <h4 className={styles.subtitle}>{useCount} People</h4>
            </div>
            <div className={styles.verticalThree}>
              <h4 className={styles.subtitle}>Creator's University</h4>
              <h4 className={styles.subtitle}>{deckDetails.university}</h4>
            </div>
          </div>
          <div>
            <h4 className={styles.description}>{deckDetails.description}</h4>
          </div>
          <button className={styles.start} onClick={startDeck}>Start</button>
        </div>
      </div>
    </div>
  );
};

export default DeckDetails;
