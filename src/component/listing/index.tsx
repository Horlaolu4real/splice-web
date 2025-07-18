import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { ListingProps } from "../folder";

const ListingCard: React.FC<ListingProps> = ({ image, description, txt }) => {
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

export default ListingCard;
