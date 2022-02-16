import type { NextPage, GetStaticProps } from "next";

import Layout from "@components/Layout";
import Hero from "@components/sections/Hero";
import LatestPost from "@components/sections/LatestPost";
import MorePosts from "@components/sections/MorePosts";
import Contact from "@components/sections/Contact";
import MessageUs from "@components/sections/MessageUs";
import OtherLinks from "@components/sections/OtherLinks";
import { CMSPostResponse, Post } from "@utils/types";
import { transformPostResponse } from "@utils/helpers";

interface HomeProps {
  posts: Post[];
}

const Home: NextPage<HomeProps> = (props) => {
  const { posts } = props;
  return (
    <Layout>
      <Hero />
      <LatestPost post={posts[0]} />
      <MorePosts posts={posts.slice(1)} />
      <Contact />
      <MessageUs />
      <OtherLinks />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(
    "http://localhost:1337/api/posts?populate=tags,banner&sort=createdAt:desc"
  );
  const jsonDoc: CMSPostResponse = await response.json();

  const posts = transformPostResponse(jsonDoc);

  return {
    props: {
      posts,
    },
  };
};

export default Home;
