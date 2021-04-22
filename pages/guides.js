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
    <div key={index} className="text-gray-100 my-12">
      <div className="flex flex-col sm:flex-row">
        <img src={post.image} alt={post.title} className="max-w-md sm:w-96" />

        <div className="sm:ml-4">
          <h2 className="text-xl underline">
            <a href={`${post.path}`}>{post.title}</a>
          </h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Section = ({ platform, data }) => {
  return (
    <div>
      <h2 className="color-header text-3xl text-center my-2 pt-4">
        {platform}
      </h2>
      <div>
        {data.tutorials.map((d, i) => (
          <Tile key={i} {...d} />
        ))}
      </div>
    </div>
  );
};

export default function Blog({ guideList }) {
  return (
    <>
      <Layout>
        <Head>
          <title>AR Bootcamp Guides</title>
        </Head>
        <Container>
          <div className="text-gray-100">
            <div className="flex flex-col  ">
              <h1 className="color-header text-6xl text-center">
                Let's get started!
              </h1>
              <p>{`Making augmented reality filters is a ton of fun, but it can be daunting when you are starting out or trying something new. I've been there, so that's why I created AR Bootcamp to help you succeed! You can head on over to our tutorials to get started with Lens Studio and Spark AR, or you can scroll down to view various tutorials we've compiled from across the web.`}</p>
              <div>
                {Object.entries(guideList)
                  .sort((a, b) => {
                    return a[0].localeCompare(b[0]);
                  })
                  .map((entry, index) => {
                    return (
                      <Section
                        key={index}
                        platform={entry[0]}
                        data={entry[1]}
                      />
                    );
                  })}
              </div>

              {/* <div>{allPosts.map((post, i) => Tile(post, i))}</div> */}
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getPages("_guides");
  const guideList = {};
  allPosts.forEach((post) => {
    const { platform } = post;
    if (!guideList[platform]) {
      guideList[platform] = {};
      guideList[platform].software = post.software;
      guideList[platform].tutorials = [];
    }
    guideList[platform].tutorials.push(post);
  });

  return {
    props: { guideList },
  };
}
