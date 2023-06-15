import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

import getSortedPosts, {
  getAllTags,
  getGospelPosts,
} from "@api/contentFetchFunctions";
import type { PostWithoutBody } from "@api/contentFetchFunctions";
import LatestPosts from "@components/LatestPost";
import BlogCard from "@components/BlogCard";
import SectionHeading from "@components/SectionHeading";
import AboutCard from "@components/AboutCard";
import VerseCard from "@components/VerseCard";
import TagClouds from "@components/TagClouds";
import PostCarousel from "@components/PostCarousel";
import Link from "next/link";

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

const HomePage: NextPage<HomeProps> = (props) => {
  const { featuredPosts, gospelPosts, tags } = props;

  const latestPosts = featuredPosts.slice(0, 3);
  const otherPosts = featuredPosts.slice(3);

  return (
    <div className='container max-w-site py-3 space-y-10'>
      <LatestPosts posts={latestPosts} />
      <SectionHeading title='Recent Posts' />
      <div className='grid grid-cols-1 lg:grid-cols-12 md:gap-10 mt-10'>
        <div className='col-span-1 lg:col-span-7 space-y-8 mb-8'>
          {otherPosts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
          <div className='text-center'>
            <Link
              href='/blogs'
              className='text-white inline-flex items-center justify-center bg-gradient-to-r from-primary to-accent px-6 py-4 rounded-full font-medium'
            >
              Explore More Posts
            </Link>
          </div>
        </div>
        <div className='lg:col-span-5 space-y-8 mb-8'>
          <AboutCard />
          <VerseCard />
          <PostCarousel posts={gospelPosts} />
          <TagClouds tags={tags} />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  featuredPosts: PostWithoutBody[];
  gospelPosts: PostWithoutBody[];
  tags: string[];
}> = async (context) => {
  const featuredPosts = getSortedPosts(0, 6);
  const uniqueTags = getAllTags();
  const gospelPosts = getGospelPosts();

  return {
    props: {
      featuredPosts,
      gospelPosts,
      tags: uniqueTags,
    },
  };
};

export default HomePage;
