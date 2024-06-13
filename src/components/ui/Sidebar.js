import React from "react";
import styles from "./Sidebar.module.css";
import logo from "../../static/logos/qVault_transparent.png";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const upperLinks = [
    { name: "Browse", path: "/browse-question" },
    { name: "Create", path: "/create-question" },
    { name: "Performance", path: "/performance" },
    { name: "Leaderboard", path: "/leaderboard" },
    { name: "Feedback", path: "/feedback" },
    { name: "Saved", path: "/saved" },
  ];

  const lowerLinks = [
    { name: "Settings", path: "/settings" },
    { name: "Log out", path: "/" },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    recordTimeStamp("logout");
    localStorage.removeItem("token");
    navigate("/");
  };

  const openLenny = () => {
    // window.open("https://dev4458.d2fyh4r6skj06f.amplifyapp.com", "_blank", "noopener,noreferrer");
    //uncomment for it to work
  };

  const recordTimeStamp = async (buttonId) => {
    const timestamp = new Date().toISOString();
    const data = { buttonId, timestamp };
    const token = localStorage.getItem("token");
    console.log(data);
    try {
      const response = await fetch("http://3.217.124.119/general-button", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Success:");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.upperContainer}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logo}
            src={logo}
            alt="Logo"
            onClick={() => {
              navigate("/dashboard");
              recordTimeStamp("dashboard");
            }}
          />
        </div>
        <p className={styles.space} />
        {upperLinks.map((link, index) => (
          <React.Fragment key={index}>
            <div
              className={styles.itemContainer}
              onClick={
                link.name === "Browse"
                  ? () => {
                      handleCardClick(link.path);
                      recordTimeStamp(link.name.toLowerCase());
                    }
                  : undefined
              }
            >
              <p
                className={
                  link.name !== "Browse" ? styles.lenny : styles.listItem
                }
              >
                {link.name}
              </p>
            </div>
            {index !== upperLinks.length && <p className={styles.space} />}
          </React.Fragment>
        ))}
        <React.Fragment>
          <div
            className={styles.itemContainer}
            onClick={() => {
              openLenny();
              recordTimeStamp("lenny");
            }}
          >
            <p className={styles.lenny}>Lenny</p>
          </div>
        </React.Fragment>
      </div>
      <div className={styles.lowerContainer}>
        {lowerLinks.map((link, index) => (
          <React.Fragment key={index}>
            <div
              className={styles.itemContainer}
              onClick={() => {
                if (link.name === "Log out") {
                  handleLogout();
                } else {
                  handleCardClick(link.path);
                  recordTimeStamp(link.name.toLowerCase());
                }
              }}
            >
              <p className={styles.listItem}>{link.name}</p>
            </div>
            {index !== lowerLinks.length - 1 && <p className={styles.space} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
