import Link from "next/link";
import { useRouter } from "next/router";

import { menuItems } from "@utils/constants";

const activeClass = "text-abide-main dark:text-abide-accent";
const inactiveClass = "text-abide-dark dark:text-abide-light";

const NavLinks = () => {
  const router = useRouter();

  const isActive = (pathname: string) =>
    pathname === "/"
      ? router.pathname === pathname
      : router.pathname.includes(pathname);

  return (
    <ul className='hidden lg:flex items-center space-x-6'>
      {menuItems.map((menu) => (
        <li key={menu.label}>
          <Link href={menu.path}>
            <a
              className={`${
                isActive(menu.path) ? activeClass : inactiveClass
              } text-[17px] font-semibold hover:text-abide-main dark:hover:text-abide-accent transition-colors duration-300`}
            >
              {menu.label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
