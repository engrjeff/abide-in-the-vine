import React from "react";
import Link from "next/link";
import { ExternalLinkIcon } from "@heroicons/react/solid";

import SectionTitle from "./SectionTitle";
import TagUI from "./Tag";
import { Post, Tag } from "@utils/types";

interface RelatedPostsProps {
  tags: Tag[];
  relatedPosts: Post[];
}

const RelatedPosts = (props: RelatedPostsProps) => {
  const { tags, relatedPosts } = props;

  return (
    <div className='col-span-12 md:col-span-4 pt-6 md:mt-3 md:border-l md:border-abide-light md:pl-6'>
      <SectionTitle title='Related Posts' />
      <div className='space-y-4 mt-5'>
        <p className='filter-label'>Tags</p>
        <div className='flex gap-2 flex-wrap'>
          {tags.map((tag) => (
            <TagUI key={tag.id} label={tag.name} />
          ))}
        </div>
      </div>
      <ul role='list' className='py-6'>
        {relatedPosts.map((p) => (
          <li key={p.id} className='py-4 group border-b border-abide-light'>
            <Link passHref href={`/blogs/${p.slug}`}>
              <a
                className='abide-article text-base'
                aria-label={"Read " + p.title}
              >
                <div className='flex items-center'>
                  <h5 className='text-lg font-semibold w-[80%]'>{p.title}</h5>
                  <span className='text-abide-gray ml-auto self-start hidden group-hover:inline duration-150'>
                    <ExternalLinkIcon className='h5 w-5' />
                  </span>
                </div>
                <p className='line-clamp-2'>{p.description}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedPosts;
