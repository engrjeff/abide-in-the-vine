import type { GetServerSideProps, NextPage, InferGetServerSidePropsType } from 'next';

import { abide } from '@utils/constants';
import BackButton from '@components/BackButton';
import { NextSeo } from 'next-seo';
import ShareButtons from '@components/ShareButtons';
import PostCard from '@components/lib/PostCard';
import BannerImage from '@components/lib/BannerImage';

import getSortedPosts, { getGospelContent, PostWithoutBody } from '@api/contentFetchFunctions';
import { Gospel } from '@contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

type GospelPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const GospelPage: NextPage<GospelPageProps> = (props) => {
  const { gospelContent, relatedPosts } = props;

  const MDXContent = useMDXComponent(gospelContent.body.code);

  const ogTags = {
    url: `${abide.canonicalUrl}/the-gospel`,
    images: [
      {
        url: abide.gospelBanner,
        alt: 'The Gospel of Jesus Christ',
      },
    ],
  };

  return (
    <>
      <NextSeo
        title='The Gospel of Jesus Christ'
        description={abide.gospelDesc}
        openGraph={ogTags}
      />
      <section className='container'>
        <article className='max-w-4xl mx-auto mt-2 md:mt-10 flex flex-col'>
          <BackButton backToPath='/' label='Back to Home' />
          <h1 className='text-abide-dark dark:text-abide-light text-4xl font-extrabold my-6'>
            The Gospel of Jesus Christ
          </h1>
          <ShareButtons />
          <div className='w-full prose prose-lg md:prose-xl prose-blockquote:border-abide-accent prose-blockquote:py-3 prose-blockquote:bg-abide-lighter md:text-justify dark:prose-invert dark:prose-blockquote:bg-abide-dark'>
            <MDXContent components={{ BannerImage }} />
          </div>
        </article>
        <div className='max-w-4xl mx-auto my-10 border-t pt-6 dark:border-abide-dark'>
          <div className='space-y-3'>
            <h4 className='text-3xl lg:text-4xl font-extrabold text-abide-dark dark:text-abide-light'>
              Want to know the Gospel more?
            </h4>
            <p className='text-lg lg:text-xl text-zinc-700 font-semibold dark:text-abide-mediumGray'>
              Here are other posts about the Gospel
            </p>
          </div>
          <div className='my-10 grid lg:grid-cols-3 gap-6'>
            {relatedPosts.map((post) => (
              <PostCard key={post._id} post={post} isSmall minimal />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  gospelContent: Gospel;
  relatedPosts: PostWithoutBody[];
}> = async () => {
  const gospelContent = await getGospelContent();

  const posts = await getSortedPosts();

  const postsWithGospelTags = posts.filter((post) =>
    post.tags.some((tag) => ['gospel', 'Christ', 'atonement'].includes(tag))
  );

  // shuffle the posts and get 3 posts only
  const shuffledPosts = postsWithGospelTags.sort(() => 0.5 - Math.random());
  const relatedPosts = shuffledPosts.slice(0, 3);

  return {
    props: {
      gospelContent,
      relatedPosts,
    },
  };
};

export default GospelPage;
