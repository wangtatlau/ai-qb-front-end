import React from "react";
import { Link } from "react-router-dom";
import styles from "./QuestionNavbar.module.css";
import ReferenceTable from "./ReferenceTable";

const NavBar = ({
  toggleReference,
  isReferenceVisible,
  handleSubmitTest,
  allQuestionsRated,
}) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.leftContainer}>
        <div className={styles.referenceContainer}>
          <button className={styles.referenceButton} onClick={toggleReference}>
            Reference▼
          </button>
          {isReferenceVisible && (
            <div
              className={`${styles.referenceMenu} ${
                isReferenceVisible ? styles.referenceMenuVisible : ""
              }`}
            >
              <ReferenceTable />
            </div>
          )}
        </div>
        <div className={styles.itemContainer} onClick={() => window.open("https://bnf.nice.org.uk", "_blank", "noopener,noreferrer")}>
          <p className={styles.navLink}>BNF</p>
        </div>
        <div className={styles.itemContainer}  onClick={() => window.open("https://www.nice.org.uk", "_blank", "noopener,noreferrer")}>
          <p className={styles.navLink}>NICE</p>
        </div>
        <div
          className={styles.itemContainer}
          onClick={() => window.open("https://www.uptodate.com/contents/table-of-contents/primary-care-adult/general-medicine", "_blank", "noopener,noreferrer")}
        >
          <p className={styles.navLink}>UpToDate</p>
        </div>
      </div>
      <div className={styles.rightContainer}>
        {allQuestionsRated && ( 
          <div className={styles.submitContainer} onClick={handleSubmitTest}>
            <div className={styles.submitLink}>
              Submit & Review
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
