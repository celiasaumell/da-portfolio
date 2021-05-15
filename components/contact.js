import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "./layout";

export default function Contact({}) {
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