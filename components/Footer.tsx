import Image from "next/image";
import Link from "next/link";

import { FaFacebook, FaInstagram, FaYoutube, FaMedium } from "react-icons/fa";

import { menuItems, abide } from "@utils/constants";
import SocialLinks from "./SocialLinks";

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
    <footer className='bg-background border-t'>
      <div className='container max-w-site grid grid-cols-2 gap-6 py-16 md:grid-cols-3 md:py-20'>
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
          <p className='max-w-[30ch] text-muted'>
            Abide in the Vine is a Christian organization which aims to glorify
            God by proclaiming the truth that satisfaction and joy can only be
            found in Jesus Christ.
          </p>
        </div>
        <ul className='space-y-3 md:justify-self-center'>
          <li className='mb-6 text-lg font-semibold'>Site Menu</li>
          {menuItems.map((menu) => (
            <li key={menu.label}>
              <Link href={menu.path} className='text-muted hover:text-accent'>
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='space-y-3 md:justify-self-end'>
          <p className='mb-6 text-lg font-semibold'>Follow Us</p>
          <SocialLinks />
        </div>
      </div>
      <div className='bg-background py-6 border-t'>
        <div className='container max-w-site flex flex-col justify-between gap-8 md:flex-row text-xs'>
          <p>
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <p>
            Made with ❤ by{" "}
            <a
              href='http://jeffsegovia.dev'
              target='_blank'
              rel='noreferrer'
              className='text-accent'
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
