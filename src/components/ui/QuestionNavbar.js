import React from 'react';
import { Link } from 'react-router-dom';
import styles from './QuestionNavbar.module.css';
import ReferenceTable from './ReferenceTable';

const NavBar = ({ toggleReference, isReferenceVisible, handleSubmitTest }) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.leftContainer}>
        <div className={styles.referenceContainer}>
          <button
            className={styles.referenceButton}
            onClick={toggleReference}
          >
            Reference▼
          </button>
          {isReferenceVisible && (
            <div
              className={`${styles.referenceMenu} ${isReferenceVisible ? styles.referenceMenuVisible : ""}`}
            >
              <ReferenceTable />
            </div>
          )}
        </div>
        <a className={styles.itemContainer} href="https://bnf.nice.org.uk">
          <p className={styles.navLink}>BNF</p>
        </a>
        <a className={styles.itemContainer} href="https://www.nice.org.uk">
          <p className={styles.navLink}>NICE</p>
        </a>
        <a className={styles.itemContainer} href="https://www.uptodate.com/contents/table-of-contents/primary-care-adult/general-medicine">
          <p className={styles.navLink}>UpToDate</p>
        </a>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.submitContainer} onClick={handleSubmitTest}>
          {/* This Link should be to your submission or review page. Update the to="#" accordingly */}
          <Link to="/submit-review" className={styles.submitLink}>Submit & Review</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
