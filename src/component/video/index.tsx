import React from "react";
import styles from "./styles.module.scss";
import TestimonialOne from "@/component/assest/testemonial-one.png";
import TestimonialTwo from "@/component/assest/testemonial-two.png";
import TestimonialThree from "@/component/assest/testemonial-three.png";
import Image from "next/image";

const Video = () => {
  return (
    <>
      <div className={styles.wrapper_two}>
        <div className={styles.business}>
          <h1>Honored to serve thousands</h1>
          <p className={styles.header_txt}>
            We are proud to support thousands of Africa’s most forward-thinking
            teams. Here is what over 200 of them have to say about Splice.
          </p>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.testimonial_one}>
            <Image
              src={TestimonialOne}
              alt="Dr. Priya Sharma, CEO, Chanel"
              className={styles.testimonial_img}
            />
          </div>
          <div className={styles.testimonial_one}>
            <Image
              src={TestimonialTwo}
              alt="Dr. Priya Sharma, COO, Dior"
              className={styles.testimonial_img}
            />
          </div>
          <div className={styles.testimonial_one}>
            <Image
              src={TestimonialThree}
              alt="Dr. Priya Sharma, Creative Director, Fenty"
              className={styles.testimonial_img}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
