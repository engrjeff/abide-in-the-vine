import type { NextPage, GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { Post } from '@contentlayer/generated';

import { abide } from '@utils/constants';
import PostCard from '@components/lib/PostCard';
import BackButton from '@components/BackButton';
import ShareButtons from '@components/ShareButtons';
import ByLine from '@components/lib/ByLine';
import getSortedPosts, { getPostBySlug, PostWithoutBody } from '@api/contentFetchFunctions';

type BlogPostProps = InferGetStaticPropsType<typeof getStaticProps>;

const BlogPost: NextPage<BlogPostProps> = ({ post, nextPosts }) => {
  const MDXContent = useMDXComponent(post.body.code);

  const ogTags = {
    url: `${abide.canonicalUrl}/blogs/${post.slug}`,
    images: [
      {
        url: post.bannerUrl,
        alt: post.title + ' by Abide in the Vine',
      },
    ],
  };

  return (
    <section className='container'>
      <NextSeo title={post.title} description={post.description} openGraph={ogTags} />
      <article className='max-w-4xl mx-auto mt-2 md:mt-10'>
        <div className='space-y-3 flex flex-col'>
          <BackButton backToPath='/blogs' label='Back to Blogs' />
          <h1 className='text-3xl md:text-5xl font-extrabold text-abide-dark dark:text-abide-light'>
            {post.title}
          </h1>
        </div>
        <ByLine publishedAt={post.publishedAt} timeToRead={post.timeToRead} />
        <ShareButtons />
        <figure className='my-10'>
          <div className='aspect-video relative mb-5 bg-center rounded-xl overflow-hidden'>
            <Image
              src={post.bannerUrl}
              alt={post.title}
              layout='fill'
              className='object-cover object-center rounded-xl'
              placeholder='blur'
              blurDataURL={post.bannerUrl}
            />
          </div>
        </figure>
        <div className='max-w-3xl w-full mx-auto prose prose-lg md:prose-xl prose-blockquote:border-abide-accent prose-blockquote:py-3 prose-blockquote:bg-abide-lighter md:text-justify dark:prose-invert dark:prose-blockquote:bg-abide-dark'>
          <MDXContent />
        </div>
      </article>
      <div className='max-w-4xl mx-auto my-10 border-t pt-6 dark:border-abide-dark'>
        <div className='space-y-3'>
          <h4 className='text-3xl lg:text-4xl font-extrabold text-abide-dark dark:text-abide-light'>
            If you like this article,
          </h4>
          <p className='text-lg lg:text-xl text-zinc-700 font-semibold dark:text-abide-mediumGray'>
            For sure you will love these ones as well
          </p>
        </div>
        <div className='my-10 grid lg:grid-cols-3 gap-6'>
          {nextPosts.map((post) => (
            <PostCard key={post._id} post={post} isSmall minimal />
          ))}
        </div>
      </div>
    </section>
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
  const selectedNextPosts = shuffledPosts.slice(0, 3);

  return {
    props: {
      post: currentPost,
      nextPosts: selectedNextPosts,
    },
  };
};

export default BlogPost;
