import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.scss";

export interface Listing {
  image: StaticImageData | string;
  description: string;
  txt: string;
}

const Listing: React.FC<Listing> = ({ image, description, txt }) => {
  return (
    <>
      <div>
        <div className={styles.wrapper}>
          <Image src={image} alt="res" className={styles.results} />
          <div className={styles.row}>
            <h4>{description}</h4>
            <p>{txt}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
