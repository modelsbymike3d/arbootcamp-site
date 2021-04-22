import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <div className="h-screen">
            <div className="h-2/3 flex flex-col justify-center items-center">
              <h1 className="color-header text-6xl text-center">
                You can be an AR creator
              </h1>
              <p>Some paragraph nonsense</p>
              <p>Some paragraph nonsense</p>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

