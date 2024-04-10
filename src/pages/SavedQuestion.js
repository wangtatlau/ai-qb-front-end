import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SavedQuestion.module.css";
import useBodyClass from "./useBodyClass";
import SavedDeckTable from "../components/ui/SavedDeckTable";
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
          <SavedDeckTable data={dummyData} />
        </div>
      </div>
    </MainSidebarLayout>
  );
}

export default SavedQuestion;
