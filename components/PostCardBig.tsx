import Image from "next/image";
import Link from "next/link";

import type { PostWithoutBody } from "@api/contentFetchFunctions";

function PostCardBig({ post }: { post: PostWithoutBody }) {
  return (
    <div className='flex w-full flex-col md:flex-row overflow-hidden'>
      <div className='group relative aspect-video flex-1 rounded-lg overflow-hidden'>
        <Image
          src={post.bannerUrl}
          alt={post.title}
          fill
          placeholder='blur'
          blurDataURL={post.bannerUrl}
          className='object-cover object-center transition-transform duration-300 group-hover:scale-105 rounded-lg'
        />
        <div className='absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/50'></div>
      </div>
      <div className='flex-1 space-y-6 py-6 md:p-6'>
        <div className='px-4'>
          <span className='whitespace-nowrap py-0.5 text-sm font-medium uppercase tracking-wide text-brand-primary'>
            {post.tags.join(" , ")}
          </span>
        </div>
        <div className='space-y-3 px-4'>
          <Link href={post.url}>
            <h3 className='text-2xl font-bold hover:text-brand-primary'>
              {post.title}
            </h3>
          </Link>
          <p className='line-clamp-4 text-brand-gray500 dark:text-gray-400'>
            {post.description}
          </p>
        </div>
        <div className='space-x-1 space-y-3 px-4 text-xs font-semibold uppercase tracking-widest text-brand-gray500 dark:text-gray-400'>
          <span>{post.publishedAt}</span>
          <span className='text-brand-primary'>&mdash;</span>
          <span>{post.timeToRead}</span>
        </div>
        <div className='px-4'>
          <Link href={post.url} className='group text-brand-primary'>
            Read More{" "}
            <span className='inline-block transition-transform group-hover:translate-x-1'>
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCardBig;
