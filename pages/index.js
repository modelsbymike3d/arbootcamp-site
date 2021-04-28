import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Seo from "../components/seo";

export default function Index() {
  return (
    <>
      <Layout>
        <Seo
          title={"AR Bootcamp"}
          description={`The best place to learn augmented reality for Snapchat, Instagram, and Facebook.`}
          path={""}
        />
        <Container>
          <div className="h-screen">
            <div className="h-2/3 flex flex-col justify-center items-center">
              <h1 className="mono text-center text-6xl md:text-4xl font-bold my-6 mx-auto text-red-600">
                You can be an AR creator
              </h1>
              <p>{`Learn how to create incredible augmented reality experiences.`}</p>
              <a
                href="/tutorials"
                className="mt-8 bg-black text-white p-6 mono font-bold text-lg"
              >
                Start Learning
              </a>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
