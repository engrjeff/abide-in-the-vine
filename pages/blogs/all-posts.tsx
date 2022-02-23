import React, { useState } from "react";
import { matchSorter } from "match-sorter";
import { ArrowRightIcon } from "@heroicons/react/solid";
import _ from "lodash";
import { GetStaticProps } from "next";
import qs from "qs";

import { API_URL } from "@utils/constants";
import { CMSPostResponse, CMSTagResponse, Post, Tag } from "@utils/types";
import { transformPostResponse, transformTagResponse } from "@utils/helpers";
import BlogsStatAndTimeFilter from "@components/BlogsStatAndTimeFilter";
import SearchInput from "@components/SearchInput";
import BlogsTagsFilter from "@components/BlogsTagsFilter";
import AppButton from "@components/AppButton";
import PostCard from "@components/PostCard";
import Layout from "@components/Layout";
import SectionContainer from "@components/SectionContainer";
import BlogTabLinks from "@components/BlogTabLinks";

interface AllPostsProps {
  posts: Post[];
  tags: Tag[];
}

const AllPostsPage = (props: AllPostsProps) => {
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

  const resetFilters = () => {
    setTagFilters([]);
    setSearch("");
  };

  const sortDirection = selectedFilter === "Most Recent" ? "desc" : "asc";
  const sortedPosts = _.orderBy(
    filteredPosts,
    ["createdAt"],
    [sortDirection]
  ).slice(0, limit);

  return (
    <Layout title='Christ-centered Blogs | Abide in the Vine'>
      <BlogTabLinks />
      <SectionContainer>
        <div className='flex items-center mb-6'>
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
            sortedPosts.map((post: any) => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <div className='flex flex-col items-center col-span-3 gap-y-6'>
              <p className='text-center text-abide-gray font-bold text-lg'>
                No results found with the given filter.
              </p>
              <AppButton size='medium' onClick={resetFilters}>
                Clear Filter
              </AppButton>
            </div>
          )}
        </div>
        {posts.length >= limit && sortedPosts.length > 0 && (
          <div className='my-12 flex items-center justify-center'>
            <AppButton onClick={() => setLimit((prev) => prev + 3)}>
              More <ArrowRightIcon className='h-5 w-5' />
            </AppButton>
          </div>
        )}
      </SectionContainer>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const query = qs.stringify(
    { populate: ["tags", "banner"], sort: ["createdAt:desc"] },
    { encodeValuesOnly: true }
  );

  const response = await fetch(`${API_URL}/api/posts?${query}`);
  const jsonDoc: CMSPostResponse = await response.json();

  const tagResponse = await fetch(`${API_URL}/api/tags?sort=createdAt:desc`);

  const tagsJsonDoc: CMSTagResponse = await tagResponse.json();

  const posts = transformPostResponse(jsonDoc);
  const tags = transformTagResponse(tagsJsonDoc);

  return {
    props: {
      posts,
      tags,
    },
  };
};

export default AllPostsPage;
