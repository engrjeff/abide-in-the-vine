import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { SearchIcon, MoonIcon, SunIcon } from "@heroicons/react/outline";

import NavLinks from "./NavLinks";
import MobileMenuButton from "./MobileMenuButton";
import MobileNav from "./MobileNav";

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
    <header className='px-4 md:px-10 lg:px-14 relative flex items-center py-5 dark:bg-abide-darkestGray'>
      <nav className='container mx-auto flex'>
        <Link href='/'>
          <a className='flex items-center'>
            <Image
              src='/assets/logo-round.svg'
              alt='Abide in the Vine logo'
              width={30}
              height={30}
            />
            <span className='italic font-bold text-2xl ml-3 dark:text-abide-light'>
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
      </nav>
      <div className='flex items-center space-x-3 flex-1'>
        <button className='hidden lg:inline w-max text-white bg-abide-main rounded-full px-5 py-2 font-semibold hover:opacity-95 transition-opacity duration-200'>
          The Gospel
        </button>
        <button
          aria-label='search'
          className='p-2 rounded-full text-abide-dark dark:text-abide-light lg:text-gray-500 dark:lg:text-gray-500 hover:bg-gray-100 dark:hover:bg-abide-dark dark:hover:text-abide-light transition-colors duration-300'
        >
          <SearchIcon className='h-7 w-7 lg:h-6 lg:w-6' />
        </button>
        <button
          aria-label='switch theme'
          onClick={toggleTheme}
          className='hidden lg:block p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-abide-dark dark:hover:text-abide-light transition-colors duration-300'
        >
          {isDark ? <SunIcon className='h-6 w-6' /> : <MoonIcon className='h-6 w-6' />}
        </button>
        <MobileMenuButton onMenuToggle={toggleMobileMenu} isMenuOpen={mobileMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
