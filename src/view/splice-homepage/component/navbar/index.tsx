// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import styles from "./styles.module.scss";
// import Image from "next/image";
// import Splice from "../../../../../public/Frame 1000003095.svg";
// import { FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className={styles.navbar_wrapper}>
//       <div className={styles.navbar_container}>
//         <div className={styles.logo}>
//           <Link href="/">
//             <Image src={Splice} alt="logo" />
//           </Link>
//         </div>

//         {!menuOpen && (
//           <button
//             className={styles.hamburger}
//             onClick={() => setMenuOpen(true)}
//             aria-label="Open menu"
//           >
//             <FaBars />
//           </button>
//         )}
//         <div className={`${styles.route} ${menuOpen ? styles.menu_open : ""}`}>
//           {menuOpen && (
//             <button
//               className={styles.close}
//               onClick={() => setMenuOpen(false)}
//               aria-label="Close menu"
//             >
//               <FaTimes />
//             </button>
//           )}
//           <ul className={styles.nav_links}>
//             <li>
//               <Link href="/how-it-work">How it Works</Link>
//             </li>
//             <li>
//               <Link href="/features">Features</Link>
//             </li>
//             <li>
//               <Link href="/resources">Resources</Link>
//             </li>
//             <li>
//               <Link href="/pricing">Pricing</Link>
//             </li>
//             <li>
//               <Link href="/company">Company</Link>
//             </li>
//           </ul>
//           <div className={styles.nav_buttons}>
//             <Link href="/get-started">
//               <button className={styles.get_started}>Get started</button>
//             </Link>
//             <Link href="/login">
//               <button className={styles.login}>Login</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import Image from "next/image";
import Splice from "../../../../../public/Frame 1000003095.svg";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/how-it-work", label: "How it Works" },
    { href: "/features", label: "Features" },
    { href: "/resources", label: "Resources" },
    { href: "/pricing", label: "Pricing" },
    { href: "/company", label: "Company" },
  ];

  return (
    <nav className={styles.navbar_wrapper}>
      <div className={styles.navbar_container}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={Splice} alt="logo" />
          </Link>
        </div>
        {!menuOpen && (
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        )}
        <div className={`${styles.route} ${menuOpen ? styles.menu_open : ""}`}>
          {menuOpen && (
            <button
              className={styles.close}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          )}
          <ul className={styles.nav_links}>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className={pathname === link.href ? styles.active : ""}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
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
