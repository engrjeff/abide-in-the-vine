import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";

const LinkItems = [
  { path: "/blogs/latest-post", label: "Latest Post" },
  { path: "/blogs/all-posts", label: "All Posts" },
];

const BlogTabLinks = () => {
  const router = useRouter();

  const getClass = (path: string) =>
    classnames("btn-tab", { active: router.asPath === path });

  return (
    <div className='app-container mt-24 md:mt-32 mb-8 md:mb-12 space-y-4'>
      <h1 className='text-4xl font-extrabold text-abide-dark'>Blogs</h1>
      <div className='flex items-center justify-start border-b border-abide-light'>
        {LinkItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <a className={getClass(item.path)}>{item.label}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogTabLinks;
