import Image from "next/image";
import Link from "next/link";
import type { Post } from "@utils/types";

import PostTag from "./PostTag";
import { formatDate } from "@utils/helpers";
import { buildImageUrl, extractPublicId } from "cloudinary-build-url";

interface PostCardProps {
  post: Post;
  isSmall?: boolean;
}

const PostCard = ({ isSmall, post }: PostCardProps) => {
  const blurredUrl = buildImageUrl(extractPublicId(post.bannerUrl), {
    cloud: {
      cloudName: "abide-in-the-vine",
    },
    transformations: {
      effect: {
        name: "blur",
        value: 1000,
      },
    },
  });

  return (
    <div>
      <div
        className='aspect-video relative mb-5 bg-center rounded-xl'
        style={{ backgroundImage: `url(${blurredUrl})`, backgroundSize: "100%" }}
      >
        <Image
          src={post.bannerUrl}
          alt={post.banner.alternativeText || post.banner.caption}
          layout='fill'
          className='object-cover object-center rounded-xl'
        />
      </div>
      <div className='flex flex-wrap gap-2'>
        {post.tags.map((tag) => (
          <PostTag key={tag.id} tag={tag} />
        ))}
      </div>
      <Link href='/'>
        <a
          className={`${
            isSmall ? "text-2xl lg:text-3xl" : "text-3xl md:text-4xl"
          } font-black text-abide-dark my-4 inline-block hover:underline dark:text-abide-light`}
        >
          {post.title}
        </a>
      </Link>
      <p
        className={`${
          isSmall ? "prose" : "prose-lg"
        } text-gray-700 mb-4 dark:text-abide-mediumGray text-truncate`}
      >
        {post.description}
      </p>
      <div className='flex items-center gap-4'>
        <div className='aspect-square relative'>
          <Image
            src='/assets/me.jpg'
            alt='test avatar image'
            width={44}
            height={44}
            className='object-cover object-center rounded-full'
          />
        </div>
        <div>
          <p className='text-abide-dark font-extrabold dark:text-abide-light'>Jeff Segovia</p>
          <div className='text-gray-700 text-sm space-x-2 dark:text-abide-mediumGray'>
            <time>{formatDate(post.publishedAt)}</time>
            {/* <span> &bull;</span> */}
            {/* <span>12 min read</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
