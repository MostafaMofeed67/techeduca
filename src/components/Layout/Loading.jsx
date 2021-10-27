import React from "react";

import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className="w-full min-h-screen bg-primary flex justify-center items-center  ">
      <div className={styles.loading}>
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
