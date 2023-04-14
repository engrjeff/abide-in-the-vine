import Image from "next/image";
import Link from "next/link";

import { FaFacebook, FaInstagram, FaYoutube, FaMedium } from "react-icons/fa";

import { menuItems, abide } from "@utils/constants";

const socialLinks = [
  {
    label: "Facebook",
    link: abide.facebook,
    icon: <FaFacebook className='text-xl' />,
  },
  {
    label: "Instagram",
    link: abide.instagram,
    icon: <FaInstagram className='text-xl' />,
  },
  {
    label: "Medium",
    link: abide.medium,
    icon: <FaMedium className='text-xl' />,
  },
  {
    label: "Youtube",
    link: abide.youtube,
    icon: <FaYoutube className='text-xl' />,
  },
];

function Footer() {
  return (
    <footer className='bg-brand-coolnavy900 text-white dark:border-t dark:border-brand-coolnavy800'>
      <div className='container grid grid-cols-2 gap-6 py-16 md:grid-cols-3 md:py-20'>
        <div className='col-span-2 space-y-6 md:col-span-1'>
          <Link
            href='/'
            className='inline-flex items-center gap-4 text-xl font-bold'
          >
            <Image
              src='/abide-logo.png'
              alt='Abide in the Vine'
              width={36}
              height={36}
              className='object-cover object-center'
              aria-hidden='true'
            />
            Abide in the Vine
          </Link>
          <p className='max-w-[30ch] text-brand-coolnavy300'>
            Abide in the Vine is a Christian organization which aims to glorify
            God by proclaiming the truth that satisfaction and joy can only be
            found in Jesus Christ.
          </p>
        </div>
        <ul className='space-y-3 md:justify-self-center'>
          <li className='mb-6 text-lg font-semibold'>Site Menu</li>
          {menuItems.map((menu) => (
            <li key={menu.label}>
              <Link
                href={menu.path}
                className='text-brand-coolnavy300 hover:text-brand-accent'
              >
                {menu.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href='/the-gospel'
              className='text-brand-coolnavy300 hover:text-brand-accent'
            >
              The Gospel
            </Link>
          </li>
        </ul>
        <ul className='space-y-3 md:justify-self-end'>
          <li className='mb-6 text-lg font-semibold'>Follow Us</li>
          {socialLinks.map((linkItem) => (
            <li key={linkItem.label}>
              <a
                href={linkItem.link}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-4 text-brand-coolnavy300 hover:text-brand-accent'
              >
                <span> {linkItem.icon}</span>
                <span> {linkItem.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='bg-brand-coolnavy900 py-6 text-brand-coolnavy200 border-t border-brand-coolnavy800'>
        <div className='container flex flex-col justify-between gap-8 md:flex-row'>
          <p>
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <p>
            Made with ❤ by{" "}
            <a
              href='http://jeffsegovia.dev'
              target='_blank'
              rel='noreferrer'
              className='text-brand-primary'
            >
              Jeff Segovia
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
