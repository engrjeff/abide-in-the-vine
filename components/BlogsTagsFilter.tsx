import React from "react";
import { Tag } from "@utils/types";

interface BlogsTagsFilterProps {
  tags: Tag[];
  currentTags: string[];
  onChange: React.Dispatch<React.SetStateAction<string[]>>;
}

const BlogsTagsFilter = (props: BlogsTagsFilterProps) => {
  const { tags, currentTags, onChange } = props;

  const handleTagClick = (tag: string) => {
    if (currentTags.includes(tag))
      return onChange((tags) => tags.filter((t) => t !== tag));
    onChange((tags) => [...tags, tag]);
  };

  return (
    <div className='hidden md:gap-x-6 my-4 md:my-8 flex-col md:flex-row'>
      <p className='text-abide-dark dark:text-abide-light font-bold mb-2 md:mb-0'>
        Tags
      </p>
      <div className='flex gap-x-2 md:gap-x-3 gap-y-3 flex-wrap'>
        {tags.map((tag) => (
          <button
            aria-label={tag.name}
            key={tag.id}
            className={`post-filter-tag ${
              currentTags.includes(tag.name) ? "active" : ""
            }`}
            onClick={() => handleTagClick(tag.name)}
          >
            {tag.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogsTagsFilter;
