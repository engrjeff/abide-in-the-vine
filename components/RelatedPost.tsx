import Image from "next/image";

import { type PostWithoutBody } from "@api/contentFetchFunctions";

function RelatedPost({ post }: { post: PostWithoutBody }) {
  return (
    <div className='group flex items-center gap-4 border rounded-lg p-2 lg:p-4'>
      <div className='relative w-20 aspect-square lg:w-[120px] lg:h-[120px]'>
        <Image
          src={post.bannerUrl}
          alt={post.title}
          placeholder='blur'
          blurDataURL={post.bannerUrl}
          fill
          className='w-full h-full object-cover object-center rounded-lg'
        />
      </div>
      <div className='space-y-1'>
        <h5 className='group-hover:text-accent transition-colors font-bold text-base lg:text-xl'>
          {post.title}
        </h5>
        <div className='text-xs text-muted uppercase tracking-wider space-y-1 flex flex-col'>
          <span>{post.publishedAt}</span>
          <span>{post.timeToRead}</span>
        </div>
      </div>
    </div>
  );
}

export default RelatedPost;
