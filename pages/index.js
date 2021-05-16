import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import utilStyles from "../styles/utils.module.sass";
const name = "Moises Figueroa";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-3 p-5 text-center text-white">
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
        <h3 className={utilStyles.headingXl}>Data Analyst</h3>
        <Link href="/portfolio">
          <a className="btn btn-primary mt-4">View Portfolio</a>
        </Link>
      </div>
      <div className="container mt-5 mx-auto">
        
        <div className="card">
          <div className="row g-0 align-items-center">
            <div className="col-lg-4 text-center">
              <img className="img-fluid pb-4 pb-lg-0" src="/images/moises.png" alt="..." />
            </div>
            <div className="col-lg-8 ">
              <div className="card-body ">
                <h5 className="card-title">Hi! I'm Moises</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
