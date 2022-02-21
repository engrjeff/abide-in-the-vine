import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Brand from "./Brand";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [scrollIndicatorWidth, setScrollIndicatorWidth] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== "/blogs/[slug]") return setScrollIndicatorWidth(0);

    const onScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (winScroll / height) * 100;
      setScrollIndicatorWidth(scrolled);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [router.pathname]);

  useEffect(() => {
    if (!navRef.current) return;

    navRef.current.style.width = scrollIndicatorWidth + "%";
  }, [scrollIndicatorWidth]);

  return (
    <nav className='font-main fixed inset-x-0 top-0 bg-white z-20 shadow-md md:shadow-none'>
      <div className='flex items-center container md:mx-auto px-3 md:px-20 py-4'>
        <Brand />
        <NavLinks />
        <MobileMenu />
      </div>
      <div
        ref={navRef}
        className='h-1 bg-abide-accent absolute top-full left-0 z-20'
      />
    </nav>
  );
};

export default Navbar;
