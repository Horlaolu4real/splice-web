import React from "react";
import styles from "./styles.module.scss";
import Video from "@/component/video";
import { buisness } from "@/component/folder";
import { categories } from "@/component/folder";
// import Image from "next/image";
import Card from "@/component/card";
import Category from "@/component/customer-card";

import Tool from "@/component/tool";

const CustomerDocument = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Video />
        <div className={styles.tags}>
          {buisness.map((feat, index) => (
            <Card key={index} {...feat} />
          ))}
        </div>
        <div className={styles.video_respons}></div>
        <div className={styles.category_tag}>
          {categories.map((feat, index) => (
            <Category key={index} {...feat} />
          ))}
        </div>
        <Tool />
      </div>
    </>
  );
};

export default CustomerDocument;
