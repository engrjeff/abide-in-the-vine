import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { SearchIcon, MoonIcon, SunIcon } from "@heroicons/react/outline";

import NavLinks from "./NavLinks";
import MobileMenuButton from "./MobileMenuButton";
import MobileNav from "./MobileNav";
import ArticleScrollIndicator from "./ArticleScrollIndicator";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  const toggleMobileMenu = () => {
    document.body.classList.toggle("overflow-hidden");
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className='shadow-sm h-[64px] md:h-[84px] bg-white z-20 dark:bg-abide-darkestGray fixed top-0 inset-x-0 flex items-center'>
      <nav className='container flex justify-between'>
        <Link href='/'>
          <a className='flex items-center' aria-label='home'>
            <Image
              src='/assets/logo-round.svg'
              alt='Abide in the Vine logo'
              width={30}
              height={24}
            />
            <span className='italic font-bold text-xl ml-3 dark:text-abide-light'>
              Abide in the Vine
            </span>
          </a>
        </Link>
        <NavLinks />
        <MobileNav
          isMenuOpen={mobileMenuOpen}
          onThemeToggle={toggleTheme}
          isDark={isDark}
          onLinkClick={toggleMobileMenu}
        />
        <div className='flex items-center space-x-3'>
          <Link href='/the-gospel'>
            <a className='hidden lg:inline w-max text-white bg-abide-main rounded-full px-5 py-2 font-semibold hover:opacity-95 transition-opacity duration-200'>
              The Gospel
            </a>
          </Link>
          <button
            aria-label='search'
            className='p-2 rounded-full text-abide-dark dark:text-abide-light lg:text-gray-500 dark:lg:text-gray-500 hover:bg-gray-100 dark:hover:bg-abide-dark dark:hover:text-abide-light transition-colors duration-300'
          >
            <SearchIcon className='h-5 w-5 lg:h-6 lg:w-6' />
          </button>
          <button
            aria-label='switch theme'
            onClick={toggleTheme}
            className='hidden lg:block p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-abide-dark dark:hover:text-abide-light transition-colors duration-300'
          >
            {isDark ? (
              <SunIcon className='h-6 w-6' />
            ) : (
              <MoonIcon className='h-6 w-6' />
            )}
          </button>
          <MobileMenuButton
            onMenuToggle={toggleMobileMenu}
            isMenuOpen={mobileMenuOpen}
          />
        </div>
      </nav>
      <ArticleScrollIndicator />
    </header>
  );
};

export default Header;
