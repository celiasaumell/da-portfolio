import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedProjectsData } from "../lib/projects";

export default function Portfolio({ allProjectsData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="mt-5 px-3 portfolioContainer">
        <h3 className="text-white">My portfolio</h3>
        <div className="container">
          <div className="row">
            {allProjectsData.map(({ id, src, url, title, content }) => (
              <div className="col" key={id}>
                <div className="card">
                  <img src={src} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="card-text">{content}</div>
                    <a href={url} className="btn btn-primary" target="_blank">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}
