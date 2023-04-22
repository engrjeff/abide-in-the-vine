import Image from "next/image";
import Link from "next/link";

import type { PostWithoutBody } from "@api/contentFetchFunctions";
import { cn } from "@utils/helpers";

function PostCard({
  post,
  simple = false,
}: {
  post: PostWithoutBody;
  simple?: boolean;
}) {
  const contentClasses = cn(
    "space-y-4 md:space-y-6 p-8 border-x border-b border-gray-200 dark:border-gray-800 rounded-b-lg overflow-hidden flex-1 flex flex-col",
    {
      "px-4 py-4": simple,
    }
  );

  return (
    <div className='cursor-pointer group w-full bg-white dark:bg-slate-950 overflow-hidden rounded-lg flex flex-col'>
      <Link
        href={post.url}
        className='group relative flex aspect-video overflow-hidden'
      >
        <Image
          src={post.bannerUrl}
          alt={post.title}
          fill
          placeholder='blur'
          blurDataURL={post.bannerUrl}
          className='object-cover object-center transition-transform duration-300 group-hover:scale-105 rounded-t-lg'
        />
        <div className='absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/50'></div>
      </Link>
      <div className={contentClasses}>
        <span className='py-0.5 text-sm font-medium uppercase tracking-wide text-brand-primary'>
          {post.tags.join(" , ")}
        </span>
        <div className='space-y-3'>
          <Link href={post.url}>
            <h3 className='text-xl font-bold hover:text-brand-primary group-hover:text-brand-primary '>
              {post.title}
            </h3>
          </Link>
          {simple ? null : (
            <p className='line-clamp-4 text-brand-gray500 dark:text-brand-coolnavy200'>
              {post.description}
            </p>
          )}
        </div>
        <div className='space-x-1 space-y-3 text-xs font-semibold uppercase tracking-widest text-brand-gray500 dark:text-brand-coolnavy200'>
          <span>{post.publishedAt}</span>
          <span className='text-brand-primary'>&mdash;</span>
          <span>{post.timeToRead}</span>
        </div>
        {simple ? null : (
          <Link
            href={post.url}
            className='group inline-block text-brand-primary mt-auto'
          >
            Read More <span className='sr-only'>On {post.title}</span>
            <span className='inline-block transition-transform group-hover:translate-x-1'>
              &rarr;
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default PostCard;
