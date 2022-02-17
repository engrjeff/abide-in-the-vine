import React, { useState } from "react";
import { matchSorter } from "match-sorter";
import { ArrowRightIcon } from "@heroicons/react/solid";
import _ from "lodash";

import AppButton from "./AppButton";
import PostCard from "./PostCard";
import SearchInput from "./SearchInput";
import { Post, Tag } from "@utils/types";
import BlogsStatAndTimeFilter from "./BlogsStatAndTimeFilter";
import BlogsTagsFilter from "./BlogsTagsFilter";

interface AllPostsProps {
  posts: Post[];
  tags: Tag[];
}

const AllPosts = (props: AllPostsProps) => {
  const { posts, tags } = props;
  const [search, setSearch] = useState("");
  const [tagFilters, setTagFilters] = useState<string[]>([]);
  const [selectedFilter, setSelectedFilter] = useState("Most Recent");
  const [limit, setLimit] = useState(3);

  let filteredPosts = matchSorter(posts, search, {
    keys: ["title"],
  });

  if (tagFilters.length > 0) {
    filteredPosts = filteredPosts.filter((p) =>
      p.tags.some((tag) => tagFilters.includes(tag.name))
    );
  }

  const sortDirection = selectedFilter === "Most Recent" ? "desc" : "asc";
  const sortedPosts = _.orderBy(
    filteredPosts,
    ["createdAt"],
    [sortDirection]
  ).slice(0, limit);

  return (
    <div>
      <div className='flex items-center'>
        <BlogsStatAndTimeFilter
          selectedFilter={selectedFilter}
          onChange={setSelectedFilter}
        />
        <div className='ml-none w-full md:w-auto md:ml-auto'>
          <SearchInput search={search} onChange={setSearch} />
        </div>
      </div>
      <BlogsTagsFilter
        tags={tags}
        currentTags={tagFilters}
        onChange={setTagFilters}
      />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
        {sortedPosts.length > 0 ? (
          sortedPosts.map((post: any) => <PostCard key={post.id} post={post} />)
        ) : (
          <p className='text-center text-abide-gray font-bold text-lg flex justify-center col-span-3'>
            No results found with the given filter.
          </p>
        )}
      </div>
      {posts.length >= limit && sortedPosts.length > 0 && (
        <div className='my-12 flex items-center justify-center'>
          <AppButton onClick={() => setLimit((prev) => prev + 3)}>
            More <ArrowRightIcon className='h-5 w-5' />
          </AppButton>
        </div>
      )}
    </div>
  );
};

export default AllPosts;
