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
  "lens-studio-beginner-beauty",
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
    <div key={index} className="text-black my-6 mx-auto">
      <div className="flex flex-col sm:flex-row mx-auto">
        <div>
          <LazyLoad height={216} offset={300}>
            <img
              src={post.image}
              alt={post.title}
              height="200"
              width="350"
              className="max-w-md w-full mx-auto sm:w-96"
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

const Section = (array, title) => {
  if (array.length === 0) return null;
  return (
    <div key={title}>
      <h2
        id={title}
        className="mono font-bold text-4xl text-red-600 text-center mt-8"
      >
        {makeTitle(title)}
      </h2>
      <div>{array.map((post, i) => Tile(post, i))}</div>
    </div>
  );
};

const PageLink = ({ title, link }) => {
  return (
    <div className="my-4 text-center">
      <a className="mono text-2xl underline" href={link}>
        {title}
      </a>
    </div>
  );
};

export default function Tutorials({ tutorialObj }) {
  const data = [
    {
      title: "Lens Studio Beginner Beauty",
      link: "tracks/lens-studio-beginner-beauty",
    },
    {
      title: "Lens Studio Beginner",
      link: "snapchat-beginner",
    },
    {
      title: "Lens Studio Intermediate",
      link: "snapchat-intermediate",
    },
    {
      title: "Lens Studio Advanced",
      link: "snapchat-advanced",
    },
    {
      title: "Spark AR Beginner",
      link: "instagram-beginner",
    },
    {
      title: "Spark AR Intermediate",
      link: "instagram-intermediate",
    },
    {
      title: "Spark AR Advanced",
      link: "instagram-advanced",
    },
  ];
  return (
    <>
      <Layout>
        <Seo
          title={"AR Bootcamp | Tutorials"}
          description={`The best place for Lens Studio and Spark AR tutorials. Are you ready to level up your augmented reality creations?`}
          path={"tutorials"}
        />
        <Container>
          <div className="text-black">
            <div className="flex flex-col  ">
              <h1 className="mono text-6xl text-center">Tutorials</h1>
              <p>{`If you want to learn how to create awesome augmented reality filters, you've come to the right place! Browse by difficulty level, or use the search bar at the top if you're looking for something specific.`}</p>
              <div>
                {data.map((d, i) => (
                  <div key={i}>{PageLink(d)}</div>
                ))}
              </div>
              <div>
                <h2 className="mono font-bold text-5xl text-red-600 text-center mt-8">
                  All Tutorials
                </h2>
                <div>{sectionOrder.map((s) => Section(tutorialObj[s], s))}</div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getPages("_tutorials");

  const tutorialObj = {
    "lens-studio-beginner-beauty": [],
    "snapchat-beginner": [],
    "snapchat-intermediate": [],
    "snapchat-advanced": [],
    "instagram-beginner": [],
    "instagram-intermediate": [],
    "instagram-advanced": [],
  };

  allPosts.forEach((p) => {
    tutorialObj[p.section].push(p);
  });

  return {
    props: { tutorialObj },
  };
}
