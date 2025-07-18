import React from "react";
import styles from "./styles.module.scss";

const SimplifyTool = () => {
  return (
    <>
      <div className={styles.simplify}>
        <div className={styles.txt}>
          <h1>Simplify booking and payments</h1>
          <p>
            Accessible daily and weekly insights into your business performance.
            Including on-demand reports on your most valuable clients, staff and
            more
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
};

export default SimplifyTool;
