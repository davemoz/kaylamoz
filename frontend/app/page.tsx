import { Inter } from "next/font/google";

import styles from "./Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <section>Welcome to KaylaMoz.art!</section>;
}
