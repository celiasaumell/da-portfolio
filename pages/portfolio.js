import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import TabbedNav from "../components/tabnav";
import { getSortedProjectsData } from "../lib/projects";

export default function Portfolio({ allProjectsData }) {
  var dataViz = [];
  var github = [];
  
  allProjectsData.forEach((project) => {
    if (project.heading === "dataviz") {
      dataViz.push(project);
    } else if (project.heading === "github") {
      github.push(project);
    }
  });

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="py-5 mt-5">
        <TabbedNav />

        <div className="tab-content mt-5" id="myTabContent">
          <div
            className="container tab-pane fade show active"
            id="dataviz"
            aria-labelledby="dataviz-tab"
            role="tabpanel"
          >
            <div className="row justify-content-center">
              {dataViz.map(({ id, src, url, title, content }) => (
                <div className="col-md-6" key={id}>
                  <div className="card mb-5">
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
          
          <div
            className="container tab-pane fade"
            id="github"
            aria-labelledby="github-tab"
            role="tabpanel"
          >
            <div className="row justify-content-center">
              {github.map(({ id, src, url, title, content }) => (
                <div className="col-md-6" key={id}>
                  <div className="card mb-5">
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
