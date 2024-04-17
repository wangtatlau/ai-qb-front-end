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
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.upperContainer}>
        <div className={styles.logoContainer}>
          <img
            className={styles.logo}
            src={logo}
            alt="Logo"
            onClick={() => navigate("/dashboard")}
          />
        </div>
        <p className={styles.space}/>
        {upperLinks.map((link, index) => (
          <React.Fragment key={index}>
            <div
              className={styles.itemContainer}
              onClick={() => handleCardClick(link.path)}
            >
              <p className={styles.listItem}>{link.name}</p>
            </div>
            {index !== upperLinks.length - 1 && <p className={styles.space} />}
          </React.Fragment>
        ))}
      </div>
      <div className={styles.lowerContainer}>
        {lowerLinks.map((link, index) => (
          <React.Fragment key={index}>
            <div
              className={styles.itemContainer}
              onClick={() =>
                link.name === "Log out"
                  ? handleLogout()
                  : handleCardClick(link.path)
              }
            >
              <p className={styles.listItem}>{link.name}</p>
            </div>
            {index !== lowerLinks.length - 1 && <p className={styles.space}/>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
