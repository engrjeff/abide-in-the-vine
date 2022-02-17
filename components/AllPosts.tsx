import React, { Fragment, useState } from "react";
import { matchSorter } from "match-sorter";
import {
  ArrowRightIcon,
  SelectorIcon,
  CheckIcon,
} from "@heroicons/react/solid";
import _ from "lodash";

import AppButton from "./AppButton";
import PostCard from "./PostCard";
import SearchInput from "./SearchInput";
import { Post, Tag } from "@utils/types";
import { Listbox, Transition } from "@headlessui/react";

interface AllPostsProps {
  posts: Post[];
  tags: Tag[];
}

const filterOptions = ["Most Recent", "Oldest", "Most Viewed", "Most Shared"];

const AllPosts = (props: AllPostsProps) => {
  const { posts, tags } = props;
  const [search, setSearch] = useState("");
  const [tagFilters, setTagFilters] = useState<string[]>([]);
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);
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
  const sortedPosts = _.orderBy(filteredPosts, ["createdAt"], [sortDirection]);

  const handleTagClick = (tag: string) => {
    if (tagFilters.includes(tag))
      return setTagFilters((tags) => tags.filter((t) => t !== tag));
    setTagFilters((tags) => [...tags, tag]);
  };

  return (
    <div>
      <div className='flex items-center'>
        <div className='hidden md:flex items-center gap-x-6'>
          <p className='filter-label'>Filters</p>
          <div>
            <Listbox value={selectedFilter} onChange={setSelectedFilter}>
              <div className='relative mt-1'>
                <Listbox.Button className='relative w-full py-3 pl-6 pr-14 text-left border text-sm min-w-[162px] border-abide-light rounded-md text-abide-gray font-bold'>
                  <span className='block truncate'>{selectedFilter}</span>
                  <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                    <SelectorIcon
                      className='w-5 h-5 text-gray-400'
                      aria-hidden='true'
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                    {filterOptions.map((option) => (
                      <Listbox.Option
                        key={option}
                        className={({ active }) =>
                          `${
                            active
                              ? "text-abide-main bg-abide-main/10"
                              : "text-abide-dark"
                          }
                          cursor-pointer select-none relative py-2 pl-10 pr-4`
                        }
                        value={option}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`${
                                selected ? "font-medium" : "font-normal"
                              } block truncate`}
                            >
                              {option}
                            </span>
                            {selected ? (
                              <span
                                className={`${
                                  active ? "text-abide-main" : "text-abide-main"
                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                              >
                                <CheckIcon
                                  className='w-5 h-5'
                                  aria-hidden='true'
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
        <div className='ml-none w-full md:w-auto md:ml-auto'>
          <SearchInput search={search} onChange={setSearch} />
        </div>
      </div>
      <div className='flex md:gap-x-6 my-4 md:my-5 flex-col md:flex-row'>
        <p className='filter-label mb-2 md:mb-0'>Tags</p>
        <div className='flex gap-2 md:gap-3 flex-wrap'>
          {tags.map((tag) => (
            <button
              aria-label={tag.name}
              key={tag.id}
              className={`filter-tag ${
                tagFilters.includes(tag.name) ? "active" : ""
              }`}
              onClick={() => handleTagClick(tag.name)}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
        {sortedPosts.slice(0, limit).map((post: any) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      {posts.length >= limit && (
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
