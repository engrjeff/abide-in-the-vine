import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import MobileNav from "./MobileNav";

const MobileMenuButton = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (open: boolean) => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    setMobileMenuOpen(open);
  };

  return (
    <div className='block md:hidden'>
      <button
        className='p-2 rounded-full hover:bg-white/10'
        onClick={() => toggleMobileMenu(true)}
      >
        <span className='sr-only'>
          {mobileMenuOpen ? "close" : "open"} menu
        </span>
        <Bars3Icon className='w-5 h-5' />
      </button>
      <MobileNav
        isMenuOpen={mobileMenuOpen}
        onLinkClick={() => toggleMobileMenu(false)}
      />
    </div>
  );
};

export default MobileMenuButton;
