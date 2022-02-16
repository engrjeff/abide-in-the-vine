import React, { useState } from "react";
import Link from "next/link";
import classnames from "classnames";

import { MenuAlt3Icon, XIcon } from "@heroicons/react/solid";
import { navLinkItems } from "@utils/constants";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((val) => !val);

  const menuClasses = classnames(
    "fixed bg-white inset-0 overflow-hidden transition-transform duration-200",
    {
      "translate-x-full": !open,
    },
    {
      "translate-x-0": open,
    }
  );
  return (
    <>
      <button className='mobile-icon' onClick={toggleMenu}>
        <MenuAlt3Icon className='h-8 w-8' />
      </button>
      <div className={menuClasses}>
        <button className='mobile-icon' onClick={toggleMenu}>
          <XIcon className='h-8 w-8' />
        </button>
        <ul className='flex flex-col gap-y-6 pl-8 py-16' onClick={toggleMenu}>
          {navLinkItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path}>
                <a className='text-3xl font-extrabold text-abide-dark uppercase tracking-wider'>
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
