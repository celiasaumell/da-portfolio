import Head from "next/head";
import Navigation from "./navigation";

const name = "Moises Figueroa";
export const siteTitle = "Moises Figueroa | Data Analyst";

export default function Layout({ children, home }) {
  return (
    <div>
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
          <header>
            
            
          </header>
        </div>
      ) : (
        <header></header>
      )}
      <main>{children}</main>
    </div>
  );
}
