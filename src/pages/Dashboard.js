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

const DashboardPage = ( {recordTimeStamp} ) => {
  useBodyClass(styles.dashboardBody);

  const navigate = useNavigate();
  const cards = [
    { name: "Browse", icon: browse, path: "/browse-question" },
    { name: "Create", icon: create, path: "/create-question" },
    { name: "Performance", icon: performance, path: "/performance" },
    { name: "Leaderboard", icon: leaderboard, path: "/leaderboard" },
    { name: "Feedback", icon: feedback, path: "/feedback" },
    { name: "Saved", icon: review, path: "/saved" },
  ];

  const handleCardClick = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/");
  };

  const openLenny = () => {
    // window.open("https://dev4458.d2fyh4r6skj06f.amplifyapp.com", "_blank", "noopener,noreferrer");
    //uncomment for it to work
  }

  const navDashboard = () => {
    recordTimeStamp('dashboard');
    navigate("/dashboard");
  }

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.navBar}>
        <div className={styles.leftContainer}>
          <img
            className={styles.logo}
            src={logo}
            alt="Logo"
            onClick={() => navDashboard()}
          />
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.itemContainer} onClick={() => {openLenny(); recordTimeStamp('lenny')}}>
            <p className={styles.lenny}>
              {" "}
              Lenny{" "}
            </p>
          </div>
          <div className={styles.itemContainer} onClick={() => {navigate("/settings"); recordTimeStamp('settings')}}>
            <p className={styles.navLink}>
              {" "}
              Settings{" "}
            </p>
          </div>
          <div className={styles.itemContainer} onClick={() => {recordTimeStamp('logout'); handleLogout();}}>
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
            onClick={() => {handleCardClick(card.path); recordTimeStamp(card.name.toLowerCase());}}
          />
        ))}
      </div>
      <h3 className={styles.note}>Our beta software does not support saving questions currently. Always take note of what you got wrong.</h3>
    </div>
  );
};

export default DashboardPage;
