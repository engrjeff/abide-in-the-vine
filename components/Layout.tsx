import React, { ReactNode } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

import { Post } from "@utils/types";
import { abide } from "@utils/constants";
import ArticleLd from "./ArticleLd";

// framer motion
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

interface LayoutProps {
  title?: string;
  children: ReactNode;
  articleMetaData?: Post;
}

const Layout = (props: LayoutProps) => {
  const { title, children, articleMetaData: meta } = props;
  const appURL = abide.siteUrl;
  const OGTitle = meta ? meta.title : "Abide in the Vine";
  const OGUrl = meta ? `${appURL}/blogs/${meta.slug}` : appURL;
  const OGImg = meta ? meta.banner.url : abide.bannerUrl;
  const OGImgAlt = meta ? meta.title : "Abide in the Vine";
  const OGDesc = meta ? meta.description : abide.desc;
  const appDesc = meta ? meta.tags.map((t) => t.name).join(", ") : abide.desc;
  return (
    <>
      <NextSeo
        defaultTitle='Abide in the Vine'
        title={title ? title : "Abide in the Vine"}
        description={appDesc}
        canonical={abide.canonicalUrl}
        facebook={{ appId: abide.fbAppId }}
        openGraph={{
          url: OGUrl,
          title: OGTitle,
          description: OGDesc,
          site_name: "Abide in the Vine",
          type: meta ? "article" : "website",
          article: meta
            ? {
                publishedTime: meta.publishedAt.toString(),
                modifiedTime: meta.updatedAt.toString(),
                section: "Blogs",
                authors: [abide.author],
                tags: meta.tags.map((t) => t.name),
              }
            : undefined,
          images: [
            {
              url: OGImg,
              alt: OGImgAlt,
            },
          ],
        }}
        twitter={{
          handle: "@engrjeffsegovia",
          site: "Abide in the Vine",
          cardType: "summary_large_image",
        }}
      />
      {meta && <ArticleLd article={meta} />}
      <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        initial='hidden' // Set the initial state to variants.hidden
        animate='enter' // Animated state to variants.enter
        exit='exit' // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
      >
        {children}
      </motion.main>
    </>
  );
};

export default Layout;
