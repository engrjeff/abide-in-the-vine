import type { NextPage, GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import qs from "qs";

import type { CMSPostResponse, Post } from "@utils/types";
import { transformPostResponse } from "@utils/helpers";
import { API_URL } from "@utils/constants";
import PostCard from "@components/lib/PostCard";
import { getPlaiceholder } from "plaiceholder";

interface BlogsProps {
  posts: Post[];
}

const BlogsPage: NextPage<BlogsProps> = ({ posts }) => {
  return (
    <>
      <NextSeo title='Blogs - Abide in the Vine' />
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
      fields: ["title", "slug", "description", "publishedAt"],
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

  const postsData = transformPostResponse(jsonDoc);

  const posts = await Promise.all(
    postsData.map(async (post) => {
      const { base64 } = await getPlaiceholder(post.bannerUrl);

      return {
        ...post,
        blurImageUrl: base64,
      };
    })
  ).then((values) => values);

  return {
    props: {
      posts,
    },
  };
};

export default BlogsPage;
