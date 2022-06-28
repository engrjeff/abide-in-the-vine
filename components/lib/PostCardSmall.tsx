import Image from "next/image";
import Link from "next/link";

import type { Post } from "@utils/types";

import PostTag from "./PostTag";

const PostCardSmall = ({ post }: { post: Post }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-y-4 md:gap-4'>
      <div className='aspect-video relative col-span-2'>
        <Image
          src={post.bannerUrl}
          alt={post.banner.alternativeText || post.banner.caption}
          layout='fill'
          className='object-cover object-center rounded-xl'
          placeholder='blur'
          blurDataURL={post.blurImageUrl}
        />
      </div>
      <div className='col-span-3 flex flex-col self-start gap-y-3'>
        <Link href={`/blogs/${post.slug}`}>
          <a className='text-2xl lg:text-[22px] lg:leading-tight font-black text-abide-dark inline-block hover:underline dark:text-abide-light'>
            {post.title}
          </a>
        </Link>
        <div className='mt-auto flex gap-2 flex-wrap'>
          {post.tags.map((tag) => (
            <PostTag key={tag.id} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCardSmall;
