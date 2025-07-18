import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { ResourceProps } from "../folder";


const ResourceCard: React.FC<ResourceProps> = ({ img, txt, para }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Image src={img} alt="resource" className={styles.image} />
        <div className={styles.text_div}>
          <h3>{txt}</h3>
          <p>{para}</p>
        </div>
      </div>
    </>
  );
};

export default ResourceCard;
