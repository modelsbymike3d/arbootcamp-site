import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getPages } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

const Tile = (post, index) => {
  return (
    <div key={index} className="text-gray-100 my-6">
      <h2 className="text-xl underline">
        <a href={`/newsletter/${post.path}`}>{post.title}</a>
      </h2>
      <div className="italic my-2">{post.date}</div>
      <p>{post.excerpt}</p>
    </div>
  );
};

export default function Newsletter({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>AR Bootcamp Newsletter</title>
        </Head>
        <Container>
          <div className="text-gray-100">
            <div className="flex flex-col  ">
              <h1 className="color-header text-6xl text-center">
                Newsletter Archive
              </h1>
              <p>{`Stay up-to-date with augmented reality on Snapchat, Instagram, and Facebook! The AR Bootcamp newsletter is brought to you by me, Mike (aka modelsbymike3d), and I'll be sharing my tips, tricks, thoughts, and ramblings on social AR. Whether you are looking to get started with AR filters, are a seasoned professional, or you have no idea what I'm talking about, this newsletter is for you!`}</p>
              <div>{allPosts.map((post, i) => Tile(post, i))}</div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getPages("_newsletter");

  return {
    props: { allPosts },
  };
}
