import { type PostWithoutBody } from "@api/contentFetchFunctions";
import Image from "next/image";
import Link from "next/link";
import ByLine from "./ByLine";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import ShareButtons from "./ShareButtons";

function BlogCard({ post }: { post: PostWithoutBody }) {
  return (
    <div className='flex flex-col'>
      <div className='relative aspect-video rounded-tr-lg rounded-tl-lg overflow-hidden'>
        <Image
          src={post.bannerUrl}
          placeholder='blur'
          blurDataURL={post.bannerUrl}
          alt={post.title}
          fill
          className='w-full h-full'
        />
      </div>
      <div className='border border-t-0 rounded-b-lg flex-1 flex flex-col'>
        <div className='flex-1 p-6 lg:p-10 space-y-3 md:space-y-5'>
          <div className='flex items-center gap-2'>
            <ByLine />
            <span className='text-accent'>&mdash;</span>
            <span className='text-sm text-muted'>{post.publishedAt}</span>
          </div>
          <h2 className='text-xl md:text-3xl font-bold transition-colors hover:text-accent'>
            <Link href={post.url}>{post.title}</Link>
          </h2>
          <p className='line-clamp-3 text-sm lg:text-base text-muted'>
            {post.description}
          </p>
        </div>
        <div className='py-4 lg:py-6 mx-6 lg:mx-10 border-t'>
          <div className='flex justify-between gap-4'>
            <ShareButtons />
            <Link
              href={post.url}
              className='flex items-center font-semibold group text-sm lg:text-base'
            >
              Continue reading <span className='sr-only'>{post.title}</span>{" "}
              <span className='transition-transform group-hover:translate-x-1'>
                <ChevronRightIcon className='h-4 w-4 ml-2' />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
