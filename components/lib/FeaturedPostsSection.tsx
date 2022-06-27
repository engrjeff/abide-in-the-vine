import SectionTitle from "./SectionTitle";
import PostCard from "./PostCard";
import PostCardSmall from "./PostCardSmall";

import type { Post } from "@utils/types";

const FeaturedPostsSection = ({ posts }: { posts: Post[] }) => {
  return (
    <section className='container mx-auto p-4 lg:p-10 py-6'>
      <SectionTitle title='Featured Posts' />
      <div className='grid grid-cols-5 gap-8'>
        <div className='col-span-5 lg:col-span-3 mb-8 lg:mb-0'>
          <PostCard post={posts[0]} />
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
