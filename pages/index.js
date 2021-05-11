import Head from "next/head";
import Link from 'next/link'
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.sass";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}
