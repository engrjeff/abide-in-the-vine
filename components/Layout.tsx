import React, { ReactNode } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import { Post } from "@utils/types";
import { abide } from "@utils/constants";

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
  const appURL = "https://abideinthevine.vercel.app";
  const OGTitle = meta ? meta.title : "Abide in the Vine";
  const OGUrl = meta ? `${appURL}/blogs/${meta.slug}` : appURL;
  const OGImg = meta ? meta.banner.url : abide.bannerUrl;
  const OGImgAlt = meta ? meta.title : "Abide in the Vine";
  const OGDesc = meta ? meta.description : abide.desc;
  const appDesc = meta
    ? meta.tags.map((t) => t.name).join(", ")
    : abide.keywords;
  return (
    <>
      <Head>
        <title>{title ? title : "Abide in the Vine"}</title>
        <meta property='fb:app_id' content={abide.fbAppId} />
        <meta property='og:site_name' content='Abide in the Vine' />
        <meta property='description' content={appDesc} />
        <meta property='og:url' content={OGUrl} />
        <meta property='og:title' content={OGTitle} />
        <meta property='og:description' content={OGDesc} />
        <meta property='og:image' content={OGImg} />
        <meta property='og:image:alt' content={OGImgAlt} />
        <meta name='twitter:title' content={OGTitle} />
        <meta name='twitter:site' content='@engrjeffsegovia' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:description' content={OGDesc} />
        <meta name='twitter:image' content={OGImg} />

        {meta && (
          <>
            <meta property='og:type' content='article' />
            <meta property='article:publisher' content={abide.publisher} />
            <meta property='article:author' content={abide.author} />
            <meta
              property='article:published_time'
              content={meta.publishedAt as string}
            />
            <meta
              property='article:modified_time'
              content={meta.updatedAt as string}
            />
            <meta property='article:section' content='Blogs' />
          </>
        )}
      </Head>
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
