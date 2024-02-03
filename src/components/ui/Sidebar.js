import React from "react";
import styles from "./Sidebar.module.css";
import logo from "../../static/logos/qVault_transparent.png";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const upperLinks = [
    { name: "Browse Questions", path: "/browse-question" },
    { name: "Create Questions", path: "/create-question" },
    { name: "Performance", path: "/performance" },
    { name: "Leaderboard", path: "/leaderboard" },
    { name: "Feedback", path: "/feedback" },
    { name: "Review Past Questions", path: "/review" },
  ];

  const lowerLinks = [
    { name: "Setting", path: "/setting" },
    { name: "Log out", path: "/log-out" },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.sidebar}>
      <img
        className={styles.logo}
        src={logo}
        alt="Logo"
        onClick={() => navigate("/dashboard")}
      />
      <hr className={styles.divider} />
      <div>
        {upperLinks.map((link, index) => (
          <div>
            <div key={index} className={styles.itemContainer}>
              <p
                className={styles.listItem}
                onClick={() => handleCardClick(link.path)}
              >
                {link.name}
              </p>
            </div>
            <hr className={styles.subDivider} />
          </div>
        ))}
      </div>
      <div className={styles.lowerContainer}>
        {lowerLinks.map((link, index) => (
          <React.Fragment key={index}>
            <div
              className={styles.itemContainer}
              onClick={() => handleCardClick(link.path)}
            >
              <p className={styles.listItem}>{link.name}</p>
            </div>
            {index !== lowerLinks.length - 1 && (
              <hr className={styles.subDivider} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
