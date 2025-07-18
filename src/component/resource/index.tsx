import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.scss";

export interface Resource {
  img: StaticImageData | string;
  txt: string;
  para: string;
}

const Resource: React.FC<Resource> = ({ img, txt, para }) => {
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

export default Resource;
