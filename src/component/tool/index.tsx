import { AppleIcon, PlayStoreIcon } from "@/component/icons/icons";
import imgOne from "@/component/assest/Group 8.svg";
import imgTwo from "@/component/assest/Group 11.svg";
import imgThree from "@/component/assest/Booking.svg";
import styles from "./styles.module.scss"
import Image from "next/image";

import React from "react";

const Tool = () => {
  return (
    <>
      <div className={styles.wrapper_Three}>
        <div className={styles.overlay}>
          <div className={styles.wrapper_txt}>
            <div className={styles.txtt}>
              <h3>More than just a salon & spa booking software</h3>
              <p>
                Splice is the all-in-one software for managing your beauty and
                wellness business. From appointment bookings to revenue growth,
                Splice has you covered.
              </p>
            </div>

            <div className={styles.linkRole}>
              <div className={styles.goggle}>
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="googlePlayButton"
                >
                  <AppleIcon />
                </a>
                <div className={styles.platform_txt}>
                  <p>GET IT ON</p>
                  <h4>Google Play</h4>
                </div>
              </div>
              <div className={styles.playstore}>
                <a
                  href="https://play.google.com/store/apps/details?id=com.yourapp.package"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PlayStoreIcon />
                </a>
                <div className={styles.platform_txt}>
                  <p>Download on the</p>
                  <h4>App Store</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.phoneImage}>
            <div className={styles.imag}>
              <Image src={imgOne} alt="one" className={styles.mobile} />
              <Image src={imgTwo} alt="two" className={styles.mobileOne} />
              <Image src={imgThree} alt="three" className={styles.mobileTwo} />
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Tool;
