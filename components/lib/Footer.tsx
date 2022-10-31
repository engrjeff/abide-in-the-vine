import Link from 'next/link';
import Image from 'next/image';

import { FaFacebook, FaInstagram, FaYoutube, FaMedium } from 'react-icons/fa';
import { abide, menuItems } from '@utils/constants';

const socialLinks = [
  {
    label: 'Facebook',
    link: abide.facebook,
    icon: <FaFacebook className='text-xl' />,
  },
  {
    label: 'Instagram',
    link: abide.instagram,
    icon: <FaInstagram className='text-xl' />,
  },
  {
    label: 'Medium',
    link: abide.medium,
    icon: <FaMedium className='text-xl' />,
  },
  {
    label: 'Youtube',
    link: abide.youtube,
    icon: <FaYoutube className='text-xl' />,
  },
];

const Footer = () => {
  return (
    <footer className='lg:py-10 dark:bg-abide-darkestGray border-t dark:border-abide-dark'>
      <div className='container grid md:grid-cols-4 gap-16 py-10 md:py-16 border-b dark:border-abide-dark'>
        {/* Short About */}
        <div className='col-span-2 space-y-4'>
          <div className='flex items-center'>
            <Image
              src='/assets/logo-round.svg'
              alt='Abide in the Vine logo'
              width={30}
              height={30}
            />
            <span className='italic ml-3 font-bold text-2xl dark:text-abide-light'>
              Abide in the Vine
            </span>
          </div>
          <p className='prose text-abide-dark ml-1 dark:text-abide-darkGray w-2/3'>
            Abide in the Vine is a Christian organization which aims to glorify God by proclaiming
            the truth that satisfaction and joy can only be found in Jesus Christ.
          </p>
        </div>
        {/* Site Menu / Follow us */}
        <div>
          <h3 className='text-gray-500 uppercase text-sm tracking-wider mb-4 dark:text-abide-darkGray'>
            Site Menu
          </h3>
          <ul className='space-y-3'>
            {menuItems.map((menu) => (
              <li key={menu.label}>
                <Link href={menu.path}>
                  <a className='text-gray-700 hover:text-abide-main transition-colors duration-300 dark:text-abide-darkGray dark:hover:text-abide-main'>
                    {menu.label}
                  </a>
                </Link>
              </li>
            ))}
            <li>
              <Link href='/the-gospel'>
                <a className='text-gray-700 hover:text-abide-main transition-colors duration-300 dark:text-abide-darkGray dark:hover:text-abide-main'>
                  The Gospel
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-gray-500 uppercase text-sm tracking-wider mb-4 dark:text-abide-darkGray'>
            Follow Us
          </h3>
          <ul className='space-y-3'>
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.link}
                  target='_blank'
                  rel='noreferrer'
                  className='text-gray-700 hover:text-abide-main transition-colors duration-300 dark:text-abide-darkGray dark:hover:text-abide-main'
                >
                  <div className='flex items-center gap-4'>
                    {social.icon} {social.label}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='py-10 flex flex-col items-center justify-center text-gray-600 gap-4 dark:text-abide-mediumGray'>
        <span>Abide in the Vine &copy; 2022</span>
        <span>
          Made with <span className='text-red-500'>♥</span> by Jeff Segovia
        </span>
      </div>
    </footer>
  );
};

export default Footer;
