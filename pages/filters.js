import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getPages } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import H1 from "../components/h1";

const Tile = (post, index) => {
  const description = post.description || post.excerpt;
  return (
    <div key={index} className="text-black my-6">
      <img src={post.image} alt={post.title} className="max-w-md" />
      <h2 className="mono text-2xl underline">
        <a href={`/filters/${post.path}`}>{post.title}</a>
      </h2>
      <div className="italic my-2">{post.date}</div>
      <p>{description}</p>
    </div>
  );
};

export default function Filters({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>AR Bootcamp Filters</title>
        </Head>
        <Container>
          <div className="text-black">
            <div className="flex flex-col  ">
              <H1 title={`Filters!`} />
              <div>{allPosts.map((post, i) => Tile(post, i))}</div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getPages("_filters");
  return {
    props: { allPosts },
  };
}
