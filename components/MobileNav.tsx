import { XMarkIcon } from "@heroicons/react/24/solid";
import { menuItems } from "@utils/constants";
import { cn } from "@utils/helpers";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import SocialLinks from "./SocialLinks";

interface MobileNavProps {
  isMenuOpen: boolean;
  onLinkClick: () => void;
}

const MobileNav = ({ isMenuOpen, onLinkClick }: MobileNavProps) => {
  return (
    <div className={cn("relative")}>
      <div
        className={cn({
          "fixed inset-0 bg-black/30 backdrop-blur-sm z-[999] transition-colors":
            isMenuOpen,
        })}
      ></div>
      <nav
        className={cn(
          "p-6 fixed flex flex-col inset-y-0 right-0 h-screen w-[70%] bg-background border-l z-[999] translate-x-full transition-transform",
          {
            "translate-x-0": isMenuOpen,
          }
        )}
      >
        <div className='flex items-center justify-between'>
          <div className='flex gap-3 items-center'>
            <Image
              src='/abide-logo.png'
              alt='Abide in the Vine'
              height={24}
              width={24}
            />
            <span className='text-2xl font-semibold'>Abide.</span>
          </div>
          <button
            className='p-2 rounded-full hover:bg-white/10'
            onClick={onLinkClick}
          >
            <span className='sr-only'>Close menu</span>
            <XMarkIcon className='w-5 h-5' />
          </button>
        </div>

        <ul className='mt-6' onClick={onLinkClick}>
          {menuItems.map((menu) => (
            <li key={menu.label} className='py-4 border-b'>
              <NavLink href={menu.path}>{menu.label}</NavLink>
            </li>
          ))}
        </ul>
        <div className='mt-auto'>
          <SocialLinks />
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
