import PostCard from "./PostCard";
import SectionTitle from "./SectionTitle";

import type { Post } from "@utils/types";

const MostRecentPostsSection = ({ posts }: { posts: Post[] }) => {
  return (
    <section className='container mx-auto p-4 lg:p-10 py-6'>
      <SectionTitle title='Most Recent Posts' />
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12'>
        {posts.map((post) => (
          <PostCard key={post.id} isSmall post={post} />
        ))}
      </div>
      <div className='text-center my-12'>
        <button className='btn-cta'>View More Posts</button>
      </div>
    </section>
  );
};

export default MostRecentPostsSection;
