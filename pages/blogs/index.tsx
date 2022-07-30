import type { NextPage, GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import qs from "qs";

import type { CMSPostResponse, CMSTagResponse, Post, Tag } from "@utils/types";
import { transformPostResponse, transformTagResponse } from "@utils/helpers";
import { API_URL } from "@utils/constants";
import PostCard from "@components/lib/PostCard";
import BlogsTagsFilter from "@components/BlogsTagsFilter";
import { useState } from "react";

interface BlogsProps {
  posts: Post[];
  tags: Tag[];
}

const BlogsPage: NextPage<BlogsProps> = ({ posts, tags }) => {
  const [tagFilters, setTagFilters] = useState<string[]>([]);

  const filteredPosts =
    tagFilters.length > 0
      ? posts.filter((p) => p.tags.some((tag) => tagFilters.includes(tag.name)))
      : posts;

  return (
    <>
      <NextSeo title='Blogs - Abide in the Vine' />
      <section className='container py-6 lg:py-10'>
        <div className='mb-8 space-y-2'>
          <h1 className='text-abide-dark dark:text-abide-light text-4xl font-extrabold'>
            Blogs
          </h1>
          <p className='text-abide-darkGray dark:text-abide-light text-lg'>
            Let your soul be delighted in the beauty of Christ through these
            God-exalting and Christ-centered posts.
          </p>
        </div>
        <BlogsTagsFilter
          tags={tags}
          currentTags={tagFilters}
          onChange={setTagFilters}
        />
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredPosts.map((post) => (
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

  const posts = transformPostResponse(jsonDoc);

  const tagResponse = await fetch(`${API_URL}/api/tags?sort=createdAt:desc`);
  const tagsJsonDoc: CMSTagResponse = await tagResponse.json();
  const tags = transformTagResponse(tagsJsonDoc);

  return {
    props: {
      posts,
      tags,
    },
  };
};

export default BlogsPage;
