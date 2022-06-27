import Link from "next/link";
import { menuItems } from "@utils/constants";

const NavLinks = () => {
  return (
    <ul className='mx-auto hidden lg:flex items-center space-x-6'>
      {menuItems.map((menu) => (
        <li key={menu.label}>
          <Link href={menu.path}>
            <a className='text-abide-dark dark:text-abide-light text-[17px] font-semibold hover:text-abide-main dark:hover:text-abide-accent transition-colors duration-300'>
              {menu.label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
