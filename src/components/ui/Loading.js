import React from "react";
// import ReactLoading from "react-loading";
import bg from "../../static/photos/bg.webp";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.fixbg}>
      <div className={styles.absolutebg} />
      <div className={styles.flexbg}>
        <img className={styles.image} src={bg} />
        {/* <ReactLoading
          type={"bars"}
          color={"#0055ff"}
          height={100}
          width={150}
        /> */}
        <div className={styles.container} />
        <h3 className={styles.text}>
          This might a few minutes, please do not reload.
        </h3>
      </div>
    </div>
  );
}

export default Loading;
