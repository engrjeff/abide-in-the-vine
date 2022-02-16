import React from "react";
import Image from "next/image";
import Link from "next/link";

import Tag from "./Tag";
import { Post } from "@utils/types";
import { formatDate } from "@utils/helpers";

interface PostCardProps {
  post: Post;
}

const PostCard = (props: PostCardProps) => {
  const { post } = props;
  const banner = post.banner.formats.small || post.banner;
  return (
    <Link href={`/blogs/${post.slug}`}>
      <a className='postcard flex flex-col'>
        <div>
          <Image
            src={banner.url}
            alt={post.title}
            width={banner.width}
            height={300}
          />
        </div>
        <div className='py-4 px-6 space-y-2'>
          <h6 className='text-abide-dark text-2xl font-extrabold'>
            {post.title}
          </h6>
          <span className='uppercase tracking-[2px] text-xs text-abide-gray'>
            {formatDate(post.createdAt)}
          </span>
          <p className='text-abide-gray line-clamp-4'>{post.description}</p>
        </div>
        <div className='px-6 pb-6 space-y-2 mt-auto'>
          <span className='uppercase tracking-[2px] text-xs text-abide-gray'>
            Tags
          </span>
          <div className='flex flex-wrap gap-1'>
            {post.tags.map((tag) => (
              <Tag key={tag.id} label={tag.name} />
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;
