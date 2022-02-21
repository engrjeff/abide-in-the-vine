import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import readingTime from "reading-time";
import classnames from "classnames";

import { Post } from "@utils/types";
import { formatDate } from "@utils/helpers";
import CTAButton from "./CTAButton";
import ShareButtons from "./ShareButtons";
import BackButton from "./BackButton";

interface ArticleProps {
  post: Post;
  clamped?: boolean;
}

const Article = (props: ArticleProps) => {
  const { post, clamped } = props;
  const router = useRouter();

  const contentClass = classnames("mt-6", {
    "line-clamp-4": clamped,
  });

  const banner = post.banner.formats.medium || post.banner;
  const timeToRead = readingTime(post.content).text;

  return (
    <article className='abide-article'>
      {router.pathname === "/blogs/[slug]" && (
        <BackButton backToPath={`/blogs/${post.slug}`} label='Back to Blogs' />
      )}
      <div>
        <h4 className='text-3xl font-extrabold text-abide-dark mt-2'>
          {post.title}
        </h4>
        <div className='flex items-center mt-1'>
          <span className='flex uppercase text-abide-gray tracking-wider text-sm mb-8'>
            {formatDate(post.createdAt)}
            &nbsp;|
          </span>
          <span className='flex uppercase text-abide-gray tracking-wider text-sm mb-8'>
            &nbsp; {timeToRead}
          </span>
        </div>
      </div>
      <ShareButtons />
      <Image
        src={banner.url}
        alt={post.title}
        width={banner.width}
        height={banner.height}
        priority
        className='aspect-video'
      />
      <ReactMarkdown className={contentClass}>{post.content}</ReactMarkdown>
      {clamped && (
        <div className='mt-8 not-prose font-main'>
          <CTAButton
            isLink
            href={`/blogs/${post.slug}`}
            text='Continue Reading'
          />
        </div>
      )}
    </article>
  );
};

export default Article;
