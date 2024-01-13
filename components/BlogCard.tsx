import { type PostWithoutBody } from '@api/contentFetchFunctions';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import AppImage from './AppImage';
import ByLine from './ByLine';
import ShareButtons from './ShareButtons';
import TagLink from './TagLink';

function BlogCard({ post }: { post: PostWithoutBody }) {
  return (
    <article className="flex flex-col">
      <div className="relative aspect-video rounded-tr-lg rounded-tl-lg overflow-hidden">
        <AppImage
          src={post.bannerUrl}
          blurDataURL={post.bannerUrl}
          alt={post.title}
          fill
          className="w-full h-full"
        />
      </div>
      <div className="border border-t-0 rounded-b-lg flex-1 flex flex-col">
        <div className="flex-1 p-6 lg:p-10 space-y-3 md:space-y-5">
          <div className="flex items-center gap-2">
            <ByLine />
            <span className="text-accent">&mdash;</span>
            <span className="text-sm text-muted">{post.timeToRead}</span>
          </div>
          <div className="flex gap-2 items-center flex-wrap mt-6">
            {post.tags.map((tag) => (
              <TagLink key={tag} tag={tag} />
            ))}
          </div>
          <h2 className="text-xl md:text-3xl font-bold transition-colors hover:text-accent">
            <Link href={post.url}>{post.title}</Link>
          </h2>
          <p className="line-clamp-3 text-sm lg:text-base text-muted">
            {post.description}
          </p>
          <span className="text-xs text-muted inline-block">
            Posted on {post.publishedAt}
          </span>
        </div>
        <div className="py-4 lg:py-6 mx-6 lg:mx-10 border-t">
          <div className="flex justify-between gap-4">
            <ShareButtons url={post.url} />
            <Link
              href={post.url}
              className="flex items-center font-semibold group text-sm lg:text-base hover:text-accent transition-colors"
            >
              Continue reading <span className="sr-only">{post.title}</span>{' '}
              <span className="transition-transform group-hover:translate-x-1">
                <ChevronRightIcon className="h-4 w-4 ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
