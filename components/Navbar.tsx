import React from "react";
import Brand from "./Brand";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className='font-main fixed inset-x-0 top-0 bg-white z-20 shadow-md md:shadow-none'>
      <div className='flex items-center container md:mx-auto px-3 md:px-20 py-4'>
        <Brand />
        <NavLinks />
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
