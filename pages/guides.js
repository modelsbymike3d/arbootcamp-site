import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getPages } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import H1 from "../components/h1";
import Seo from "../components/seo";

const Tile = (post, index) => {
  const description = post.description || post.excerpt;
  return (
    <div key={index} className="text-black my-12">
      <div className="flex flex-col sm:flex-row">
        <img
          src={post.image}
          alt={post.title}
          height="200px"
          className="max-w-md sm:w-96"
        />

        <div className="sm:ml-4">
          <h2 className="mono text-2xl underline">
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
      <h2 className="mono font-bold text-3xl text-center text-red-600 my-6 pt-4">
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
        <Seo
          title={"AR Bootcamp | Guides"}
          description={`Making augmented reality filters is a ton of fun, but it can be daunting when you are starting out or trying something new. Here are some handy guides to help you get started.`}
          path={"guides"}
        />
        <Container>
          <div className="text-black">
            <div className="flex flex-col  ">
              <H1 title={`Let's get started!`} />
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
