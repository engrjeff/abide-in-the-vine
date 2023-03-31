import { useState } from "react";
import { NextSeo } from "next-seo";
import type {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";

import getSortedPosts, {
  getUniqueTagsFromPosts,
  PostWithoutBody,
} from "@api/contentFetchFunctions";
import PostCard from "@components/PostCard";

type BlogsPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const BlogsPage: NextPage<BlogsPageProps> = ({ posts, tags }) => {
  return (
    <>
      <NextSeo title='Blogs - Abide in the Vine' />
      <div className='relative'>
        <div className='h-[300px] w-full bg-blogs bg-cover bg-center bg-no-repeat text-white md:h-[400px]'>
          <div className='absolute inset-0 flex flex-col justify-center gap-8 bg-black/70 p-6 md:items-center'>
            <h1 className='text-5xl font-extrabold md:text-6xl'>
              <span>Blogs</span>
            </h1>
            <p className='text-lg uppercase tracking-wider'>
              Be delighted in Christ-centered, Spirit-led, God-exalting
              articles.
            </p>
          </div>
        </div>
      </div>
      <div className='bg-gray-100 py-20 dark:bg-brand-coolnavy800'>
        <div className='container'>
          <div className='space-y-6'>
            <h2 className='relative inline-block text-3xl font-bold after:absolute after:-bottom-3 after:left-0 after:inline-block after:h-1 after:w-10 after:rounded-md after:bg-brand-primary'>
              Tags
            </h2>
            <p className='text-brand-gray500 dark:text-brand-coolnavy200'>
              You may filter the list by tags
            </p>
            <div className='flex flex-wrap gap-2 pb-10 md:gap-3'>
              {tags.map((tag) => (
                <button
                  key={tag}
                  className='bg-gray-200 px-3 py-2 text-xs uppercase text-gray-700 hover:bg-gray-300 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-950 md:text-sm'
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className='container space-y-10'>
          <h2 className='relative inline-block text-3xl font-bold after:absolute after:-bottom-3 after:left-0 after:inline-block after:h-1 after:w-10 after:rounded-md after:bg-brand-primary'>
            Articles
          </h2>
          <div className='grid gap-10 md:grid-cols-3'>
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  posts: PostWithoutBody[];
  tags: string[];
}> = async () => {
  const posts = await getSortedPosts();
  const tags = getUniqueTagsFromPosts(posts);

  return {
    props: {
      posts,
      tags,
    },
  };
};

export default BlogsPage;
