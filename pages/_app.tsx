import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

import Header from "../components/Header";
import { abide } from "@utils/constants";
import Footer from "@components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <div
        className={`font-sans text-brand-black dark:bg-brand-coolnavy900 dark:text-white`}
      >
        <Head>
          <title>
            Abide in the Vine - Finding yoy in Christ and having Christ as joy
          </title>
          <meta name='description' content={abide.desc} />
        </Head>
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
