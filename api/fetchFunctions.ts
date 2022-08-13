import qs from "qs";
import type { CMSPostResponse, CMSTagResponse, Post, Tag } from "@utils/types";
import { transformPostResponse, transformTagResponse } from "@utils/helpers";
import { API_URL } from "@utils/constants";

export const fetchPosts = async (start: number, limit: number) => {
  const query = qs.stringify(
    {
      fields: ["title", "slug", "description", "publishedAt"],
      populate: ["tags", "banner"],
      sort: ["publishedAt:desc"],
      pagination: {
        start,
        limit,
      },
    },
    { encodeValuesOnly: true }
  );

  const response = await fetch(`${API_URL}/api/posts?${query}`);
  const jsonDoc: CMSPostResponse = await response.json();

  return transformPostResponse(jsonDoc);
};

export const fetchTags = async () => {
  const tagResponse = await fetch(`${API_URL}/api/tags?sort=createdAt:desc`);
  const tagsJsonDoc: CMSTagResponse = await tagResponse.json();
  return transformTagResponse(tagsJsonDoc);
};
