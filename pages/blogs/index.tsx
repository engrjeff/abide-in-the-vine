import { useState } from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import type {
  NextPage,
  InferGetServerSidePropsType,
  GetStaticProps,
} from "next";

import getSortedPosts, {
  getUniqueTagsFromPosts,
  PostWithoutBody,
} from "@api/contentFetchFunctions";
import PostCard from "@components/PostCard";
import { cn } from "@utils/helpers";
import { useRouter } from "next/router";
import BlogCard from "@components/BlogCard";
import SectionHeading from "@components/SectionHeading";
import TagClouds from "@components/TagClouds";

type BlogsPageProps = InferGetServerSidePropsType<typeof getStaticProps>;

const BlogsPage: NextPage<BlogsPageProps> = ({ posts, tags }) => {
  const router = useRouter();

  const postsPerPage = 6;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const startIndex = router.query.page
    ? (Number(router.query.page) - 1) * postsPerPage
    : 0;
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
      <div className='bg-background py-10'>
        <div className='container max-w-site space-y-10'>
          <SectionHeading title='Articles' />
          <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-2'>
            {posts.slice(startIndex, lastIndex).map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
          <div className='flex items-center justify-center gap-3'>
            {Array.from(Array(totalPages).keys()).map((n) => (
              <Link
                key={`page-${n + 1}`}
                href={{
                  pathname: "/blogs",
                  query: {
                    page: n + 1,
                  },
                }}
                className={cn(
                  "rounded h-9 w-9 border flex items-center justify-center hover:bg-primary hover:border-primary",
                  {
                    "bg-primary text-white":
                      (!router.query.page && n === 0) ||
                      router.query.page === String(n + 1),
                  }
                )}
              >
                {n + 1}
              </Link>
            ))}
          </div>
          <TagClouds tags={tags} />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
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
