import React from "react";
import styles from "./styles.module.scss";
import phone from "@/component/assest/iPhone 14 Pro Max.svg";
import frame from "@/component/image/Frame 1000003438.svg";
import frame1 from "@/component/image/Frame 1000003438.svg";
import frame2 from "@/component/image/Frame 1000003438.svg";
import frame3 from "@/component/image/Frame 1000003438.svg";
import ticket from "@/component/image/Frame 626710 (2).svg";

import Image from "next/image";
import Tool from "@/component/tool";
// import { motion } from "framer-motion";

// const images: StaticImageData[] = [frame, frame1, frame2, frame3];

const Header = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1>Take your beauty business to the next level</h1>
              <p>
                Effortlessly view and manage all bookings, assign staff to open
                slots, and track appointment statuses for smooth operations.
              </p>
            </div>

            <button>Download App</button>
          </div>
        </div>
        <div className={styles.secondBackground}>
          <div className={styles.firstAd}>
            <div className={styles.imgContent}>
              <Image src={phone} alt="phone" />
            </div>
            <div className={styles.content}>
              <h3>Our all-in-one management software automates everything</h3>
              <p>
                Effortlessly view and manage all bookings, assign staff to open
                slots, and track appointment statuses for smooth operations.
              </p>
            </div>
          </div>
          <div className={styles.firstAd}>
            <div className={styles.imgContentFrame}>
              <Image src={frame} alt="one" />
              <Image src={frame1} alt="one" />
              <Image src={frame2} alt="one" />
              <Image src={frame3} alt="one" />
            </div>
            <div className={styles.content}>
              <h3>Our all-in-one management software automates everything</h3>
              <p>
                Effortlessly view and manage all bookings, assign staff to open
                slots, and track appointment statuses for smooth operations.
              </p>
            </div>
          </div>
          <div className={styles.firstAd}>
            <div className={styles.content}>
              <h3>Our all-in-one management software automates everything</h3>
              <p>
                Effortlessly view and manage all bookings, assign staff to open
                slots, and track appointment statuses for smooth operations.
              </p>
            </div>
            <div className={styles.imgContentTicket}>
              <Image src={ticket} alt="ticket" />
              <Image src={ticket} alt="ticket" />
            </div>
          </div>
          <div className={styles.firstAd}>
            <div className={styles.imgContent}>
              <Image src={phone} alt="phone" />
            </div>
            <div className={styles.content}>
              <h3>Our all-in-one management software automates everything</h3>
              <p>
                Effortlessly view and manage all bookings, assign staff to open
                slots, and track appointment statuses for smooth operations.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.wrapper_two}>
          <div className={styles.buisness}>
            <h1>Stay Organized with a Unified Appointment Calendar</h1>
            <h3>
              Effortlessly view and manage all bookings, assign staff to open
              slots, and track appointment statuses for smooth operations.
            </h3>
            <button>Download App</button>
          </div>
          <div className={styles.spliceImage}></div>
        </div>
        <div className={styles.wrapper_third}>
          <div className={styles.contact}>
            <Image src={phone} alt="phone" />
            <div className={styles.content}>
              <h3>Our all-in-one management software automates everything</h3>
              <p>
                Effortlessly view and manage all bookings, assign staff to open
                slots, and track appointment statuses for smooth operations.
              </p>
            </div>
          </div>
        </div>
        <Tool />
      </div>
    </>
  );
};

export default Header;
