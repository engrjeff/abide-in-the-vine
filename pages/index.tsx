import type { NextPage, GetServerSideProps } from "next";
import qs from "qs";

import type { CMSPostResponse, Post } from "@utils/types";
import { transformPostResponse } from "@utils/helpers";
import { API_URL } from "@utils/constants";

import HeroSection from "@components/lib/HeroSection";
import FeaturedPostsSection from "@components/lib/FeaturedPostsSection";
import MostRecentPostsSection from "@components/lib/MostRecentPostsSection";

interface HomeProps {
  featuredPosts: Post[];
  recentPosts: Post[];
}

const Home: NextPage<HomeProps> = (props) => {
  const { featuredPosts, recentPosts } = props;
  return (
    <>
      <HeroSection />
      <FeaturedPostsSection posts={featuredPosts} />
      <MostRecentPostsSection posts={recentPosts} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = qs.stringify(
    {
      fields: ["title", "description", "publishedAt", "slug"],
      populate: ["tags", "banner"],
      sort: ["publishedAt:desc"],
      pagination: {
        start: 0,
        limit: 11,
      },
    },
    { encodeValuesOnly: true }
  );

  const response = await fetch(`${API_URL}/api/posts?${query}`);
  const jsonDoc: CMSPostResponse = await response.json();

  const posts = transformPostResponse(jsonDoc);

  const featuredPosts = posts.slice(0, 5);
  const recentPosts = posts.slice(5);

  return {
    props: {
      featuredPosts,
      recentPosts,
    },
  };
};

export default Home;
