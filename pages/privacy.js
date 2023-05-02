import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Seo from "../components/seo";

export default function Index() {
  return (
    <>
      <Layout>
        <Seo
          title={"AR Bootcamp | Privacy Policy"}
          description={`We don't really have a privacy policy because we don't track you all that much.`}
          path={"privacy"}
        />
        <Container>
          <div className="h-screen">
            <div className="flex flex-col justify-center items-center">
              <h1 className="mono text-center text-6xl md:text-4xl font-bold my-6 mx-auto text-red-600">
                Privacy Policy
              </h1>

              <p>
                <span>{`We don't really have a privacy policy because we don't track you all that much. We do use `}</span>
                <a className="underline" href="https://plausible.io">
                  Plausible
                </a>
                <span>{` for website analytics, but it is cookie-free and privacy focused so we only collect basic usage statistics.`}</span>
              </p>
              <br />
              <p>
                <span>{`We recently added Cloudflare to the website and up until 10 May 2021 they place a cookie named __cfduid to help detect bots. It can in no way be used to identify you though, and soon won't be included on the site. You can `}</span>
                <a
                  href="https://blog.cloudflare.com/deprecating-cfduid-cookie/"
                  className="underline"
                >
                  read more here.
                </a>
                {` If you do see any other cloudflare cookies, it's probably because you visited their website and picked some up there. AR Bootcamp itself won't be setting them.`}
              </p>
              <br />
              <p>{`We do explicitly set a cookie to track whether or not you've consented to embedded YouTube videos. If you do consent, then YouTube will add various cookies. You can clear your cookies at any time to revoke this decision.`}</p>
              <br />
              <p>{`If you sign up for the newsletter, we do not sell nor share your personal information (in this case, your email address). We use a double opt-in process and provide an unsubscribe link in every email so you can unsubscribe at any time.`}</p>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
