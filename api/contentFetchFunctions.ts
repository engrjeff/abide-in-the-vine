import {
  type Post,
  allPosts,
  type Gospel,
  allGospels,
} from "@contentlayer/generated";
import { formatDate } from "@utils/helpers";
import { compareDesc } from "date-fns";

export type PostWithoutBody = Omit<Post, "body">;

/**
 *
 * @param start the index at which the slice should start
 * @param n the number of posts to return
 * @returns Post array without body
 */
export default function getSortedPosts(
  start: number = 0,
  n?: number
): PostWithoutBody[] {
  return allPosts
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    })
    .slice(start, n ? n : allPosts.length)
    .map<Omit<Post, "body">>((post) => ({
      _id: post._id,
      _raw: post._raw,
      bannerUrl: post.bannerUrl,
      description: post.description,
      publishedAt: formatDate(post.publishedAt),
      slug: post.slug,
      tags: post.tags,
      timeToRead: post.timeToRead,
      title: post.title,
      url: post.url,
      type: post.type,
    }));
}

export function getUniqueTagsFromPosts(posts: PostWithoutBody[]) {
  const tags = posts.map((post) => post.tags).flat();
  const uniqueTags = Array.from(new Set(tags));
  return uniqueTags;
}

export async function getPostBySlug(slug: string) {
  const post = await allPosts.find((p) => p.slug === slug);
  return post;
}

// Gospel
export function getGospelContent() {
  return allGospels[0];
}
