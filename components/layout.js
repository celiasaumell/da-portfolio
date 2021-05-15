import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.sass";
import utilStyles from "../styles/utils.module.sass";
import Link from "next/link";
import Navigation from "./navigation";

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
      <Navigation />
      {home ? (
        <div>
          <header className={styles.homeHeader}>
            <div className="mt-3 pt-5">
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
              <h3 className={utilStyles.headingXl}>Data Analyst</h3>
              <Link href="/portfolio">
                <a className="btn btn-primary mt-4">
                  View Portfolio
                </a>
              </Link>
            </div>
          </header>
        </div>
      ) : (
        <div></div>
      )}
      <main>{children}</main>
    </div>
  );
}
