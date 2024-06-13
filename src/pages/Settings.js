import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Settings.module.css";
import useBodyClass from "./useBodyClass";
import MainSidebarLayout from "../components/layout/MainSidebarLayout";

function Settings({recordTimeStamp}) {
  useBodyClass(styles.SettingsBody);
  const navigate = useNavigate();
  const handleOpenInNewTab = (e) => {

    window.open("/toc", "_blank", "noopener,noreferrer");
  };
  return (
    <MainSidebarLayout>
      <div className={styles.mainContainer}>
        <div className={styles.barConainer}>
          <h2 className={styles.title}>Settings</h2>
          <div
            className={styles.bar}
            onClick={() => {navigate("/personal-details"); recordTimeStamp('personaldetails')}}
          >
            <h2>&gt; Personal Details</h2>
          </div>
          <div
            className={styles.bar}
            onClick={() => {navigate("/change-password"); recordTimeStamp('changepassword')}}
          >
            <h2>&gt; Change Password</h2>
          </div>
          <div className={styles.bar} to="/toc" onClick={() => { recordTimeStamp('toc'); handleOpenInNewTab();}}>
            <h2>&gt; Our Policy</h2>
          </div>
        </div>
      </div>
    </MainSidebarLayout>
  );
}

export default Settings;
