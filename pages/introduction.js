import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Seo from "../components/seo";

export default function Introduction() {
  return (
    <>
      <Layout>
        <Seo
          title={"AR Bootcamp | Introduction"}
          description={`What is augmented reality? In short, it is overlaying something digital over the physical world, generally through a phone screen. Snapchat is famous for its AR effects, and Instagram is focusing more on AR as well. But you've probably already been seeing augmented reality for a while.`}
          path={"introduction"}
        />
        <Container>
          <div className="h-screen">
            <div className="flex flex-col justify-center items-center">
              <h1 className="mono text-center text-6xl md:text-4xl font-bold my-6 mx-auto text-red-600">
                Introduction
              </h1>

              <p>{`What is augmented reality? In short, it is overlaying something digital over the physical world, generally through a phone screen. Snapchat is famous for its AR effects, and Instagram is focusing more on AR as well. But you've probably already been seeing augmented reality for a while. Ever watch a football game on TV? The first down line is augmented reality. It doesn't physically exist, but it gets drawn over the picture before it is sent to your TV.`}</p>

              <p>{`AR can be practical (as in the case of the first down line), but more often than not it is associated with messaging or entertainment e.g. Snapchat and Instagram. One of the exciting things about augmented reality is how open the field still is. There are lots of areas still to explore.`}</p>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
