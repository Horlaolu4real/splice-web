import React from "react";
import styles from "./styles.module.scss";

const PricingDesign = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.pricing_image}>
          <div className={styles.pricing_txt}>
            <h1>Pricing built around your business</h1>
            <p>
              Splice scales with you all the way from startup to household name
              and beyond.
            </p>
            <button>View pricing</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingDesign;
