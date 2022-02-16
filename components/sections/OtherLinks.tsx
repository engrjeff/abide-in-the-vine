import Link from "next/link";
import React from "react";

const otherLinkItems = [
  { path: "/about/what-we-believe", label: "What we believe" },
  { path: "/about/who-we-are", label: "who we are" },
  { path: "/the-gospel", label: "The Gospel" },
  { path: "/blogs", label: "Blogs" },
];

const OtherLinks = () => {
  return (
    <ul className='hidden md:flex items-center justify-center gap-8 py-8 bg-abide-light'>
      {otherLinkItems.map((linkItem) => (
        <li className='h-100' key={linkItem.label}>
          <Link href={linkItem.path}>
            <a className='nav-link'>{linkItem.label}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default OtherLinks;
