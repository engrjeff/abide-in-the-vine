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
import { cn } from "@utils/helpers";

type BlogsPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const BlogsPage: NextPage<BlogsPageProps> = ({ posts, tags }) => {
  const [page, setPage] = useState(0);

  const postsPerPage = 6;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const startIndex = page * postsPerPage;
  const lastIndex = startIndex + postsPerPage;

  return (
    <>
      <NextSeo title='Blogs - Abide in the Vine' />
      <div className='relative'>
        <div className='h-[300px] w-full bg-blogs bg-cover bg-center bg-no-repeat text-white md:h-[400px]'>
          <div className='absolute inset-0 flex flex-col justify-center gap-8 bg-black/60 p-6 md:items-center'>
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
      <div className='bg-white py-20 dark:bg-slate-950'>
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
                  className='bg-gray-200 px-3 py-2 text-xs uppercase text-gray-700 hover:bg-gray-300 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-900 md:text-sm rounded-full'
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
          <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {posts.slice(startIndex, lastIndex).map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
          <div className='flex items-center justify-center gap-3'>
            {Array.from(Array(totalPages).keys()).map((n) => (
              <button
                key={`page-${n + 1}`}
                onClick={() => setPage(n)}
                className={cn(
                  "rounded h-9 w-9 border border-gray-200 dark:border-gray-800 hover:text-slate-950 hover:bg-brand-primary hover:border-brand-primary",
                  {
                    "bg-brand-primary text-slate-950": n === page,
                  }
                )}
              >
                {n + 1}
              </button>
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
