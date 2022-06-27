import React from "react";
import { GetStaticProps } from "next";
import qs from "qs";

import Layout from "@components/Layout";
import { API_URL } from "@utils/constants";
import { CMSPostResponse, Post } from "@utils/types";
import { transformPostResponse } from "@utils/helpers";
import Article from "@components/Article";
import RelatedPosts from "@components/RelatedPosts";
import BlogTabLinks from "@components/BlogTabLinks";
import SectionContainer from "@components/SectionContainer";

interface LatestPostPageProps {
  latestPost: Post;
  relatedPosts: Post[];
}

const LatestPostPage = (props: LatestPostPageProps) => {
  const { latestPost, relatedPosts } = props;

  return (
    <Layout title={`Latest Post: ${latestPost.title} | Abide in the Vine`}>
      <BlogTabLinks />
      <SectionContainer className='flex flex-col lg:flex-row mb-32 gap-8'>
        <Article post={latestPost} clamped />
        <RelatedPosts tags={latestPost.tags} relatedPosts={relatedPosts} />
      </SectionContainer>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const query = qs.stringify(
    { populate: ["tags", "banner"], sort: ["createdAt:desc"] },
    { encodeValuesOnly: true }
  );

  const response = await fetch(`${API_URL}/api/posts?${query}`);
  const jsonDoc: CMSPostResponse = await response.json();

  const posts = transformPostResponse(jsonDoc);

  const latestPostTags = posts[0].tags.map((t) => t.id);

  const relatedPosts = posts.filter((p) =>
    p.tags.some((t) => latestPostTags.includes(t.id) && p.id !== posts[0].id)
  );

  return {
    props: {
      posts,
      latestPost: posts[0],
      relatedPosts,
    },
  };
};

export default LatestPostPage;
