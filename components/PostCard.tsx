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
  const contentClasses = cn("space-y-6 p-8", { "p-0 py-4": simple });

  return (
    <div className='group w-full bg-white dark:bg-brand-coolnavy900 dark:ring-offset-brand-coolnavy900'>
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
          className='object-cover object-center transition-transform duration-300 group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/50'></div>
      </Link>
      <div className={contentClasses}>
        <span className='whitespace-nowrap py-0.5 text-sm font-medium uppercase tracking-wide text-brand-primary'>
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
            className='group inline-block text-brand-primary'
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
