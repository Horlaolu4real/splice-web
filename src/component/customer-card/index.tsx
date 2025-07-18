import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.scss";

export interface Product {
  icon: StaticImageData | string;
  txt: string;
  user: StaticImageData | string;
  doctor: string;
  ceo: string;
}

const Category: React.FC<Product> = ({ icon, txt, user, doctor, ceo }) => {
  return (
    <>
      <div className={styles.tag}>
        <Image src={icon} alt="feat" />
        <p>{txt}</p>
        <div className={styles.bottomContent}>
          <div className={styles.imageCover}>
            <Image src={user} alt="feat" className={styles.user} />
          </div>

          <div className={styles.align}>
            <h4>{doctor}</h4>
            <h5>{ceo}</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
