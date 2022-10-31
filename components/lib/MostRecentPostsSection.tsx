import Link from 'next/link';

import PostCard from './PostCard';
import SectionTitle from './SectionTitle';

import { PostWithoutBody } from '@api/contentFetchFunctions';

const MostRecentPostsSection = ({ posts }: { posts: PostWithoutBody[] }) => {
  return (
    <section className='container py-6'>
      <SectionTitle title='Most Recent Posts' />
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12'>
        {posts.map((post) => (
          <PostCard key={post._id} isSmall post={post} />
        ))}
      </div>
      <div className='text-center my-12'>
        <Link href='/blogs'>
          <a className='btn-cta inline-block'>View More Posts</a>
        </Link>
      </div>
    </section>
  );
};

export default MostRecentPostsSection;
