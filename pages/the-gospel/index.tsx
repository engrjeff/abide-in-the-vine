import type {
  GetServerSideProps,
  NextPage,
  InferGetServerSidePropsType,
} from "next";
import { NextSeo } from "next-seo";

import { abide } from "@utils/constants";
import BackButton from "@components/BackButton";
import ShareButtons from "@components/ShareButtons";
import BannerImage from "@components/BannerImage";

import getSortedPosts, {
  getGospelContent,
  PostWithoutBody,
} from "@api/contentFetchFunctions";
import { Gospel } from "@contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import PostCard from "@components/PostCard";

type GospelPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const TheGospelPage: NextPage<GospelPageProps> = (props) => {
  const { gospelContent, relatedPosts } = props;

  const MDXContent = useMDXComponent(gospelContent.body.code);

  const ogTags = {
    url: `${abide.siteUrl}/the-gospel`,
    images: [
      {
        url: abide.gospelBanner,
        alt: "The Gospel of Jesus Christ",
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
      <div className='relative'>
        <div className='h-[300px] w-full bg-gospel bg-cover bg-center bg-no-repeat text-white md:h-[400px]'>
          <div className='absolute inset-0 flex flex-col items-center justify-center gap-8 bg-black/70 p-6'>
            <h1 className='text-5xl font-extrabold md:text-6xl'>
              <span>The Gospel of Jesus Christ</span>
            </h1>
            <p className='text-lg uppercase tracking-wider'>
              The power of God unto salvation to everyone who believes
            </p>
          </div>
        </div>
      </div>
      <div className='container max-w-4xl pt-10'>
        <BackButton backToPath='/blogs' label='back to blogs' />
        <ShareButtons />
      </div>
      <article className='prose mx-auto px-4 py-10 text-justify font-article dark:prose-invert lg:prose-xl prose-blockquote:border-brand-primary md:px-0'>
        <MDXContent components={{ BannerImage }} />
      </article>
      <div className='container mb-20 max-w-4xl space-y-4 border-t border-slate-700 pt-10'>
        <h2 className='text-2xl font-extrabold'>
          <span>Related Articles</span>
        </h2>
        <p>Want to know more about the gospel? Check these articles:</p>
        <div className='grid grid-cols-2 gap-8'>
          {relatedPosts.map((nextPost) => (
            <PostCard key={nextPost._id} post={nextPost} simple />
          ))}
        </div>
      </div>
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
    post.tags.some((tag) => ["gospel", "Christ", "atonement"].includes(tag))
  );

  // shuffle the posts and get 3 posts only
  const shuffledPosts = postsWithGospelTags.sort(() => 0.5 - Math.random());
  const relatedPosts = shuffledPosts.slice(0, 4);

  return {
    props: {
      gospelContent,
      relatedPosts,
    },
  };
};

export default TheGospelPage;
