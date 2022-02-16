export interface Post {
  id: number | string;
  title: string;
  description: string;
  slug: string;
  content: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  publishedAt: Date | string;
  tags: Tag[];
  banner: Banner;
}

export interface PostResponse {
  id: number | string;
  attributes: {
    title: string;
    description: string;
    slug: string;
    content: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    publishedAt: Date | string;
    tags: TagResponse;
    banner: BannerResponse;
  };
}

export interface CMSPostResponse {
  data: PostResponse[];
  meta: any;
}

export interface CMSTagResponse {
  data: TagResponse["data"];
  meta: any;
}

export interface Tag {
  id: number;
  name: string;
}

export interface TagResponse {
  data: {
    id: number;
    attributes: TagAttributes;
  }[];
}

export interface BannerResponse {
  data: {
    id: number;
    attributes: Banner;
  };
}

export interface TagAttributes {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Banner {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  createdAt: string;
  updatedAt: string;
}

export interface ImageFormats {
  thumbnail?: ImageFormat;
  large?: ImageFormat;
  medium?: ImageFormat;
  small?: ImageFormat;
}

export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: any;
  url: string;
}
