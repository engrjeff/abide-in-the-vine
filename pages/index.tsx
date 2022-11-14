import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next';

import HeroSection from '@components/lib/HeroSection';
import FeaturedPostsSection from '@components/lib/FeaturedPostsSection';
import MostRecentPostsSection from '@components/lib/MostRecentPostsSection';
import getSortedPosts from '@api/contentFetchFunctions';
import type { PostWithoutBody } from '@api/contentFetchFunctions';

type HomeProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const Home: NextPage<HomeProps> = (props) => {
  const { featuredPosts, recentPosts } = props;
  return (
    <>
      <HeroSection />
      <FeaturedPostsSection posts={featuredPosts} />
      <MostRecentPostsSection posts={recentPosts} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  featuredPosts: PostWithoutBody[];
  recentPosts: PostWithoutBody[];
}> = async (context) => {
  const featuredPosts = await getSortedPosts(0, 5);
  const recentPosts = await getSortedPosts(5, 8);

  return {
    props: {
      featuredPosts,
      recentPosts,
    },
  };
};

export default Home;
