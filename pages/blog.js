import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getPages } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

const Tile = (post, index) => {
  const description = post.description || post.excerpt;
  return (
    <div key={index} className="text-gray-100 my-6">
      <img src={post.image} alt={post.title} className="max-w-md" />
      <h2 className="text-xl underline">
        <a href={`/blog/${post.path}`}>{post.title}</a>
      </h2>
      <div className="italic my-2">{post.date}</div>
      <p>{description}</p>
    </div>
  );
};

export default function Blog({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>AR Bootcamp Blog</title>
        </Head>
        <Container>
          <div className="text-gray-100">
            <div className="flex flex-col  ">
              <h1 className="color-header text-6xl text-center">Blog</h1>
              <div>{allPosts.map((post, i) => Tile(post, i))}</div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getPages("_blog");

  return {
    props: { allPosts },
  };
}
