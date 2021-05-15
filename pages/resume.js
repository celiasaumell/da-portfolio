import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Image from "next/image";

export default function Resume() {

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-center container mt-5 pt-5 mx-auto">
        <a className="btn btn-primary mb-4" href="/resume.pdf" download >
          Download as PDF
        </a>

        <a href="/resume.pdf" className="resume mx-auto" download></a>
      </section>
    </Layout>
  );
}
