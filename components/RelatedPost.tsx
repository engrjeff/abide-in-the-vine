import Image from "next/image";

import { type PostWithoutBody } from "@api/contentFetchFunctions";

function RelatedPost({ post }: { post: PostWithoutBody }) {
  return (
    <div className='group flex items-center gap-4 border rounded-lg p-4'>
      <div className='relative w-[120px] h-[120px]'>
        <Image
          src={post.bannerUrl}
          alt={post.title}
          placeholder='blur'
          blurDataURL={post.bannerUrl}
          fill
          className='w-[120px] h-[120px] object-cover rounded-lg'
        />
      </div>
      <div className='space-y-4'>
        <h5 className='group-hover:text-accent transition-colors font-bold text-lg'>
          {post.title}
        </h5>
        <div className='text-sm text-muted uppercase tracking-wider space-x-1'>
          <span>{post.timeToRead}</span>
          <span className='text-accent'>&mdash;</span>
          <span>{post.publishedAt}</span>
        </div>
      </div>
    </div>
  );
}

export default RelatedPost;
