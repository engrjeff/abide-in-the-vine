import React from "react";
import { useRouter } from "next/router";
import { navLinkItems } from "@utils/constants";
import NoScrollLink from "./NoScrollLink";

const NavLinks = () => {
  const { pathname } = useRouter();
  return (
    <ul className='ml-auto items-center gap-8 hidden lg:flex'>
      {navLinkItems.map((linkItem) => (
        <li className='h-100' key={linkItem.label}>
          <NoScrollLink href={linkItem.path}>
            <a
              className={`nav-link ${
                pathname === linkItem.path ? "nav-active" : ""
              }`}
            >
              {linkItem.label}
            </a>
          </NoScrollLink>
        </li>
      ))}
      <li className='h-100'>
        <NoScrollLink href='/the-gospel'>
          <a className='app-btn small rounded-full leading-snug align-baseline inline'>
            The Gospel
          </a>
        </NoScrollLink>
      </li>
    </ul>
  );
};

export default NavLinks;
