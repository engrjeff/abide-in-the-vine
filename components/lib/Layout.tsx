import { ReactNode } from "react";
import { NextSeo } from "next-seo";

import Header from "@components/lib/Header";
import Footer from "@components/lib/Footer";
import MessageUsSection from "./MessageUsSection";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NextSeo
        title='Abide in the Vine'
        description='Having Christ as joy and finding joy in Christ'
      />
      <Header />
      <main className='dark:bg-abide-darkestGray pt-8'>
        {children}
        <MessageUsSection />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
