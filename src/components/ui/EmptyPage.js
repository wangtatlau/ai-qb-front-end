import React from "react";
import MainSidebarLayout from "../layout/MainSidebarLayout";
import styles from "./EmptyPage.module.css";
import useBodyClass from "../../pages/useBodyClass";

const EmptyPage = () => {

  useBodyClass(styles.EmptyBody);
  return (
    <MainSidebarLayout>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>Currently working on it...</h1>
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3R5cXc2emQ3bXlia3pjMW1qZGFmM3l4ZnpldHRzazMxa2hoaGNmbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PkoBC2GlkLJ5yFIWtf/giphy.gif" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></img>
      </div>
    </MainSidebarLayout>
  );
};

export default EmptyPage;
