import SectionTitle from "./SectionTitle";
import PostCard from "./PostCard";
import PostCardSmall from "./PostCardSmall";

import type { Post } from "@utils/types";
import Link from "next/link";

const FeaturedPostsSection = ({ posts }: { posts: Post[] }) => {
  return (
    <section className='container py-6'>
      <SectionTitle title='Featured Posts' />
      <div className='grid grid-cols-5 gap-8'>
        <div className='col-span-5 lg:col-span-3 mb-8 lg:mb-0'>
          <PostCard post={posts[0]} />
          <Link href={`/blogs/${posts[0].slug}`}>
            <a className='btn-cta mt-4 inline-block'>Read Now</a>
          </Link>
        </div>
        <div className='col-span-5 lg:col-span-2 space-y-8'>
          {posts.slice(1).map((post) => (
            <PostCardSmall key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPostsSection;
