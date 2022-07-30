import type { NextPage, GetServerSideProps } from "next";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { ParsedUrlQuery } from "querystring";
import qs from "qs";
import ReactMarkdown from "react-markdown";
import readingTime from "reading-time";

import type { CMSPostResponse, Post } from "@utils/types";
import { transformPostResponse } from "@utils/helpers";
import { abide, API_URL } from "@utils/constants";
import PostCard from "@components/lib/PostCard";
import BackButton from "@components/BackButton";
import ShareButtons from "@components/ShareButtons";
import ByLine from "@components/lib/ByLine";

interface IUrlQueryParams extends ParsedUrlQuery {
  slug: string;
}

interface BlogPostProps {
  post: Post;
  nextPosts: Post[];
}

const BlogPost: NextPage<BlogPostProps> = ({ post, nextPosts }) => {
  const timeToRead = readingTime(post.content).text;

  const ogTags = {
    url: `${abide.canonicalUrl}/blogs/${post.slug}`,
    images: [
      {
        url: post.bannerUrl,
        alt: post.banner.alternativeText || "Abide in the Vine",
      },
    ],
  };

  return (
    <section className='container'>
      <NextSeo
        title={post.title}
        description={post.description}
        openGraph={ogTags}
      />
      <article className='px-5 md:px-10 max-w-4xl mx-auto mt-2 md:mt-10'>
        <div className='space-y-3 flex flex-col'>
          <BackButton backToPath='/blogs' label='Back to Blogs' />
          <h1 className='text-3xl md:text-4xl font-extrabold text-abide-dark dark:text-abide-light'>
            {post.title}
          </h1>
        </div>
        <ByLine publishedAt={post.publishedAt} timeToRead={timeToRead} />
        <ShareButtons />
        <figure className='my-10'>
          <div className='aspect-video relative mb-5 bg-center rounded-xl overflow-hidden'>
            <Image
              src={post.bannerUrl}
              alt={post.banner.alternativeText || post.banner.caption}
              layout='fill'
              className='object-cover object-center rounded-xl'
              placeholder='blur'
              blurDataURL={post.bannerUrl}
            />
          </div>
          {post.banner.caption && (
            <span className='block text-center text-gray-300 dark:text-abide-mediumGray'>
              {post.banner.caption}
            </span>
          )}
        </figure>
        <div className='max-w-3xl w-full mx-auto'>
          <ReactMarkdown className='prose prose-lg md:prose-xl prose-blockquote:border-abide-accent prose-blockquote:py-3 prose-blockquote:bg-abide-lighter text-justify dark:prose-invert dark:prose-blockquote:bg-abide-dark'>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
      <hr className='my-10' />
      <div className='px-5 md:px-10 max-w-4xl mx-auto my-10'>
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
            <PostCard key={post.id} post={post} isSmall minimal />
          ))}
        </div>
      </div>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as IUrlQueryParams;

  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: ["tags", "banner"],
    },
    { encodeValuesOnly: true }
  );

  const response = await fetch(`${API_URL}/api/posts?${query}`);
  const jsonDoc: CMSPostResponse = await response.json();
  const currentPost = transformPostResponse(jsonDoc);

  const nextQuery = qs.stringify(
    {
      filters: {
        slug: {
          $ne: slug,
        },
      },
      fields: ["title", "slug"],
      populate: ["tags", "banner"],
    },
    { encodeValuesOnly: true }
  );

  const nextResponse = await fetch(`${API_URL}/api/posts?${nextQuery}`);
  const nextJsonDoc: CMSPostResponse = await nextResponse.json();
  const nextPosts = transformPostResponse(nextJsonDoc);

  // shuffle the posts and get 3 posts only
  const shuffledPosts = nextPosts.sort(() => 0.5 - Math.random());
  const selectedNextPosts = shuffledPosts.slice(0, 3);

  return {
    props: {
      post: currentPost[0],
      nextPosts: selectedNextPosts,
    },
  };
};

export default BlogPost;
