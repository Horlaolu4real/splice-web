import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { resource } from "@/component/folder";
import ResourceCard from "@/component/resource";
import { listing } from "@/component/folder";
import ListingCard from "@/component/listing";
import Tool from "@/component/tool";

const SpliceResource = () => {
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
                <ResourceCard key={index} {...feat} />
              ))}
              {}
            </div>
            <div className={styles.content_listing_on}>
              {listing.map((feat, index) => (
                <ListingCard key={index} {...feat} />
              ))}
            </div>
          </div>
        </div>
        <Tool />
      </div>
    </>
  );
};

export default SpliceResource;
