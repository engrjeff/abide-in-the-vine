import { menuItems } from "@utils/constants";
import Link from "next/link";

interface MobileNavProps {
  isMenuOpen: boolean;
  onLinkClick: () => void;
}

const MobileNav = ({ isMenuOpen, onLinkClick }: MobileNavProps) => {
  return (
    <div
      className={`fixed left-0 top-0 z-30 mt-[79px] h-screen w-full border-t bg-white transition duration-200 ease-out dark:border-slate-700 dark:bg-brand-coolnavy900 md:mt-[80px] lg:hidden ${
        isMenuOpen ? "block" : "hidden"
      }`}
    >
      <ul onClick={onLinkClick}>
        {menuItems.map((menu) => (
          <li
            key={menu.label}
            className='border-b hover:bg-gray-100 dark:border-slate-700 dark:hover:bg-brand-coolnavy800'
          >
            <Link
              href={menu.path}
              className='container mx-auto flex p-6 text-lg text-abide-dark dark:text-abide-light'
            >
              {menu.label}
            </Link>
          </li>
        ))}
        <li className='border-b hover:bg-gray-100 dark:border-slate-700 dark:hover:bg-brand-coolnavy800'>
          <Link
            href='/the-gospel'
            className='container mx-auto flex p-6 text-lg'
          >
            The Gospel
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
