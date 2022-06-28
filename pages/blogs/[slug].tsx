import type { NextPage, GetServerSideProps } from "next";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { ParsedUrlQuery } from "querystring";
import { getPlaiceholder } from "plaiceholder";
import qs from "qs";
import ReactMarkdown from "react-markdown";
import readingTime from "reading-time";

import type { CMSPostResponse, Post } from "@utils/types";
import { formatDate, transformPostResponse } from "@utils/helpers";
import { API_URL } from "@utils/constants";
import PostCard from "@components/lib/PostCard";

interface IUrlQueryParams extends ParsedUrlQuery {
  slug: string;
}

interface BlogPostProps {
  post: Post;
  nextPosts: Post[];
}

const BlogPost: NextPage<BlogPostProps> = ({ post, nextPosts }) => {
  const timeToRead = readingTime(post.content).text;

  console.log(nextPosts);

  return (
    <>
      <NextSeo title={post.title} />
      <div className='px-5 md:px-10 max-w-4xl mx-auto mt-2 md:mt-10'>
        <div className='space-y-3'>
          <h1 className='text-3xl md:text-4xl font-extrabold text-abide-dark dark:text-abide-light'>
            {post.title}
          </h1>
        </div>
        <div className='flex items-center gap-4 my-4'>
          <div className='aspect-square relative'>
            <Image
              src='/assets/me.jpg'
              alt='test avatar image'
              width={44}
              height={44}
              className='object-cover object-center rounded-full'
            />
          </div>
          <div>
            <p className='text-gray-600 font-semibold dark:text-abide-mediumGray'>
              By: Jeff Segovia
            </p>
            <div className='text-sm text-gray-600 dark:text-abide-mediumGray'>
              <time>{formatDate(post.publishedAt)}</time> - <span>{timeToRead}</span>
            </div>
          </div>
        </div>
        <figure className='my-10'>
          <div className='aspect-video relative mb-5 bg-center rounded-xl'>
            <Image
              src={post.bannerUrl}
              alt={post.banner.alternativeText || post.banner.caption}
              layout='fill'
              className='object-cover object-center rounded-xl'
              placeholder='blur'
              blurDataURL={post.blurImageUrl}
            />
          </div>
          {/* {post.banner.caption && (
            <span className='block text-center text-abide-dark dark:text-abide-mediumGray'>
              {post.banner.caption}
            </span>
          )} */}
        </figure>
        <div className='max-w-3xl w-full mx-auto'>
          <ReactMarkdown className='prose prose-lg md:prose-xl prose-blockquote:border-abide-accent prose-blockquote:py-3 prose-blockquote:bg-abide-lighter text-justify dark:prose-invert dark:prose-blockquote:bg-abide-dark'>
            {post.content}
          </ReactMarkdown>
        </div>
        <hr className='my-10' />
        <div className='my-10'>
          <div className='space-y-3'>
            <h4 className='text-4xl font-extrabold text-abide-dark dark:text-abide-light'>
              If you like this article,
            </h4>
            <p className='text-xl text-zinc-700 font-semibold dark:text-abide-mediumGray'>
              For sure you will love these ones as well
            </p>
          </div>
          <div className='my-10 grid lg:grid-cols-3 gap-6'>
            {nextPosts.map((post) => (
              <PostCard key={post.id} post={post} isSmall minimal />
            ))}
          </div>
        </div>
      </div>
    </>
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

  const nextQuery = qs.stringify(
    {
      filters: {
        slug: {
          $ne: slug,
        },
      },
      fields: ["title", "slug", "description", "publishedAt"],
      populate: ["tags", "banner"],
      pagination: {
        start: 0,
        limit: 3,
      },
    },
    { encodeValuesOnly: true }
  );

  const response = await fetch(`${API_URL}/api/posts?${query}`);
  const jsonDoc: CMSPostResponse = await response.json();
  const result = transformPostResponse(jsonDoc);

  const currentPost = result[0];
  const { base64 } = await getPlaiceholder(result[0].bannerUrl);

  const nextResponse = await fetch(`${API_URL}/api/posts?${nextQuery}`);
  const nextJsonDoc: CMSPostResponse = await nextResponse.json();
  const nextResults = transformPostResponse(nextJsonDoc);

  const nextPosts = await Promise.all(
    nextResults.map(async (post) => {
      const { base64 } = await getPlaiceholder(post.bannerUrl);

      return {
        ...post,
        blurImageUrl: base64,
      };
    })
  ).then((values) => values);

  return {
    props: {
      post: { ...currentPost, blurImageUrl: base64 },
      nextPosts,
    },
  };
};

export default BlogPost;
