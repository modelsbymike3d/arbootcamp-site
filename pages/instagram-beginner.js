import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getPages } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import LazyLoad from "react-lazyload";
import Seo from "../components/seo";

const sectionOrder = [
  "snapchat-beginner",
  "snapchat-intermediate",
  "snapchat-advanced",
  "instagram-beginner",
  "instagram-intermediate",
  "instagram-advanced",
];

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function makeTitle(s) {
  const arr = s.split("-");
  const words = arr.map(capitalizeFirstLetter);
  return words.join(" ");
}

const Tile = (post, index) => {
  return (
    <div key={index} className="text-black my-6">
      <div className="flex flex-col sm:flex-row">
        <div>
          <LazyLoad height={216} offset={300}>
            <img
              src={post.image}
              alt={post.title}
              height="200"
              width="350"
              className="max-w-md sm:w-96"
            />
          </LazyLoad>
        </div>

        <div className="sm:ml-4">
          <h3 className="mono text-2xl underline">
            <a href={`${post.path}`}>{post.title}</a>
          </h3>
          <p>{post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default function InstagramBeginner({ posts }) {
  return (
    <>
      <Layout>
        <Seo
          title={"AR Bootcamp | Beginner Spark AR"}
          description={`Getting started with Instagram or Facebook filters and Spark AR? You've come to the right place! Our beginner level Spark AR tutorials are geared towards getting you started with the software. You can follow them in sequence or pick and choose what interests you the most.`}
          path={"instagram-beginner"}
        />
        <Container>
          <div className="text-black">
            <div className="flex flex-col  ">
              <h1 className="mono text-6xl text-center">Beginner Spark AR</h1>
              <p>{`Getting started with Instagram or Facebook filters and Spark AR? You've come to the right place! Our beginner level Spark AR tutorials are geared towards getting you started with the software. You can follow them in sequence or pick and choose what interests you the most.`}</p>
              <div>{posts.map((p, i) => Tile(p, i))}</div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getPages("_tutorials");

  const posts = [];

  allPosts.forEach((p) => {
    if (p.section.includes("instagram-beginner")) {
      posts.push(p);
    }
  });

  return {
    props: { posts },
  };
}
