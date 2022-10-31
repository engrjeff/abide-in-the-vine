import { useState } from 'react';
import { NextSeo } from 'next-seo';
import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next';

import getSortedPosts, {
  getUniqueTagsFromPosts,
  PostWithoutBody,
} from '@api/contentFetchFunctions';
import PostCard from '@components/lib/PostCard';
import BlogsTagsFilter from '@components/BlogsTagsFilter';

type BlogsPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const BlogsPage: NextPage<BlogsPageProps> = ({ posts, tags }) => {
  const [page, setPage] = useState(0);
  const [tagFilters, setTagFilters] = useState<string[]>([]);

  let filteredPosts = posts.slice(0, 6 * (page + 1));

  filteredPosts =
    tagFilters.length === 0
      ? filteredPosts
      : filteredPosts.filter((p) => p.tags.some((t) => tagFilters.includes(t)));

  const handleLoadMore = () => {
    if (page * 6 >= posts.length) return;

    setPage((p) => p + 1);
  };

  return (
    <>
      <NextSeo title='Blogs - Abide in the Vine' />
      <section className='container py-6 lg:py-10'>
        <div className='mb-8 space-y-2'>
          <h1 className='text-abide-dark dark:text-abide-light text-4xl font-extrabold'>Blogs</h1>
          <p className='text-abide-darkGray dark:text-abide-light text-lg'>
            Let your soul be delighted in the beauty of Christ through these God-exalting and
            Christ-centered posts.
          </p>
        </div>
        <BlogsTagsFilter tags={tags} currentTags={tagFilters} onChange={setTagFilters} />
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredPosts.map((post) => (
            <PostCard key={post._id} post={post} isSmall />
          ))}
        </div>
        <div className='mt-20 text-center'>
          <button className='btn-cta' onClick={handleLoadMore}>
            Load More Posts
          </button>
        </div>
      </section>
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
