import {
  CMSGospelResponse,
  CMSPostResponse,
  CMSTagResponse,
  GospelSection,
  Post,
  Tag,
} from "@utils/types";
import { format } from "date-fns";

export const formatDate = (date: Date | string) => format(new Date(date), "MMMM dd, yyyy");

export const transformPostResponse = (cmsPostResponse: CMSPostResponse) => {
  const posts: Omit<Post, "blurImageUrl">[] = cmsPostResponse.data.map((post) => ({
    id: post.id,
    ...post.attributes,
    tags: post.attributes.tags.data.map((tag) => ({
      id: tag.id,
      name: tag.attributes.name,
    })),
    banner: post.attributes.banner.data.attributes,
    bannerId: post.attributes.banner.data.attributes.provider_metadata.public_id,
    bannerUrl: post.attributes.banner.data.attributes.url,
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

export const transformGospelResponse = (cmsGospelResponse: CMSGospelResponse) => {
  const gospelData: GospelSection[] = cmsGospelResponse.data.map((data) => ({
    id: data.id,
    ...data.attributes,
    banner: data.attributes.sectionImage.data.attributes,
  }));

  return gospelData;
};
