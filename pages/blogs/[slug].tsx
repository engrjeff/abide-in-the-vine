import type {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { useMDXComponent } from "next-contentlayer/hooks";
import type { Post } from "@contentlayer/generated";

import getSortedPosts, {
  getPostBySlug,
  PostWithoutBody,
} from "@api/contentFetchFunctions";
import PostCard from "@components/PostCard";
import BackButton from "@components/BackButton";
import ShareButtons from "@components/ShareButtons";
import { abide } from "@utils/constants";
import ScrollToTopButton from "@components/ScrollToTopButton";
import ByLine from "@components/ByLine";
import SectionHeading from "@components/SectionHeading";
import Link from "next/link";
import RelatedPost from "@components/RelatedPost";

type BlogPostProps = InferGetStaticPropsType<typeof getStaticProps>;

const BlogPost: NextPage<BlogPostProps> = ({ post, nextPosts }) => {
  const MDXContent = useMDXComponent(post.body.code);

  const ogTags = {
    url: `${abide.siteUrl}/blogs/${post.slug}`,
    images: [
      {
        url: post.bannerUrl,
        alt: post.title + " by Abide in the Vine",
      },
    ],
  };

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        openGraph={ogTags}
      />
      <div className='relative'>
        <div
          style={{ backgroundImage: `url("${post.bannerUrl}")` }}
          className='h-[300px] w-full bg-cover bg-center bg-no-repeat text-white md:h-[400px]'
        >
          <div className='absolute inset-0 flex flex-col justify-center gap-6 bg-black/60 p-6 md:items-center'>
            <h1 className='text-4xl font-extrabold md:text-5xl'>
              <span>{post.title}</span>
            </h1>
            <p className='uppercase tracking-wider'>
              {post.timeToRead} &mdash; {post.publishedAt}
            </p>
          </div>
        </div>
      </div>

      <div className='container max-w-site pt-10 space-y-4'>
        <BackButton backToPath='/blogs' label='back to blogs' />
        <div className='flex flex-col md:flex-row md:items-center md:gap-4'>
          <p className='relative inline-block text-xl font-medium'>Tags</p>
          <span className='text-accent'>&mdash;</span>
          <span className='whitespace-nowrap py-0.5 text-sm font-medium uppercase tracking-wide text-brand-primary'>
            {post.tags.join(" , ")}
          </span>
        </div>
        <ByLine />
        <ShareButtons />
      </div>
      <article className='prose w-full prose-lg prose-quoteless mx-auto px-5 py-10 font-article dark:prose-invert lg:prose-xl prose-headings:text-left prose-blockquote:border-primary md:px-0 md:text-justify'>
        <MDXContent />
      </article>

      <div className='container mb-20 max-w-4xl space-y-4 border-t border-gray-200 pt-10 dark:border-slate-700'>
        <SectionHeading title='Related Articles' />
        <p className='text-muted'>
          Love this post? For sure you will love these too:
        </p>
        <div className='grid gap-8 md:grid-cols-2'>
          {nextPosts.map((nextPost) => (
            <Link key={nextPost._id} href={nextPost.url}>
              <RelatedPost post={nextPost} />
            </Link>
          ))}
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getSortedPosts();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: Post;
  nextPosts: PostWithoutBody[];
}> = async (context) => {
  const { slug } = context.params as { slug: string };

  const currentPost = await getPostBySlug(slug);

  if (!currentPost) {
    return {
      notFound: true,
    };
  }

  const posts = await getSortedPosts();
  const nextPosts = posts.filter((p) => p.slug !== slug);

  // shuffle the posts and get 3 posts only
  const shuffledPosts = nextPosts.sort(() => 0.5 - Math.random());
  const selectedNextPosts = shuffledPosts.slice(0, 2);

  return {
    props: {
      post: currentPost,
      nextPosts: selectedNextPosts,
    },
  };
};

export default BlogPost;
