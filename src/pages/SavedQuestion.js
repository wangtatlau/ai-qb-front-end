import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SavedQuestion.module.css";
import useBodyClass from "./useBodyClass";
import SavedDeckTable from "../components/ui/SavedDeckTable";
import BrowseTable from "../components/ui/BrowseTable";
import SavedQuestionTable from "../components/ui/SavedQuestionTable";
import MainSidebarLayout from "../components/layout/MainSidebarLayout";
import searchLogo from "../static/logos/browse.png";

function SavedQuestion() {
  useBodyClass(styles.browseQuestionBody);
  const dummyData = [
    {
      name: "Deck A",
      topic: "Anatomy",
      numberOfQuestions: 20,
      education: "A-Level",
      creator: "King's College London",
      verified: "Staff + Crowd",
    },
    {
      name: "Deck B",
      topic: "Brain and Behavior",
      numberOfQuestions: 30,
      education: "Undergrad",
      creator: "Anonymous",
      verified: "None",
    },
    {
      name: "Deck C",
      topic: "Brain and Behavior",
      numberOfQuestions: 30,
      education: "Undergrad",
      creator: "King's College London",
      verified: "None",
    },
  ];
  const dummyQuestions = [
    {
      name: "Deck A",
      topic: "Anatomy",
      question: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      name: "Deck B",
      topic: "Brain and Behavior",
      question: "Example",
    },
    {
      name: "Deck C",
      topic: "Brain and Behavior",
      question: "szildjfgnhisd",
    },
  ];

  //   useEffect(() => {
  //     // Replace this URL with the actual endpoint from which you're fetching data
  //     fetch("https://your-backend-endpoint/data")
  //       .then((response) => response.json())
  //       .then((data) => setTableData(data))
  //       .catch((error) => console.error("Error fetching data:", error));
  //   }, []);

  return (
    <MainSidebarLayout>
      <div className={styles.mainContainer}>
        <div className={styles.TableContainer}>
          <h2 className={styles.title}>Saved Decks</h2>
          <SavedDeckTable data={dummyData} />
          <br />
          <h2 className={styles.title}>My Decks</h2>
          <BrowseTable data={dummyData} />
          <br />
          <h2 className={styles.title}>Saved Questions</h2>
          <SavedQuestionTable data={dummyQuestions} />
        </div>
      </div>
    </MainSidebarLayout>
  );
}

export default SavedQuestion;
