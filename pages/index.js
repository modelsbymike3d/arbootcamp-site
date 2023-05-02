import Parser from "rss-parser";
import YoutubeEmbed from "../components/youtube-embed";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Seo from "../components/seo";

const feedParser = new Parser();
const MAX_DISPLAY = 5;

export async function getStaticProps() {
  let videoIds = [];
  try {
    const videoFeed = await feedParser.parseURL(
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCpLVNOoqAc3cnd_QgSxoAvg"
    );

    videoIds = videoFeed.items.slice(0, MAX_DISPLAY).map((item) => {
      return { id: item.id.split(":")[2], title: item.title };
    });
  } catch (error) {
    console.log("Could not fetch youtube feed");
  }

  return { props: { videoIds } };
}

export default function Index({ videoIds }) {
  return (
    <>
      <Layout>
        <Seo
          title={"AR Bootcamp"}
          description={`The best place to learn augmented reality for Snapchat, Instagram, and Facebook.`}
          path={""}
        />
        <Container>
          <div>
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-12 pt-4 text-center mono text-red-600">{`Recent tutorials`}</h2>
            <div>
              {videoIds.map((vid) => {
                return (
                  <div key={vid.id} className="my-8">
                    <a
                      className="text-1xl md:text-2xl my-6 pt-4 underline"
                      href={`https://www.youtube.com/watch?v=${vid.id}`}
                    >
                      {vid.title}
                    </a>
                    <YoutubeEmbed videoId={vid.id} />
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
