import { menuItems } from "@utils/constants";
import NavLink from "./NavLink";
import Link from "next/link";
import Image from "next/image";

function NavLinks() {
  return (
    <nav className='py-5'>
      <Link href='/' className='flex md:hidden gap-3 items-center'>
        <Image
          src='/abide-logo.png'
          alt='Abide in the Vine'
          height={24}
          width={24}
        />
        <span className='text-2xl font-semibold'>Abide.</span>
      </Link>
      <div className='hidden md:block'>
        {menuItems.map((menu) => (
          <NavLink key={menu.label} href={menu.path}>
            {menu.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default NavLinks;
