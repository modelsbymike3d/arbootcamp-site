import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../components/container";
import PostBody from "../components/post-body";
import Header from "../components/header";
import PostHeader from "../components/post-header";
import Layout from "../components/layout";
import AuthorSection from "../components/author-section";
import { getPages, getFileByPath } from "../lib/api";
import PostTitle from "../components/post-title";
import Seo from "../components/seo";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import markdownToHtml from "../lib/markdownToHtml";

const Version = ({ software, software_version }) => {
  return (
    <div className="max-w-2xl mx-auto text-gray-600 flex sm:flex-row flex-col mb-4 italic">
      Tutorial created using {software} {software_version}
    </div>
  );
};

export default function TutorialPost({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Seo {...post} />
              {/* <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              /> */}
              <PostTitle>{post.title}</PostTitle>
              {post.type === "tutorial" ? <AuthorSection {...post} /> : null}
              {post.software && post.software_version ? (
                <Version {...post} />
              ) : null}
              <PostBody
                content={post.content}
                date={post.date}
                image={post.image}
                imageAlt={post.title}
                type={post.type}
              />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const guide = getFileByPath("_guides", params.slug);
  const tutorial = getFileByPath("_tutorials", params.slug);

  const post = guide ? guide : tutorial;
  post.slug = params.slug;
  post.type = guide ? "guide" : "tutorial";
  post.contributor = post.author || "";
  post.contributor_site = post.homepage || "";
  post.contributor_snapchat = post.snapchat || "";
  post.contributor_instagram = post.instagram || "";
  post.contributor_twitter = post.twitter || "";
  post.contributor_youtube = post.youtube || "";
  post.contributor_facebook = post.facebook || "";
  post.contributor_linkedin = post.linkedin || "";

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getPages("_guides");
  const tutorials = getPages("_tutorials");
  const labeledTutorials = tutorials.map((t) => {
    return { ...t, type: "tutorial" };
  });

  const all = [...posts, ...labeledTutorials];

  return {
    paths: all.map((post) => {
      return {
        params: {
          slug: post.path.split("/"),
        },
      };
    }),
    fallback: false,
  };
}
