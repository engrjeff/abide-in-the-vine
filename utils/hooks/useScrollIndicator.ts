import Router, { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function useScrollIndicator() {
  const scrollIndicatorRef = useRef<HTMLDivElement | null>(null);
  const [scrollIndicatorWidth, setScrollIndicatorWidth] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (
      router.pathname !== "/blogs/[slug]" &&
      router.pathname !== "/the-gospel"
    )
      return setScrollIndicatorWidth(0);

    const onScroll = () => {
      const scroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (scroll / height) * 100;
      setScrollIndicatorWidth(scrolled);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [router.pathname]);

  useEffect(() => {
    if (!scrollIndicatorRef.current) return;

    scrollIndicatorRef.current.style.width = scrollIndicatorWidth + "%";
  }, [scrollIndicatorWidth]);

  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setScrollIndicatorWidth(0);
    });
  }, []);

  return scrollIndicatorRef;
}
