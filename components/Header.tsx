import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@utils/helpers";

import NavLinks from "./NavLinks";
import MobileMenuButton from "./MobileMenuButton";
import MobileNav from "./MobileNav";
import Search from "./Search";
import SocialLinks from "./SocialLinks";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const [onTop, setOnTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    document.body.classList.toggle("overflow-hidden");
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const scrollCallback = () => {
      const scrolledFromTop = window.scrollY;
      setOnTop(scrolledFromTop <= 150);
    };
    window.addEventListener("scroll", scrollCallback);
    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, []);

  return (
    <header className='mb-6'>
      <div className='py-9 border-b container max-w-site hidden md:flex justify-between items-center'>
        <Link href='/' className='flex gap-3 items-center'>
          <Image
            src='/abide-logo.png'
            alt='Abide in the Vine'
            height={24}
            width={24}
          />
          <span className='text-2xl font-semibold'>Abide.</span>
        </Link>
        <SocialLinks />
      </div>
      <div
        className={cn(
          "w-full bg-background transition-transform duration-500 z-[999]",
          {
            "fixed -top-20 translate-y-20 border-b": !onTop,
          },
          {
            "border-b md:border-b-0": onTop,
          }
        )}
      >
        <div className='flex justify-between items-center container max-w-site'>
          <NavLinks />
          <div className='flex gap-3 items-center'>
            <Search />
            <ThemeToggle />
            <MobileMenuButton
              isOpen={mobileMenuOpen}
              onToggle={toggleMobileMenu}
            />
            <MobileNav
              isMenuOpen={mobileMenuOpen}
              onLinkClick={toggleMobileMenu}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
