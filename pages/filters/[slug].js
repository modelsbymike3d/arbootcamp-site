import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import AuthorSection from "../../components/author-section";
import { getPages, getFileByPath } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Seo from "../../components/seo";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Filter = ({
  name,
  author,
  author_link,
  filter_link,
  code_image,
  preview,
  description,
  index,
}) => {
  return (
    <div key={index} className="text-black mt-12 w-4/5 sm:w-2/3 mx-auto">
      <h2 className="mono text-3xl text-center text-red-600">{name}</h2>
      <img
        src={preview}
        alt={name}
        height="200"
        width="350"
        className="h-96 mx-auto w-auto my-3"
      />
      <p>{description}</p>
      <img
        src={code_image}
        alt={`Scannable code to try the ${name} filter`}
        height="200"
        width="350"
        className="mx-auto w-48 my-4"
      />
      <p className="text-center my-2">
        {`Scan or `}
        <a href={filter_link} className="underline">
          click
        </a>
        {` to use!`}
      </p>
      <a href={author_link} className="underline">
        {`View more filters from ${author}`}
        <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 ml-1 inline" />
      </a>
    </div>
  );
};

export default function FiltersPost({ post, morePosts, preview }) {
  post.extraPath = "filters";
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
              <AuthorSection {...post} />
              <PostBody
                content={post.intro}
                date={post.date}
                image={post.image}
                imageAlt={post.title}
              />
              {post.filters.map((p, i) => {
                p.index = i;
                return <Filter {...p} />;
              })}
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getFileByPath("_filters", params.slug);
  post.slug = params.slug;

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getPages("_filters");

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.path,
        },
      };
    }),
    fallback: false,
  };
}
