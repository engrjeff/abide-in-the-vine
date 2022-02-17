import React, { useState } from "react";
import { GetStaticProps, NextPage } from "next";

import Layout from "@components/Layout";
import Contact from "@components/sections/Contact";
import SectionContainer from "@components/SectionContainer";

import { CMSPostResponse, CMSTagResponse, Post, Tag } from "@utils/types";
import { transformPostResponse, transformTagResponse } from "@utils/helpers";
import Article from "@components/Article";
import AppTabs from "@components/AppTabs";
import AllPosts from "@components/AllPosts";
import { API_URL } from "@utils/constants";

interface BlogsPageProps {
  posts: Post[];
  tags: Tag[];
}

const BlogsPage: NextPage<BlogsPageProps> = (props) => {
  const [currentTab, setCurrentTab] = useState("latest-post");
  const { posts, tags } = props;

  const latestPost = posts[0];

  return (
    <Layout title='Blogs - Abide in the Vine'>
      <SectionContainer className='my-24 md:my-32'>
        <div className='flex items-center'>
          <h1 className='text-4xl font-extrabold text-abide-dark'>Blogs</h1>
        </div>
        <div className='space-y-4 mt-8'>
          <AppTabs current={currentTab} onChange={setCurrentTab} />
          {currentTab === "latest-post" && (
            <div className='grid md:grid-cols-10 md:pt-4'>
              <Article post={latestPost} clamped />
            </div>
          )}
          {currentTab === "all-posts" && (
            <div className='my-16'>
              <AllPosts posts={posts} tags={tags} />
            </div>
          )}
        </div>
      </SectionContainer>
      <Contact />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(
    `${API_URL}/api/posts?populate=tags,banner&sort=createdAt:desc`
  );
  const jsonDoc: CMSPostResponse = await response.json();

  const tagResponse = await fetch(`${API_URL}/api/tags?sort=createdAt:asc`);

  const tagsJsonDoc: CMSTagResponse = await tagResponse.json();

  const posts = transformPostResponse(jsonDoc);
  const tags = transformTagResponse(tagsJsonDoc);

  return {
    props: {
      posts,
      tags,
    },
  };
};

export default BlogsPage;
