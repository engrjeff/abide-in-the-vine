import { ReactNode, useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import Router from "next/router";
import { CgSpinner } from "react-icons/cg";

import Header from "@components/lib/Header";
import Footer from "@components/lib/Footer";
// import MessageUsSection from "./MessageUsSection";

import { abide } from "@utils/constants";

const Layout = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setLoading(true);
      document.body.classList.add("overflow-hidden");
      document.body.classList.add("lg:mr-2");
    });

    Router.events.on("routeChangeComplete", () => {
      setLoading(false);
      document.body.classList.remove("overflow-hidden");
      document.body.classList.remove("lg:mr-2");
    });
    Router.events.on("routeChangeError", () => {
      setLoading(false);
      document.body.classList.remove("overflow-hidden");
      document.body.classList.remove("lg:mr-2");
    });
  }, []);

  return (
    <>
      <NextSeo
        title='Abide in the Vine'
        description={abide.desc}
        canonical={abide.canonicalUrl}
        facebook={{ appId: abide.fbAppId }}
        openGraph={{
          url: abide.canonicalUrl,
          title: "Abide in the Vine",
          description: abide.desc,
          site_name: "Abide in the Vine",
          images: [
            {
              url: abide.bannerUrl,
              alt: "Abide in the Vine",
            },
          ],
        }}
        twitter={{
          handle: "@engrjeffsegovia",
          site: "Abide in the Vine",
          cardType: "summary_large_image",
        }}
      />
      <Header />
      <main className='dark:bg-abide-darkestGray pt-4 mt-[60px] lg:mt-[84px]'>
        {loading && (
          <div className='fixed inset-0 w-screen h-screen bg-black/50 z-20 flex justify-center'>
            <CgSpinner className='h-10 w-10 text-abide-accent animate-spin mt-20' />
          </div>
        )}
        {children}
        {/* <MessageUsSection /> */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
