import { PropsWithChildren } from "react";
import Nav from "./components/Nav";

import "./globals.css";
import styles from "./RootLayout.module.scss";

export const metadata = {
  title: {
    template: "%s | Kayla Moz Portfolio",
    default: "Kayla Moz Portfolio",
  },
  description: "The portfolio website of artist Kayla Moz.",
  openGraph: {
    title: "Kayla Moz Portfolio",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
