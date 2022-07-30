import Image from "next/image";
import Link from "next/link";
import type { Post } from "@utils/types";

import PostTag from "./PostTag";
import ByLine from "./ByLine";

interface PostCardProps {
  post: Post;
  isSmall?: boolean;
  minimal?: boolean;
}

const PostCard = ({ isSmall, post, minimal = false }: PostCardProps) => {
  return (
    <div>
      <div className='aspect-video relative bg-center rounded-xl overflow-hidden'>
        <Image
          src={post.bannerUrl}
          alt={post.banner.alternativeText || post.banner.caption}
          layout='fill'
          className='object-cover object-center rounded-xl'
          placeholder='blur'
          blurDataURL={post.bannerUrl}
        />
      </div>
      {!minimal && (
        <div className='flex flex-wrap gap-2 mt-5'>
          {post.tags.slice(0, 3).map((tag) => (
            <PostTag key={tag.id} tag={tag} />
          ))}
        </div>
      )}
      <Link href={`/blogs/${post.slug}`}>
        <a
          className={`${
            isSmall ? "text-2xl" : "text-3xl md:text-4xl"
          } font-black text-abide-dark my-4 inline-block hover:underline dark:text-abide-light`}
        >
          {post.title}
        </a>
      </Link>

      {!minimal && (
        <>
          <p
            className={`${
              isSmall ? "prose" : "prose-lg"
            } text-gray-700 mb-4 dark:text-abide-mediumGray text-truncate`}
          >
            {post.description}
          </p>
          <ByLine publishedAt={post.publishedAt} />
        </>
      )}
    </div>
  );
};

export default PostCard;
