import Container from "../../components/container";
import Layout from "../../components/layout";
import { getPages } from "../../lib/api";
import LazyLoad from "react-lazyload";
import Seo from "../../components/seo";

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
            <a href={`../${post.path}`}>{post.title}</a>
          </h3>
          <p>{post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default function Track({ posts }) {
  return (
    <>
      <Layout>
        <Seo
          title={"AR Bootcamp | Beginner Beauty Lens Studio"}
          description={`Learn how to make your very first Snapchat filter with Lens Studio! Beauty and aesthetic filters are a great way to get started. They are easy to make and will help you get started on your lens creating journey!`}
          path={"lens-studio-beginner-beauty"}
        />
        <Container>
          <div className="text-black">
            <div className="flex flex-col  ">
              <h1 className="mono text-6xl text-center">
                Beginner Beauty Lens Studio
              </h1>
              <p>{`Learn how to make your very first Snapchat filter with Lens Studio! Beauty and aesthetic filters are a great way to get started. They are easy to make and will help you get started on your lens creating journey!`}</p>
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

  console.log(allPosts);

  allPosts.forEach((p) => {
    if (p.section.includes("lens-studio-beginner-beauty")) {
      posts.push(p);
    }
  });

  return {
    props: { posts },
  };
}
