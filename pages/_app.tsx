import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
