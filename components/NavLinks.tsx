import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { navLinkItems } from "@utils/constants";

const NavLinks = () => {
  const { pathname } = useRouter();
  return (
    <ul className='ml-auto items-center gap-8 hidden lg:flex'>
      {navLinkItems.map((linkItem) => (
        <li className='h-100' key={linkItem.label}>
          <Link href={linkItem.path}>
            <a
              className={`nav-link ${
                pathname === linkItem.path ? "nav-active" : ""
              }`}
            >
              {linkItem.label}
            </a>
          </Link>
        </li>
      ))}
      <li className='h-100'>
        <Link href='/the-gospel'>
          <a className='app-btn small rounded-full leading-snug align-baseline inline'>
            The Gospel
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
