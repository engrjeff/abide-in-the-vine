import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import readingTime from "reading-time";
import classnames from "classnames";

import { Post } from "@utils/types";
import { formatDate } from "@utils/helpers";
import AppButton from "./AppButton";
import { useRouter } from "next/router";

interface ArticleProps {
  post: Post;
  clamped?: boolean;
}

const Article = (props: ArticleProps) => {
  const router = useRouter();
  const { post, clamped } = props;

  const contentClass = classnames("mt-6", {
    "line-clamp-4": clamped,
  });

  const banner = post.banner.formats.medium || post.banner;
  const timeToRead = readingTime(post.content).text;

  const goToArticle = () => router.push(`/blogs/${post.slug}`);

  return (
    <article className='abide-article'>
      <div>
        <h4 className='text-3xl font-extrabold text-abide-dark'>
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
      <Image
        src={banner.url}
        alt={post.title}
        width={banner.width}
        height={banner.height}
      />
      <ReactMarkdown className={contentClass}>{post.content}</ReactMarkdown>
      {clamped && (
        <div className='mt-8 not-prose font-main'>
          <AppButton size='medium' onClick={goToArticle}>
            Continue Reading
          </AppButton>
        </div>
      )}
    </article>
  );
};

export default Article;
