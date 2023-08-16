import Link from "next/link";

import styles from "./Nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <Link href="/">Kayla Moz</Link>
      </div>
      <div className={styles.links}>
        <Link href={"/work"}>Work</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </nav>
  );
}
