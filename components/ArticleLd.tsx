import React from "react";
import { ArticleJsonLd } from "next-seo";
import { Post } from "@utils/types";
import { abide } from "@utils/constants";

interface ArticleLdProps {
  article: Post;
}

const ArticleLd = ({ article }: ArticleLdProps) => {
  return (
    <ArticleJsonLd
      type='Blog'
      url={`${abide.siteUrl}/blogs/${article.slug}`}
      title={article.title}
      images={[article.banner.url]}
      datePublished={article.publishedAt.toString()}
      dateModified={article.createdAt.toString()}
      authorName='Jeff Segovia'
      description={article.description}
      publisherName='Jeff Segovia'
      publisherLogo={abide.bannerUrl}
      key={article.slug}
    />
  );
};

export default ArticleLd;
