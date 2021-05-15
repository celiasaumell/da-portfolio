import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import TabbedNav from "../components/tabnav";
import { getSortedProjectsData } from "../lib/projects";

export default function Portfolio({ allProjectsData }) {
  var dataViz = [];
  var programming = [];
  var github = [];

  console.log(allProjectsData);
  allProjectsData.forEach((project) => {
    if (project.heading === "dataviz") {
      dataViz.push(project);
    } else if (project.heading === "programming") {
      programming.push(project);
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
      <section className="mt-5 pt-4 portfolioContainer">
        <TabbedNav />

        <div className="tab-content " id="myTabContent">
          <div
            className="container tab-pane fade show active"
            id="dataviz"
            aria-labelledby="dataviz-tab"
            role="tabpanel"
          >
            <div className="row justify-content-center">
              {dataViz.map(({ id, src, url, title, content }) => (
                <div className="col-sm-6 col-xs" key={id}>
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
            id="programming"
            aria-labelledby="programming-tab"
            role="tabpanel"
          >
            <div className="row justify-content-center">
              {programming.map(({ id, src, url, title, content }) => (
                <div className="col-sm-6 col-xs" key={id}>
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
                <div className="col-sm-6 col-xs" key={id}>
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
