import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

import { Poppins, PT_Serif, Montserrat } from "next/font/google";
import Header from "../components/Header";
import { abide } from "@utils/constants";
import Footer from "@components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  variable: "--font-ptserif",
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <div
        className={`${poppins.variable} ${ptSerif.variable} ${montserrat.variable} font-sans text-brand-black dark:bg-brand-coolnavy900 dark:text-white`}
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
