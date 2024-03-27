import React from "react";
import { useNavigate } from "react-router-dom";
import DashCard from "../components/ui/DashCard";
import styles from "./Dashboard.module.css";
import logo from "../static/logos/qVault_transparent.png";
import browse from "../static/logos/browse.png";
import create from "../static/logos/create.png";
import feedback from "../static/logos/feedback.png";
import performance from "../static/logos/performance.png";
import leaderboard from "../static/logos/leaderboard.png";
import review from "../static/logos/review.png";
import useBodyClass from "./useBodyClass";

const DashboardPage = () => {
  useBodyClass(styles.dashboardBody);

  const navigate = useNavigate();
  const cards = [
    { name: "Browse Questions", icon: browse, path: "/browse-question" },
    { name: "Create Questions", icon: create, path: "/create-question" },
    { name: "Performance", icon: performance, path: "/performance" },
    { name: "Leaderboard", icon: leaderboard, path: "/leaderboard" },
    { name: "Feedback", icon: feedback, path: "/feedback" },
    { name: "Review Past Questions", icon: review, path: "/review" },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/");
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.navBar}>
        <div className={styles.leftContainer}>
          <img
            className={styles.logo}
            src={logo}
            alt="Logo"
            onClick={() => navigate("/dashboard")}
          />
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.itemContainer} onClick={() => navigate("/setting")}>
            <p className={styles.navLink}>
              {" "}
              Setting{" "}
            </p>
          </div>
          <div className={styles.itemContainer} onClick={handleLogout}>
            <p className={styles.navLink}>
              {" "}
              Log out{" "}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.cardsGrid}>
        {cards.map((card, index) => (
          <DashCard
            key={index}
            name={card.name}
            icon={card.icon}
            onClick={() => handleCardClick(card.path)}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
