import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { title, children } = props;
  return (
    <>
      <Head>
        <title>{title ? title : "Abide in the Vine"}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
