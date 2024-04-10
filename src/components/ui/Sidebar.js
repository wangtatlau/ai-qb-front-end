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
    { name: "Review Past Questions", path: "/saved" },
  ];

  const lowerLinks = [
    { name: "Setting", path: "/setting" },
    { name: "Log out", path: "/" },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/");
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.upperContainer}>
        <img
          className={styles.logo}
          src={logo}
          alt="Logo"
          onClick={() => navigate("/dashboard")}
        />
        <hr className={styles.divider} />
        {upperLinks.map((link, index) => (
          <div key={index} className={styles.itemContainer}>
            <p
              className={styles.listItem}
              onClick={() => handleCardClick(link.path)}
            >
              {link.name}
            </p>
            <hr className={styles.subDivider} />
          </div>
        ))}
      </div>
      <div className={styles.lowerContainer}>
        {lowerLinks.map((link, index) => (
          <React.Fragment key={index}>
            <div
              className={styles.itemContainer}
              onClick={() => link.name === "Log out" ? handleLogout() : handleCardClick(link.path)}
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