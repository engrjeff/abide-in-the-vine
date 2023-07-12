import NProgress from "nprogress";

import "../styles/nprogress.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { NextSeo } from "next-seo";

import Header from "../components/Header";
import { abide } from "@utils/constants";
import Footer from "@components/Footer";
import Head from "next/head";
import ArticleScrollIndicator from "@components/ScrollIndicator";

import { useRouter } from "next/router";
import { useEffect } from "react";

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute='class'>
      <div className={`font-sans relative`}>
        <NextSeo
          title='Abide in the Vine'
          description={abide.desc}
          canonical={abide.siteUrl}
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
        <Head>
          <link
            rel='apple-touch-icon'
            sizes='57x57'
            href='/apple-icon-57x57.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='60x60'
            href='/apple-icon-60x60.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='72x72'
            href='/apple-icon-72x72.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='76x76'
            href='/apple-icon-76x76.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='114x114'
            href='/apple-icon-114x114.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='120x120'
            href='/apple-icon-120x120.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='144x144'
            href='/apple-icon-144x144.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='152x152'
            href='/apple-icon-152x152.png'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-icon-180x180.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='192x192'
            href='/android-icon-192x192.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='/favicon-96x96.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/manifest.json' />
          <meta name='msapplication-TileColor' content='#030711' />
          <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
          <meta name='theme-color' content='#030711' />
          <meta
            name='p:domain_verify'
            content='6c88c4cc6a1719b38b0fa8e04987a153'
          />
        </Head>
        <ArticleScrollIndicator />
        <Header />
        <main className='mt-[72px] lg:mt-0'>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
