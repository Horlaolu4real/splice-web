import React from "react";
import styles from "./styling.module.scss";
import footerLogo from "@/component/assest/Group 28.svg";
import Image from "next/image";
import { LetterIcon } from "@/component/icons/icons";

const Footer = () => {
  return (
    <>
      <div className={styles.wrapperFooter}>
        <div className={styles.spacing}>
          <div className={styles.top}>
            <div className={styles.content}>
              <div className={styles.headerFooter}>
                <Image src={footerLogo} alt="logo" />
                <p>
                  All-in-one booking, payments and business management solution
                  for Africa.
                </p>
              </div>
              <div className={styles.bottomFooter}>
                <LetterIcon />
                <p>info@withsplice.com</p>
              </div>
            </div>
            <div className={styles.second}>
              <div className={styles.topContent}>
                <h4>Company</h4>
                <ul className={styles.company}>
                  <li>Benefits</li>
                  <li>Why Splice?</li>
                  <li>Resources</li>
                  <li>Testimonials</li>
                  <li>December rush quiz⚡️</li>
                </ul>
              </div>
              <div className={styles.topContent}>
                <h4>Legal</h4>
                <ul className={styles.legal}>
                  <li>Terms of condition</li>
                  <li>Privacy policy</li>
                </ul>
              </div>
              <div className={styles.topContent}>
                <h4>Legal</h4>
                <ul className={styles.social}>
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.bottom}>
            <p>© 2025. All rights reserved. Splice</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
