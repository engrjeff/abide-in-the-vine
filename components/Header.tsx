import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@utils/helpers";

import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import ArticleScrollIndicator from "./ScrollIndicator";
import MobileMenuButton from "./MobileMenuButton";
import MobileNav from "./MobileNav";

function Header() {
  const [onTop, setOnTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    document.body.classList.toggle("overflow-hidden");
    setMobileMenuOpen((prev) => !prev);
  };

  const headerClasses = cn(
    "flex md:grid md:grid-cols-3 items-center px-3 lg:px-16 shadow sticky top-0 py-4 z-30 bg-white transition-all dark:bg-brand-coolnavy900 dark:text-white dark:border-b dark:border-slate-700",
    {
      "h-20 md:h-32": onTop,
      "h-20": !onTop,
    }
  );

  useEffect(() => {
    const scrollCallback = () => {
      const scrolledFromTop = window.scrollY;
      setOnTop(scrolledFromTop <= 0);
    };
    window.addEventListener("scroll", scrollCallback);
    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, []);

  return (
    <header className={headerClasses}>
      <Link
        href='/'
        className='flex items-center gap-4 text-sm font-bold md:text-xl'
      >
        <Image
          src='/abide-logo.png'
          alt='Abide in the Vine'
          width={36}
          height={36}
          className='h-7 w-7 object-cover object-center md:h-9 md:w-9'
          aria-hidden='true'
        />
        Abide in the Vine
      </Link>
      <NavLinks />
      <MobileNav isMenuOpen={mobileMenuOpen} onLinkClick={toggleMobileMenu} />
      <div className='ml-auto flex items-center space-x-4 justify-self-end'>
        <Link
          href='/the-gospel'
          className='hidden rounded-full bg-brand-primary bg-opacity-95 px-6 py-2 font-medium text-white shadow-lg hover:bg-opacity-100 focus:shadow-sm md:inline'
        >
          The Gospel
        </Link>
        <ThemeToggle />
        <MobileMenuButton
          onMenuToggle={toggleMobileMenu}
          isMenuOpen={mobileMenuOpen}
        />
      </div>
      <ArticleScrollIndicator />
    </header>
  );
}

export default Header;
