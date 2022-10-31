import Link from 'next/link';

import SectionTitle from './SectionTitle';
import PostCard from './PostCard';
import PostCardSmall from './PostCardSmall';

import type { PostWithoutBody } from '@api/contentFetchFunctions';

const FeaturedPostsSection = ({ posts }: { posts: PostWithoutBody[] }) => {
  return (
    <section className='container py-6'>
      <SectionTitle title='Featured Posts' />
      <div className='grid grid-cols-5 gap-8'>
        <div className='col-span-5 lg:col-span-3 mb-8 lg:mb-0'>
          <PostCard post={posts[0]} />
          <Link href={posts[0].url}>
            <a className='btn-cta mt-4 inline-block'>Read Now</a>
          </Link>
        </div>
        <div className='col-span-5 lg:col-span-2 space-y-8'>
          {posts.slice(1).map((post) => (
            <PostCardSmall key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPostsSection;
