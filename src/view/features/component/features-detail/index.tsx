import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
// import Calender from "@/component/image/section/calender.png";
// import card from "@/component/image/section/card-one.png";
import summaryOne from "@/component/image/section/summary-one.png";
import summaryTwo from "@/component/image/section/summary-two.png";
import cardOne from "@/component/image/section/card-two.png";
import cardTwo from "@/component/image/section/card-three.png";
import cardThree from "@/component/image/section/card-four.png";
import SimplifyTool from "@/component/simplify-tool";
import Tool from "@/component/tool";

const FeatureDetails = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.email_request}>
          <div className={styles.txt_height}>
            <h1>
              Everything you need to run your beauty or wellness business — in
              one place.
            </h1>
            <p>
              All-in-one booking software to grow your business in Africa. Book
              appointments, manage clients, get paid - all in one place.
            </p>
          </div>

          <div className={styles.input_field}>
            <input type="text" placeholder="Emter your Email" />
            <button>Create Account</button>
          </div>
        </div>
        <div className={styles.calender_image}></div>
        <div className={styles.txt_feature}>
          <h2>All-in-One Tools to Power Your Beauty or Wellness Business</h2>
        </div>
        <div className={styles.detail_market_field}>
          <div className={styles.detail_market_card}>
            <div className={styles.first}>
              <div className={styles.card}>
                <h3>
                  Easily manage bookings without paper, spreadsheets, or clunky
                  software.
                </h3>
                <p>
                  Say goodbye to pen and paper or clunky software - Splice
                  provides the easiest way for your customers to book
                  appointments. Accept bookings anytime.
                </p>
                <Image src={cardOne} alt="card" className={styles.card_img} />
              </div>
            </div>
            <div className={styles.second}>
              <div className={styles.card}>
                <h3>Splice makes it easy to get paid — your way.</h3>
                <p>
                  Splice makes it easy to accept payments with multiple options
                  including online payments and instant transfers. No matter
                  what payment option your customers prefer, Splice has you
                  covered.
                </p>
              </div>
              <Image src={cardOne} alt="card" className={styles.card_img} />
            </div>
            <div className={styles.third}>
              <div className={styles.card}>
                <h3>
                  Splice helps you build stronger customer relationships —
                  effortlessly.
                </h3>
                <p>
                  Splice helps you stay on top of your customer relationship.
                  With automated emails and sms, you are always in touch with
                  your customers.
                </p>
              </div>
              <Image src={cardTwo} alt="card" className={styles.card_img} />
            </div>
            <div className={styles.forth}>
              <div className={styles.card}>
                <h3>
                  Splice keeps all your client details in one place Smarter
                  client data. Better experiences. Higher retention.
                </h3>
                <p>
                  Splice centralizes customer info, preferences, and appointment
                  history, boosting retention and growth with personalized
                  experiences.
                </p>
              </div>
              <Image src={cardThree} alt="card" className={styles.card_img} />
            </div>
          </div>
        </div>
        <SimplifyTool />
        <div className={styles.grid_tool}>
          <div className={styles.card_one}>
            <div className={styles.txt_summary}>
              <h3>
                With Splice, dashboards and reports, smart decisions are just
                clicks away.
              </h3>
              <p>
                Full overview of your financials, staff, customers, and more -
                all in one place. With Splice, dashboards and reports, smart
                decisions are just clicks away.
              </p>
            </div>

            <Image src={summaryOne} alt="summary" className={styles.summary} />
          </div>
          <div className={styles.card_two}>
            <div className={styles.txt_summary}>
              <h3>
                Improve engagement, encourage return visits, and drive
                retention.
              </h3>
              <p>
                With Splice, you can build a simple loyalty program with rewards
                your customers will love. Improve engagement, encourage return
                visits, and drive retention.
              </p>
            </div>
            <Image src={summaryTwo} alt="summary" className={styles.summary} />
          </div>
        </div>
        <Tool />
      </div>
    </>
  );
};

export default FeatureDetails;
