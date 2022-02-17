import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Post } from "@utils/types";

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
  const OGImg = meta ? meta.banner.url : "/assets/abide-in-the-vine.png";
  const OGImgAlt = meta ? meta.title : "Abide in the Vine";
  const OGDesc = meta
    ? meta.description
    : "Having Christ as joy and finding joy in Christ.";
  return (
    <>
      <Head>
        <title>{title ? title : "Abide in the Vine"}</title>
        <meta property='og:type' content='article' />
        <meta property='og:url' content={OGUrl} />
        <meta property='og:title' content={OGTitle} />
        <meta property='og:description' content={OGDesc} />
        <meta property='og:image' content={OGImg} />
        <meta property='og:image:alt' content={OGImg} />
        <meta property='og:site_name' content={OGImgAlt} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
