import React from 'react';
import Sidebar from '../../components/ui/Sidebar';
import styles from './MainSidebarLayout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layoutContainer}>
      <Sidebar />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
