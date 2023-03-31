import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';

const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: 'posts/*.mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description or excerpt of the post',
      required: true,
    },
    bannerUrl: {
      type: 'string',
      description: 'The url of the banner for the post',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    publishedAt: {
      type: 'string',
      description: 'The date when the post was published',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
    url: {
      type: 'string',
      resolve: (post) => `/blogs/${post._raw.sourceFileName.replace(/\.mdx$/, '')}`,
    },
    timeToRead: {
      type: 'string',
      resolve: (post) => readingTime(post.body.raw).text,
    },
  },
}));

const Gospel = defineDocumentType(() => ({
  name: 'Gospel',
  contentType: 'mdx',
  filePathPattern: 'gospel/*.mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the gospel page',
      required: true,
    },
    description: {
      type: 'string',
      description: 'A short description of the gospel page',
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Gospel],
});
