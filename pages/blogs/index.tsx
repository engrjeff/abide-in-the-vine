import type { NextPage, GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import qs from "qs";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import type { CMSPostResponse, CMSTagResponse, Post, Tag } from "@utils/types";
import { transformPostResponse, transformTagResponse } from "@utils/helpers";
import { API_URL } from "@utils/constants";
import PostCard from "@components/lib/PostCard";
import BlogsTagsFilter from "@components/BlogsTagsFilter";
import { useState } from "react";
import { fetchPosts, fetchTags } from "api/fetchFunctions";

interface BlogsProps {
  posts: Post[];
  tags: Tag[];
}

const BlogsPage: NextPage = () => {
  const [page, setPage] = useState(1);

  const limit = page * 6;
  const start = 0;

  const {
    data: postData,
    isFetching,
    isPreviousData,
  } = useQuery(["posts", page], () => fetchPosts(start, limit), {
    keepPreviousData: true,
    staleTime: Infinity,
  });

  const { data: tagsData } = useQuery(["tags"], fetchTags);

  const [tagFilters, setTagFilters] = useState<string[]>([]);

  const tags = tagsData ? tagsData : [];

  const posts = postData ? postData : [];

  console.log(posts.length);
  const filteredPosts =
    tagFilters.length > 0
      ? posts?.filter((p) =>
          p.tags.some((tag) => tagFilters.includes(tag.name))
        )
      : posts;

  const handleLoadMore = () => {
    if (!isPreviousData) {
      setPage((p) => p + 1);
    }
  };
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
          <button className='btn-cta' onClick={handleLoadMore}>
            {isFetching ? "Loading..." : "Load More Posts"}
          </button>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["posts", 1], () => fetchPosts(0, 6));
  await queryClient.prefetchQuery(["tags"], fetchTags);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default BlogsPage;
