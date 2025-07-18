"use client";
import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import Splice from "../../../../../public/Frame 1000003095.svg";

export default function Navbar() {
  return (
    <nav className={styles.navbar_wrapper}>
      <div className={styles.navbar_container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={Splice} alt="logo" />
          </Link>
        </div>
        <div className={styles.route}>
          <ul className={styles.nav_links}>
            <li>
              <Link
                href="/how-it-work
              "
              >
                How it Works
              </Link>
            </li>
            <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link
                href="/resources
              "
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                href="Pricing
              "
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link href="Company">Company</Link>
            </li>
          </ul>

          <div className={styles.nav_buttons}>
            <Link href="/get-started">
              <button className={styles.get_started}>Get started</button>
            </Link>
            <Link href="/login">
              <button className={styles.login}>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}


