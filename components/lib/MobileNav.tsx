import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { menuItems } from "@utils/constants";
import Link from "next/link";

interface MobileNavProps {
  isMenuOpen: boolean;
  onThemeToggle: () => void;
  isDark: boolean;
}

const MobileNav = ({ isMenuOpen, onThemeToggle, isDark }: MobileNavProps) => {
  return (
    <div
      className={`lg:hidden fixed top-20 left-0 w-full z-10 bg-white dark:bg-abide-darkestGray h-screen border-t dark:border-abide-darkGray transition duration-200 ease-out ${
        isMenuOpen ? "block" : "hidden"
      }`}
    >
      <ul>
        {menuItems.map((menu) => (
          <li
            key={menu.label}
            className='border-b hover:bg-gray-100 dark:hover:bg-abide-darkGray/20 dark:border-abide-darkGray'
          >
            <Link href={menu.path}>
              <a className='container mx-auto flex p-6 text-lg text-abide-dark dark:text-abide-light'>
                {menu.label}
              </a>
            </Link>
          </li>
        ))}
        <li className='border-b hover:bg-gray-100 dark:hover:bg-abide-darkGray/20 dark:border-abide-darkGray'>
          <Link href='/gospel'>
            <a className='container mx-auto flex p-6 text-lg'>The Gospel</a>
          </Link>
        </li>
      </ul>
      <div className='py-6 flex justify-center'>
        <button
          onClick={onThemeToggle}
          className='px-8 py-4 border-2 border-abide-dark/50 dark:border-abide-darkGray dark:hover:bg-abide-darkGray/20 rounded-full flex items-center justify-center gap-3 text-abide-dark dark:text-abide-mediumGray'
        >
          {isDark ? <SunIcon className='h-6 w-6' /> : <MoonIcon className='h-6 w-6' />}
          Switch to {isDark ? "light" : "dark"} mode
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
