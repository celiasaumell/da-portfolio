import Head from "next/head";
import Link from 'next/link'
import Layout, { siteTitle } from "../components/layout";
import Container from "react-bootstrap/Container"

export default function About() {
    return (<Layout><Container className="position-relative"><h1>Hi, I'm a data analyst passionate about... </h1></Container></Layout>)
}