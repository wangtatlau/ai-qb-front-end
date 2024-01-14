import React from 'react';
import DashCard from "../components/ui/DashCard";
import styles from './Dashboard.module.css';

const DashboardPage = () => {
  const cards = [
    { name: 'Browse Questions', icon: 'fa-search' },
    { name: 'Create Questions', icon: 'fa-edit' },
    { name: 'Performance', icon: 'fa-chart-line' },
    { name: 'Leaderboard', icon: 'fa-trophy' },
    { name: 'Feedback', icon: 'fa-comments' },
    { name: 'Review Past Questions', icon: 'fa-history' }
  ];

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.cardsGrid}>
        {cards.map((card, index) => (
          <DashCard key={index} name={card.name} icon={card.icon} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;