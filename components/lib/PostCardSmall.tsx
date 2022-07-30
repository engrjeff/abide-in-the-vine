import Image from "next/image";
import Link from "next/link";

import type { Post } from "@utils/types";

import PostTag from "./PostTag";

const PostCardSmall = ({ post }: { post: Post }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='aspect-video relative rounded-xl overflow-hidden'>
        <Image
          src={post.bannerUrl}
          alt={post.banner.alternativeText || post.banner.caption}
          layout='fill'
          className='object-cover object-center'
          placeholder='blur'
          blurDataURL={post.bannerUrl}
        />
      </div>
      <div className='flex flex-col self-start gap-y-3'>
        <Link href={`/blogs/${post.slug}`}>
          <a className='text-2xl lg:text-lg lg:leading-tight font-black text-abide-dark inline-block hover:underline dark:text-abide-light'>
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
