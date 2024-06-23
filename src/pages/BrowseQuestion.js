import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BrowseQuestion.module.css";
import useBodyClass from "./useBodyClass";
import BrowseTable from "../components/ui/BrowseTable";
import MainSidebarLayout from "../components/layout/MainSidebarLayout";
import searchLogo from "../static/logos/browse.png";
import DeckDetails from "../components/ui/DeckDetails";

function BrowseQuestion({recordTimeStampDeck, recordTimeStamp}) {
  useBodyClass(styles.browseQuestionBody);
  const dummyData = [
    {
      id: 1,
      name: "Deck A",
      topic: "Anatomy",
      numberOfQuestions: 20,
      education: "A-Level",
      creator: "King's College London",
      verified: "Staff + Crowd",
      useCount: 1,
      upvotes: 1,
    },
    {
      id: 2,
      name: "Deck B",
      topic: "Brain and Behavior",
      numberOfQuestions: 30,
      education: "Undergrad",
      creator: "Anonymous",
      verified: "None",
      useCount: 2,
      upvotes: 3,
    },
    {
      id: 3,
      name: "Deck C",
      topic: "Brain and Behavior",
      numberOfQuestions: 30,
      education: "Undergrad",
      creator: "King's College London",
      verified: "None",
      useCount: 0,
      upvotes: 5,
    },
  ];
  // const [filteredData, setFilteredData] = useState(dummyData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [decks, setDecks] = useState([]);
  const [filters, setFilters] = useState({
    creators: [],
    educations: [],
    topics: [],
  });
  const [selectedCreators, setSelectedCreators] = useState({});
  const [selectedEducations, setSelectedEducations] = useState({});
  const [selectedTopics, setSelectedTopics] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleRowClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Fetch filter options
  const fetchFilterOptions = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("https://secure-backend-qvault.com/filters", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data); 
      setFilters({
        creators: [...new Set(data.creator)], 
        educations: [...new Set(data.education)], 
        topics: [...new Set(data.topic)], 
      });
    } catch (error) {
      console.error("Error fetching filter options:", error);
    }
  };

  const fetchDecks = async () => {
    const token = localStorage.getItem("token");
    const url = new URL("https://secure-backend-qvault.com/decks");

    const activeCreators = Object.keys(selectedCreators).filter(
      (key) => selectedCreators[key]
    );
    const activeEducations = Object.keys(selectedEducations).filter(
      (key) => selectedEducations[key]
    );
    const activeTopics = Object.keys(selectedTopics).filter(
      (key) => selectedTopics[key]
    );

    if (activeCreators.length) {
      url.searchParams.set("creators", JSON.stringify(activeCreators));
    } else {
      url.searchParams.delete("creators");
    }

    if (activeEducations.length) {
      url.searchParams.set("educations", JSON.stringify(activeEducations));
    } else {
      url.searchParams.delete("educations");
    }

    if (activeTopics.length) {
      url.searchParams.set("topics", JSON.stringify(activeTopics));
    } else {
      url.searchParams.delete("topics");
    }

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setDecks(data);
    } catch (error) {
      console.error("Error fetching decks:", error);
    }
  };

  // Initialize filter options
  useEffect(() => {
    fetchFilterOptions();
  }, []);

  // Update decks when filters change
  useEffect(() => {
    fetchDecks();
  }, [selectedCreators, selectedEducations, selectedTopics]);

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

  const toggleTopicFilter = (topic) => {
    setSelectedTopics((prev) => ({
      ...prev,
      [topic]: !prev[topic],
    }));
  };

  // const toggleCreatorFilter = (creator) => {
  //   setSelectedCreators((prev) => ({
  //     ...prev,
  //     [creator]: !prev[creator],
  //   }));
  // };

  // const toggleEducationFilter = (education) => {
  //   setSelectedEducations((prev) => ({
  //     ...prev,
  //     [education]: !prev[education],
  //   }));
  // };
  return (
    <MainSidebarLayout>
      {modalOpen && <DeckDetails
        close={closeModal}
        itemId={selectedItem?.id}
        useCount={selectedItem?.useCount}
        recordTimeStampDeck={recordTimeStampDeck}
      />}
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          {/* <div className={styles.filterTable}>
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
            </div> */}
          <div className={styles.filterTable}>
            <div>
              <h3 className={styles.filterCategory}>Creator</h3>
              {filters.creators.map((creator) => (
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
            {/* <div className={styles.filterCategory}>
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
            </div> */}
            <div>
              <h3 className={styles.filterCategory}>Education</h3>
              {filters.educations.map((education) => (
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
            <div>
              <h3 className={styles.filterCategory}>Topic</h3>
              {filters.topics.map((topic) => (
                <label key={topic} className={styles.filterOption}>
                  <input
                    type="checkbox"
                    checked={!!selectedTopics[topic]}
                    onChange={() => toggleTopicFilter(topic)}
                  />
                  {topic}
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
                <img
                  src={searchLogo}
                  className={styles.searchLogo}
                  alt="Search"
                />
              </span>
            </form>
          </div>
          <BrowseTable data={decks} onRowClick={handleRowClick} recordTimeStamp={recordTimeStamp} recordTimeStampDeck={recordTimeStampDeck} />
        </div>
      </div>
    </MainSidebarLayout>
  );
}

export default BrowseQuestion;
