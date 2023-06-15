import { NextSeo } from "next-seo";
import Link from "next/link";
import {
  type GetServerSideProps,
  type InferGetServerSidePropsType,
} from "next";
import {
  PostWithoutBody,
  getAllTags,
  getPostsByTag,
} from "@api/contentFetchFunctions";
import SectionHeading from "@components/SectionHeading";
import BlogCard from "@components/BlogCard";
import TagClouds from "@components/TagClouds";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

function PostsByTagPage({ posts, tags, tag }: Props) {
  return (
    <>
      <NextSeo title='Blogs - Abide in the Vine' />
      <div className='relative'>
        <div className='h-[300px] w-full bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC] text-white md:h-[400px]'>
          <div className='absolute inset-0 flex flex-col justify-center gap-8 bg-black/10 p-6 md:items-center'>
            <h1 className='text-5xl font-extrabold md:text-6xl'>
              <span>Blogs - {tag}</span>
            </h1>
            <p className='text-lg uppercase tracking-wider'>
              Christ-exalting articles related to {tag}
            </p>
          </div>
        </div>
      </div>
      <div className='bg-background py-10'>
        <div className='container max-w-site space-y-10'>
          <div className='flex items-center gap-x-2'>
            <Link className='transition-colors hover:text-accent' href='/'>
              Home
            </Link>
            <span>{">"}</span>
            <Link className='transition-colors hover:text-accent' href='/blogs'>
              Blogs
            </Link>
            <span>{">"}</span>
            <span>{tag}</span>
          </div>
          <SectionHeading title={`Articles about "${tag}"`} />
          <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-2'>
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
          <TagClouds tags={tags} />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  tag: string;
  tags: string[];
  posts: PostWithoutBody[];
}> = async (context) => {
  const { tag } = context.params as { tag: string };

  const posts = getPostsByTag(tag);
  const tags = getAllTags();

  return {
    props: {
      posts,
      tags,
      tag,
    },
  };
};

export default PostsByTagPage;
