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

  dataViz.reverse()

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="">
        <TabbedNav />

        <div className="tab-content" id="myTabContent">
          <div
            className="container tab-pane fade show active"
            id="dataviz"
            aria-labelledby="dataviz-tab"
            role="tabpanel"
          >
            <div className="row justify-content-center">
              {dataViz.map(({ id, src, url, title, content }, index) => (
                <div className="col-md-6 d-flex align-items-stretch" key={id}>
                  <div className="card w-100 mb-5">
                    <img src={src} className="card-img-top" alt="..." />
                    <div className="card-body d-flex flex-column ">
                      <h5 className="card-title fw-bold">{title}</h5>
                      <div className="card-text mb-4">{content}</div>
                      <div className="card-text mx-auto mt-auto">
                        <a
                          href={url}
                          className="btn btn-primary"
                          target="_blank"
                        >
                          View Project
                        </a>
                      </div>
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
              {github.map(({ id, src, url, title, content, presentation }) => (
                <div className="col-md-6 d-flex align-items-stretch" key={id}>
                  <div className="card w-100 mb-5">
                    <img src={src} className="card-img-top" alt="..." />
                    <div className="card-body d-flex flex-column ">
                      <h5 className="card-title fw-bold">{title}</h5>
                      <div className="card-text">{content}</div>
                      <div className="card-text mx-auto mt-auto">
                      <a
                        href={url}
                        className="mx-auto mt-2 me-2 btn btn-primary"
                        target="_blank"
                      >
                        View Project
                      </a>
                      <a href={presentation} className="mx-auto mt-2 btn btn-primary" target="_blank">
                        View Presentation
                      </a>
                      </div>
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
