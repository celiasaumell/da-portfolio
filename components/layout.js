import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.sass";
import utilStyles from "../styles/utils.module.sass";
import Link from "next/link";
import Navigation from "./navigation.js";

const name = "Moises Figueroa";
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
        <div>
          <Navigation />
          <header className={styles.homeHeader}>
            <div className="mt-5 pt-5">
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
              <h3 className={utilStyles.headingXl}>Data Analyst</h3>
              <button className="btn btn-primary" href="/portfolio">
                View Portfolio{" "}
              </button>
            </div>
          </header>
        </div>
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
