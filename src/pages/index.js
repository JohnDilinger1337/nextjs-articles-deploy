import { server } from "../config";
import Head from "next/head";
import ArticleList from "@/components/ArticleList";

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>WebDev Newz</title>
        <meta name="keywords" content="web development, programming"></meta>
      </Head>
      <ArticleList articles={articles} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`);
//   const articles = await res.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// };
