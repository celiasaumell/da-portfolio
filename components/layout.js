import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Moises";
export const siteTitle = "Moises Figueroa | Data Analyst";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="My portfolio" />
        <meta name="og:title" content={siteTitle} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {home ? (
        <header className={styles.homeHeader}>
          <h1 className={utilStyles.heading2Xl}>Hi! I'm {name}</h1>
          <h2>Data Analyst</h2>
        </header>
      ) : (
        <header></header>
      )}
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
