import React from "react";
import styles from "./Preloader.module.css";

let Preloader = (props) => {
  return (
    <div className={styles.preloader__wrapper}>
      <div className={styles.preloader__text}>
        The first request may take 30–60 seconds because the API(mock-api) is deployed on
        Render and uses json-server.
        <br />
        All subsequent requests will work faster.
      </div>
      <div className={styles.preloader}></div>
    </div>
  );
};

export default Preloader;
