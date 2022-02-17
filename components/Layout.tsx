import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Post } from "@utils/types";
import { abide } from "@utils/constants";

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
        <meta property='og:site_name' content={OGImgAlt} />
        <meta property='description' content={appDesc} />
        <meta property='og:url' content={OGUrl} />
        <meta property='og:title' content={OGTitle} />
        <meta property='og:description' content={OGDesc} />
        <meta property='og:image' content={OGImg} />
        <meta property='og:image:alt' content={OGImg} />

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
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
