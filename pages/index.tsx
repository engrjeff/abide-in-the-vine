import Link from "next/link";
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";

import getSortedPosts from "@api/contentFetchFunctions";
import type { PostWithoutBody } from "@api/contentFetchFunctions";

import HeroImage from "@components/HeroImage";
import PostCard from "@components/PostCard";
import SectionTitle from "@components/SectionTitle";
import PostCardBig from "@components/PostCardBig";

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

const HomePage: NextPage<HomeProps> = (props) => {
  const { featuredPosts } = props;

  const latestPost = featuredPosts[0];

  return (
    <>
      <HeroImage />
      <div className='container py-10 md:py-20'>
        <SectionTitle title='Latest Article' subtitle='' />
        <div className='md:mb-20'>
          <PostCardBig post={latestPost} />
        </div>
      </div>
      <div className='bg-white dark:bg-slate-950'>
        <div className='container py-10 md:py-20'>
          <SectionTitle
            title='Featured Articles'
            subtitle='Selected articles to feed your soul'
          />
          <div className='grid gap-10 md:grid-cols-3'>
            {featuredPosts.slice(1).map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
          <div className='text-center'>
            <Link
              href='/blogs'
              className='mt-10 inline-block rounded-full bg-brand-primary bg-opacity-95 px-10 py-4 text-lg font-medium text-white shadow-lg hover:bg-opacity-100 focus:shadow-sm md:mt-20 transition-transform focus:scale-95'
            >
              Explore more articles
            </Link>
          </div>
        </div>
      </div>
      <div className='container flex flex-col items-center py-10 md:py-20'>
        <h2 className='relative mb-10 inline-block text-4xl font-bold after:absolute after:-bottom-3 after:left-1/2 after:inline-block after:h-1 after:w-16 after:-translate-x-1/2 after:rounded-md after:bg-brand-primary'>
          Abide in Christ
        </h2>
        <p className='mb-6 text-lg'>Our Lord Jesus Christ Himself said,</p>
        <blockquote className='space-y-6 text-center'>
          <p className='max-w-[65ch] text-xl md:text-2xl'>
            Abide in Me, and I in you. As the branch cannot bear fruit of
            itself, unless it abides in the vine, neither can you, unless you
            abide in Me.
          </p>
          <p className='space-x-3 uppercase tracking-widest text-brand-gray500 dark:text-brand-coolnavy200'>
            <span className='text-brand-primary'>&mdash;&nbsp;</span>John 15:4
            <span className='text-brand-primary'>&mdash;&nbsp;</span>
          </p>
        </blockquote>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  featuredPosts: PostWithoutBody[];
}> = async (context) => {
  const featuredPosts = await getSortedPosts(0, 7);

  return {
    props: {
      featuredPosts,
    },
  };
};

export default HomePage;
