// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
var Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: "posts/*.mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    description: {
      type: "string",
      description: "The description or excerpt of the post",
      required: true
    },
    bannerUrl: {
      type: "string",
      description: "The url of the banner for the post",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: true
    },
    publishedAt: {
      type: "string",
      description: "The date when the post was published",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, "")
    },
    url: {
      type: "string",
      resolve: (post) => `/blogs/${post._raw.sourceFileName.replace(/\.mdx$/, "")}`
    },
    timeToRead: {
      type: "string",
      resolve: (post) => readingTime(post.body.raw).text
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-VLYHMPML.mjs.map
