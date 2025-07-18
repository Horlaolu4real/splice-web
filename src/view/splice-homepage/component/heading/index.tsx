import React from "react";
import styles from "./styles.module.scss";
// import HeaderImage from "@/component/assest/Image_fx (1) 1.svg";
import Image from "next/image";
import ImageFour from "@/component/assest/Frame 627469.svg";
import ImageTwo from "@/component/assest/Frame 627470.svg";
import ImageThree from "@/component/assest/Frame 627468.svg";
import ImageOne from "@/component/assest/Frame 627495.svg";
import BrandOne from "@/component/assest/Frame 627493.svg";
import BrandTwo from "@/component/assest/Frame 627494.svg";
import Testemonial from "@/component/assest/testemonial-one.png";
import TestemonialTwo from "@/component/assest/testemonial-two.png";
import TestemonialTree from "@/component/assest/testemonial-three.png";
import Tool from "@/component/tool";
// import BlockImage from "@/component/assest/Advert-img.png";

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.download}>
            <h1>Take your beauty business to the next level</h1>
            <button>Download App</button>
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
        <div className={styles.wrapper_two}>
          <div className={styles.buisness}>
            <h1>
              Africa all-in-one booking, payment & business management solution
            </h1>
            <h3>
              All-in-one booking software to grow your business in Africa. Book
              appointments, manage clients, get paid - all in one place.
            </h3>
            <button>Get Started</button>
          </div>
          <div className={styles.spliceVideo}></div>
        </div>
        <div className={styles.wrapper_two}>
          <div className={styles.buisness}>
            <h1>Our all-in-one management software automates everything</h1>
            <h3>
              Effortlessly view and manage all bookings, assign staff to open
              slots, and track appointment statuses for smooth operations.
            </h3>
          </div>
          <div className={styles.gridImage}>
            <div className={styles.flx_one}>
              <Image src={ImageOne} alt="one" className={styles.img_one} />
              <Image src={ImageTwo} alt="one" className={styles.img_two} />
            </div>
            <div className={styles.flx_two}>
              <Image src={ImageThree} alt="one" className={styles.img_four} />
              <Image src={ImageFour} alt="one" className={styles.img_three} />
            </div>
          </div>
        </div>
        <div className={styles.wrapper_two}>
          <div className={styles.buisness}>
            <h1>More than just a salon & spa booking software</h1>
            <h3>
              Splice is the all-in-one software for managing your beauty and
              wellness business. From appointment bookings to revenue growth,
              Splice has you covered.
            </h3>
          </div>
          <div className={styles.simplify}>
            <div className={styles.txt}>
              <h1>Simplify booking and payments</h1>
              <p>
                Accessible daily and weekly insights into your business
                performance. Including on-demand reports on your most valuable
                clients, staff and more
              </p>
              <button>Get Started</button>
            </div>
          </div>
          <div className={styles.brand_flx}>
            <div className={styles.imageContainer}>
              <Image src={BrandOne} alt="one" className={styles.one} />
            </div>
            <div className={styles.imageContainer}>
              <Image src={BrandTwo} alt="two" className={styles.two} />
            </div>
          </div>
        </div>
        <div className={styles.wrapper_two}>
          <div className={styles.buisness}>
            <h1>What Our Client Says</h1>
            <p className={styles.header_txt}>
              See how Splice has transformed businesses. Here’s what our clients
              have to say.
            </p>
          </div>
          <div className={styles.testemonial}>
            <div className={styles.testemonial_one}>
              <Image
                src={Testemonial}
                alt="alt"
                className={styles.testimonial}
              />
              <div className={styles.header}>
                <div className={styles.topHeader}>
                  <h4>Dr. Priya Sharma</h4>
                  <p>CEO, Chanel</p>
                </div>

                <h3>
                  A game-changer for my business. Thank you for your expertise!
                  The guidance and strategies provided by this team have
                  transformed my business into a thriving success.
                </h3>
              </div>
            </div>
            <div className={styles.testemonial_one}>
              <Image
                src={TestemonialTwo}
                alt="alt"
                className={styles.testimonial}
              />
              <div className={styles.header}>
                <div className={styles.topHeader}>
                  <h4>Dr. Priya Sharma</h4>
                  <p>COO, Dior</p>
                </div>

                <h3>
                  Exceptional service! I could not be happier with the results.
                  The team went above and beyond to meet my needs and deliver
                  outstanding outcomes. I felt valued as a customer
                </h3>
              </div>
            </div>
            <div className={styles.testemonial_one}>
              <Image
                src={TestemonialTree}
                alt="alt"
                className={styles.testimonial}
              />
              <div className={styles.header}>
                <div className={styles.topHeader}>
                  <h4>Dr. Priya Sharma</h4>
                  <p>Creative Director, Fenty</p>
                </div>

                <h3>
                  Outstanding customer support! They went above and beyond to
                  help me resolve my issue. I felt valued as a customer, and
                  their commitment to ensuring my satisfaction left a lasting
                  impression.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <Tool />
      </div>
    </>
  );
};

export default Header;
