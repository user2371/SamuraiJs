import React from "react";
import styles from "./Preloader.module.css";

let Preloader = (props) => {
  return (
    <div className={styles.preloader__wrapper}>
      <div className={styles.preloader__text}>
        First request may lasted for 30-60 seconds because it is build on render
        and json-server api
        <br />
        All the next requests will work faster
      </div>
      <div className={styles.preloader}></div>
    </div>
  );
};

export default Preloader;
