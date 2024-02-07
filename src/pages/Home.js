import React from "react";
import HomeNavBar from "../components/ui/HomeNavbar";
import OverviewCard from "../components/ui/OverviewCard";
import AboutCard from "../components/ui/AboutCard";
import ContactCard from "../components/ui/ContactCard";
import styles from "./Home.module.css"

const HomePage = () => {
  return (
    <div className={styles.homeBody}>
      <HomeNavBar className={styles.navbar} />
      <div className={styles.mainContainer}>
        <section id="home">
          <OverviewCard />

        </section>
        <section id="about">
          <AboutCard />

        </section>
        <section id="contact">
          <ContactCard />

        </section>
      </div>
    </div>
  );
};

export default HomePage;
