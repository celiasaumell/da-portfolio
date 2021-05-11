import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";

export default function About({}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
    </Layout>
  );
}
