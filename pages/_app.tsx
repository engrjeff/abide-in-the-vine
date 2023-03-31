import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { NextSeo } from 'next-seo';

import Header from "../components/Header";
import { abide } from "@utils/constants";
import Footer from "@components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <div
        className={`font-sans text-brand-black dark:bg-brand-coolnavy900 dark:text-white`}
      >
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
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
