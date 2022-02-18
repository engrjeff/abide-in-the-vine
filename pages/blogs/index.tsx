import React, { useState } from "react";
import { GetStaticProps, NextPage } from "next";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import qs from "qs";

import Layout from "@components/Layout";
import Contact from "@components/sections/Contact";
import SectionContainer from "@components/SectionContainer";
import Article from "@components/Article";
import AppTabs from "@components/AppTabs";
import AllPosts from "@components/AllPosts";
import SectionTitle from "@components/SectionTitle";

import { CMSPostResponse, CMSTagResponse, Post, Tag } from "@utils/types";
import { transformPostResponse, transformTagResponse } from "@utils/helpers";
import { API_URL } from "@utils/constants";
import TagUI from "@components/Tag";
import NoScrollLink from "@components/NoScrollLink";

interface BlogsPageProps {
  posts: Post[];
  tags: Tag[];
  relatedPosts: Post[];
}

const BlogsPage: NextPage<BlogsPageProps> = (props) => {
  const [currentTab, setCurrentTab] = useState("latest-post");
  const { posts, tags, relatedPosts } = props;

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
            <div className='grid md:grid-cols-10 md:pt-4 divide-y md:divide-y-0 gap-y-12 md:gap-0'>
              <Article post={latestPost} clamped />
              <div className='col-span-10 md:col-span-3 pt-6 md:mt-3 md:border-l md:border-abide-light md:pl-6'>
                <SectionTitle title='Related Posts' />
                <div className='space-y-4 mt-5'>
                  <p className='filter-label'>Tags</p>
                  <div className='flex gap-2 flex-wrap'>
                    {latestPost.tags.map((tag) => (
                      <TagUI key={tag.id} label={tag.name} />
                    ))}
                  </div>
                </div>
                <ul role='list' className='py-6'>
                  {relatedPosts.map((p) => (
                    <li
                      key={p.id}
                      className='py-4 group border-b border-abide-light'
                    >
                      <NoScrollLink passHref href={`/blogs/${p.slug}`}>
                        <a
                          className='abide-article text-base'
                          aria-label={p.title}
                        >
                          <div className='flex items-center'>
                            <h5 className='text-lg font-semibold w-[80%]'>
                              {p.title}
                            </h5>
                            <span className='text-abide-gray ml-auto self-start hidden group-hover:inline duration-150'>
                              <ExternalLinkIcon className='h5 w-5' />
                            </span>
                          </div>
                          <p className='line-clamp-2'>{p.description}</p>
                        </a>
                      </NoScrollLink>
                    </li>
                  ))}
                </ul>
              </div>
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
  const query = qs.stringify(
    { populate: ["tags", "banner"], sort: ["createdAt:desc"] },
    { encodeValuesOnly: true }
  );

  const response = await fetch(`${API_URL}/api/posts?${query}`);
  const jsonDoc: CMSPostResponse = await response.json();

  const tagResponse = await fetch(`${API_URL}/api/tags?sort=createdAt:desc`);

  const tagsJsonDoc: CMSTagResponse = await tagResponse.json();

  const posts = transformPostResponse(jsonDoc);
  const tags = transformTagResponse(tagsJsonDoc);

  const latestPostTags = posts[0].tags.map((t) => t.id);

  const relatedPosts = posts.filter((p) =>
    p.tags.some((t) => latestPostTags.includes(t.id) && p.id !== posts[0].id)
  );

  return {
    props: {
      posts,
      tags,
      relatedPosts,
    },
  };
};

export default BlogsPage;
