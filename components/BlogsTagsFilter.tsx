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
    <div className='flex md:gap-x-6 my-4 md:my-5 flex-col md:flex-row'>
      <p className='filter-label mb-2 md:mb-0'>Tags</p>
      <div className='flex gap-2 md:gap-3 flex-wrap'>
        {tags.map((tag) => (
          <button
            aria-label={tag.name}
            key={tag.id}
            className={`filter-tag ${
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
