import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BrowseQuestion.module.css";
import useBodyClass from "./useBodyClass";
import BrowseTable from "../components/ui/BrowseTable";
import MainSidebarLayout from "../components/layout/MainSidebarLayout";
import searchLogo from "../static/logos/browse.png";

function BrowseQuestion() {
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
  const [filteredData, setFilteredData] = useState(dummyData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Extract unique creators and educations for filters
  const uniqueCreators = Array.from(
    new Set(dummyData.map((item) => item.creator))
  );
  const uniqueEducations = Array.from(
    new Set(dummyData.map((item) => item.education))
  );

  // State to track which filters are selected
  const [selectedCreators, setSelectedCreators] = useState({});
  const [selectedEducations, setSelectedEducations] = useState({});

  const toggleCreatorFilter = (creator) => {
    setSelectedCreators((prev) => ({
      ...prev,
      [creator]: !prev[creator],
    }));
  };

  const toggleEducationFilter = (education) => {
    setSelectedEducations((prev) => ({
      ...prev,
      [education]: !prev[education],
    }));
  };

  // Update filtered data when filters change
  useEffect(() => {
    let updatedData = dummyData;

    const activeCreators = Object.keys(selectedCreators).filter(
      (creator) => selectedCreators[creator]
    );
    if (activeCreators.length) {
      updatedData = updatedData.filter((deck) =>
        activeCreators.includes(deck.creator)
      );
    }

    const activeEducations = Object.keys(selectedEducations).filter(
      (education) => selectedEducations[education]
    );
    if (activeEducations.length) {
      updatedData = updatedData.filter((deck) =>
        activeEducations.includes(deck.education)
      );
    }

    setFilteredData(updatedData);
  }, [selectedCreators, selectedEducations]);

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
        <div className={styles.leftContainer}>
          <div className={styles.filterTable}>
            <div>
              <h3 className={styles.filterCategory}>Creator</h3>
              {uniqueCreators.map((creator) => (
                <label key={creator} className={styles.filterOption}>
                  <input
                    type="checkbox"
                    checked={!!selectedCreators[creator]}
                    onChange={() => toggleCreatorFilter(creator)}
                  />
                  {creator}
                </label>
              ))}
            </div>
            <div className={styles.filterCategory}>
              <h3>Education</h3>
              {uniqueEducations.map((education) => (
                <label key={education} className={styles.filterOption}>
                  <input
                    type="checkbox"
                    checked={!!selectedEducations[education]}
                    onChange={() => toggleEducationFilter(education)}
                  />
                  {education}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.row}>
            <form className={styles.searchForm}>
              <input
                type="search"
                required
                value={searchTerm}
                onChange={handleSearchChange}
                className={styles.searchInput}
              />
                  <span className={styles.searchIcon}>
                      <img src={searchLogo} className={styles.searchLogo} alt="Search" />
                  </span>
            </form>
          </div>
          <BrowseTable data={filteredData} />
        </div>
      </div>
    </MainSidebarLayout>
  );
}

export default BrowseQuestion;
