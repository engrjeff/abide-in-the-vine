import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

import SectionTitle from "@components/SectionTitle";
import PostCard from "@components/PostCard";
import AppButton from "@components/AppButton";
import SectionContainer from "@components/SectionContainer";

import { Post } from "@utils/types";

interface MorePostsProps {
  posts: Post[];
}

const MorePosts = (props: MorePostsProps) => {
  const { posts } = props;

  const router = useRouter();

  const goToBlogs = () => router.push("/blogs");

  return (
    <SectionContainer>
      <section className='my-16'>
        <SectionTitle title='More Posts' />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
          {posts.slice(0, 3).map((post: any) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className='my-12 flex items-center justify-center'>
          <AppButton onClick={goToBlogs}>
            More <ArrowRightIcon className='h-5 w-5' />
          </AppButton>
        </div>
      </section>
    </SectionContainer>
  );
};

export default MorePosts;
