import type { NextPage, GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import qs from "qs";

import type { CMSPostResponse, Post } from "@utils/types";
import { transformPostResponse } from "@utils/helpers";
import { API_URL } from "@utils/constants";
import PostCard from "@components/lib/PostCard";

interface BlogsProps {
  posts: Post[];
}

const BlogsPage: NextPage<BlogsProps> = ({ posts }) => {
  console.log(posts[0]);
  return (
    <>
      <NextSeo title='Abide in the Vine - Blogs' />
      <section className='container mx-auto p-4 lg:p-10 py-6'>
        <h1 className='text-abide-dark dark:text-abide-light text-5xl font-extrabold mb-8'>
          Blogs
        </h1>
        {/* Insert tags filter here */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} isSmall />
          ))}
        </div>
        <div className='mt-20 text-center'>
          <button className='btn-cta'>Load More Posts</button>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = qs.stringify(
    {
      fields: ["title", "description", "publishedAt"],
      populate: ["tags", "banner"],
      sort: ["publishedAt:desc"],
      pagination: {
        start: 0,
        limit: 9,
      },
    },
    { encodeValuesOnly: true }
  );

  const response = await fetch(`${API_URL}/api/posts?${query}`);
  const jsonDoc: CMSPostResponse = await response.json();

  const posts = transformPostResponse(jsonDoc);

  return {
    props: {
      posts,
    },
  };
};

export default BlogsPage;
