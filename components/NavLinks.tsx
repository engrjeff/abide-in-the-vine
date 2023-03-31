import { menuItems } from "@utils/constants";
import NavLink from "./NavLink";

function NavLinks() {
  return (
    <nav className='hidden md:block'>
      <ul className='flex items-center justify-center space-x-8'>
        {menuItems.map((navLink) => (
          <li key={navLink.label}>
            <NavLink href={navLink.path}>{navLink.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
