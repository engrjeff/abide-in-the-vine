import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import qs from "qs";

import Layout from "@components/Layout";
import Article from "@components/Article";
import { CMSPostResponse, Post } from "@utils/types";
import { transformPostResponse } from "@utils/helpers";
import SectionContainer from "@components/SectionContainer";
import Tag from "@components/Tag";
import SectionTitle from "@components/SectionTitle";
import { API_URL } from "@utils/constants";

interface IUrlQueryParams extends ParsedUrlQuery {
  slug: string;
}

interface BlogPostProps {
  post: Post;
  nextPost: Post;
}

const BlogPost: NextPage<BlogPostProps> = (props) => {
  const { post, nextPost } = props;

  const nextBanner = nextPost.banner.formats.small || nextPost.banner;

  return (
    <Layout title={post.title} articleMetaData={post}>
      <SectionContainer className='my-32 flex flex-col items-center'>
        <Article post={post} />
        <div className='space-y-4 border-t border-abide-light mt-14 pt-6 max-w-[80ch]'>
          <SectionTitle title='Next Post' />
          <Link href={`/blogs/${nextPost.slug}`}>
            <a className='flex flex-col-reverse md:flex-row gap-x-4 border border-abide-light postcard no-underline'>
              <div className='p-6 flex flex-col'>
                <div className='font-article space-y-4 max-w-[500px]'>
                  <h5 className='text-abide-dark text-2xl font-extrabold'>
                    {nextPost.title}
                  </h5>
                  <p className='text-abide-gray text-justify'>
                    {nextPost.description}
                  </p>
                </div>
                <div className='flex gap-2 flex-wrap mt-5'>
                  {nextPost.tags.map((tag) => (
                    <Tag key={tag.id} label={tag.name} />
                  ))}
                </div>
              </div>
              <Image
                src={nextBanner.url}
                alt={nextPost.title}
                width={nextBanner.width}
                height={nextBanner.height}
                placeholder='blur'
                blurDataURL={nextBanner.url}
              />
            </a>
          </Link>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${API_URL}/api/posts`);
  const posts: CMSPostResponse = await response.json();

  const paths = posts.data.map((post) => ({
    params: { slug: post.attributes.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IUrlQueryParams;

  const postQuery = qs.stringify(
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

  const allPostsQuery = qs.stringify(
    { populate: ["tags", "banner"], sort: ["createdAt:desc"] },
    { encodeValuesOnly: true }
  );

  const response = await fetch(`${API_URL}/api/posts?${postQuery}`);
  const jsonDoc: CMSPostResponse = await response.json();

  const allPostsResponse = await fetch(`${API_URL}/api/posts?${allPostsQuery}`);
  const allJsonDoc: CMSPostResponse = await allPostsResponse.json();

  const posts = transformPostResponse(jsonDoc);
  const allPosts = transformPostResponse(allJsonDoc);

  const currentPostIndex = allPosts.findIndex((p) => p.id === posts[0].id);
  const nextIndex =
    currentPostIndex < allPosts.length - 1 ? currentPostIndex + 1 : 0;
  const nextPost = allPosts[nextIndex];

  return {
    props: {
      post: posts[0],
      nextPost,
    },
  };
};

export default BlogPost;
