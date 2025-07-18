import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { resource } from "@/component/folder";
// import Resource from "@/component/resource";

const Resource = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content_div}>
          <div className={styles.content_type}>
            <h3>CONTENT TYPES</h3>
            <div className={styles.list}>
              <Link href={"/"}>
                <p>Report</p>
              </Link>
              <Link href={"/"}>
                <p>Blog</p>
              </Link>
              <Link href={"/"}>
                <p>Guide</p>
              </Link>
            </div>
          </div>
          <div className={styles.contentTwo}>
            <div className={styles.content_listing}>
              {resource.map((feat, index) => (
                <Resource key={index} {...feat} />
              ))}
              {}
            </div>
            <div className={styles.content_listing_on}>
                
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resource;
