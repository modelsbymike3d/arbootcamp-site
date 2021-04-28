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

export default function SnapchatAdvanced({ posts }) {
  return (
    <>
      <Layout>
        <Seo
          title={"AR Bootcamp | Advanced Lens Studio"}
          description={`Now that you have a pretty solid foundation, let's move on to some more advanced lenses. Our advanced tutorials will help you become a master at Lens Studio.`}
          path={"snapchat-advanced"}
        />
        <Container>
          <div className="text-black">
            <div className="flex flex-col  ">
              <h1 className="mono text-6xl text-center">
                Advanced Lens Studio
              </h1>
              <p>{`Now that you have a pretty solid foundation, let's move on to some more advanced lenses. Our advanced tutorials will help you become a master at Lens Studio.`}</p>
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
    if (p.section.includes("snapchat-advanced")) {
      posts.push(p);
    }
  });

  return {
    props: { posts },
  };
}
