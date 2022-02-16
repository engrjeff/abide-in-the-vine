import { CMSPostResponse, CMSTagResponse, Post, Tag } from "@utils/types";
import { format } from "date-fns";

export const formatDate = (date: Date | string) =>
  format(new Date(date), "MMMM dd, yyyy");

export const transformPostResponse = (cmsPostResponse: CMSPostResponse) => {
  const posts: Post[] = cmsPostResponse.data.map((post) => ({
    id: post.id,
    ...post.attributes,
    tags: post.attributes.tags.data.map((tag) => ({
      id: tag.id,
      name: tag.attributes.name,
    })),
    banner: post.attributes.banner.data.attributes,
  }));

  return posts;
};

export const transformTagResponse = (cmsTagResponse: CMSTagResponse) => {
  const tags: Tag[] = cmsTagResponse.data.map((tag) => ({
    id: tag.id,
    name: tag.attributes.name,
    createdAt: tag.attributes.createdAt,
  }));

  return tags;
};
