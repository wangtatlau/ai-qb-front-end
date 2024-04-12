import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Setting.module.css";
import useBodyClass from "./useBodyClass";
import MainSidebarLayout from "../components/layout/MainSidebarLayout";

function Setting() {
  useBodyClass(styles.SettingBody);
  const navigate = useNavigate();
  const handleOpenInNewTab = (e) => {
    e.preventDefault();
    window.open("/toc", "_blank", "noopener,noreferrer");
  };
  return (
    <MainSidebarLayout>
      <div className={styles.mainContainer}>
        <div className={styles.barConainer}>
          <h2 className={styles.title}>Setting</h2>
          <div
            className={styles.bar}
            onClick={() => navigate("/personal-details")}
          >
            <h2>&gt; Personal Details</h2>
          </div>
          <div
            className={styles.bar}
            onClick={() => navigate("/change-password")}
          >
            <h2>&gt; Change Password</h2>
          </div>
          <div className={styles.bar} to="/toc" onClick={handleOpenInNewTab}>
            <h2>&gt; Our Policy</h2>
          </div>
        </div>
      </div>
    </MainSidebarLayout>
  );
}

export default Setting;
