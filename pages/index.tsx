import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SearchIcon, MoonIcon, SunIcon } from "@heroicons/react/outline";
import { MdFormatQuote } from "react-icons/md";
import { FaFacebook, FaInstagram, FaYoutube, FaMedium } from "react-icons/fa";
import { abide } from "@utils/constants";
import { useTheme } from "next-themes";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Blogs", path: "/blogs" },
  { label: "About", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

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

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <>
      {/* Header */}
      <header className='flex items-center px-4 md:px-10 lg:px-20 py-5 dark:bg-abide-darkestGray'>
        <nav className='container lg:mx-auto flex'>
          <Link href='/'>
            <a className='flex items-center'>
              <Image
                src='/assets/logo-round.svg'
                alt='Abide in the Vine logo'
                width={30}
                height={30}
              />
              <span className='italic font-bold text-2xl ml-3 dark:text-abide-light'>
                Abide in the Vine
              </span>
            </a>
          </Link>
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
        </nav>
        <div className='hidden lg:flex items-center space-x-3 flex-1'>
          <button className='w-max text-white bg-abide-main rounded-full px-5 py-2 font-semibold hover:opacity-95 transition-opacity duration-200'>
            The Gospel
          </button>
          <button
            aria-label='search'
            className='p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-abide-dark dark:hover:text-abide-light transition-colors duration-300'
          >
            <SearchIcon className='h-6 w-6' />
          </button>
          <button
            aria-label='switch theme'
            onClick={toggleTheme}
            className='p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-abide-dark dark:hover:text-abide-light transition-colors duration-300'
          >
            {isDark ? (
              <SunIcon className='h-6 w-6' />
            ) : (
              <MoonIcon className='h-6 w-6' />
            )}
          </button>
        </div>
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label='toggle menu'
          className='ml-auto h-10 w-10 relative lg:hidden'
        >
          <span
            className={`absolute top-[10px] -translate-x-1/2 inline-block bg-abide-dark w-7 h-[3px] origin-top-left transition-transform duration-200 ${
              mobileMenuOpen
                ? "rotate-45 -translate-y-1/2 -translate-x-[10px]"
                : ""
            }`}
          />
          <span
            className={`absolute top-[18px] -translate-x-1/2 inline-block bg-abide-dark w-7 h-[3px] transition duration-200 ${
              mobileMenuOpen ? "opacity-0 translate-x-2 scale-x-0" : ""
            }`}
          />
          <span
            className={`absolute top-[26px] -translate-x-1/2 inline-block bg-abide-dark w-7 h-[3px] origin-bottom-left transition-transform duration-200 ${
              mobileMenuOpen
                ? "-rotate-45 translate-y-1/2 -translate-x-[10px]"
                : ""
            }`}
          />
        </button>
      </header>
      <main className='dark:bg-abide-darkestGray pt-8'>
        {/* Hero Section */}
        <section className='container mx-auto lg:w-2/3 p-10 flex flex-col items-center'>
          <h1 className='text-abide-dark dark:text-abide-light font-black text-5xl lg:text-6xl text-center mb-10 leading-tight'>
            Having Christ as joy and finding joy in Christ
          </h1>
          <p className='text-gray-800 text-xl text-center lg:w-2/3 mb-5 relative font-sans dark:text-abide-light'>
            <MdFormatQuote className='text-abide-accent rotate-180 text-5xl absolute -top-8 -left-5' />
            Abide in Me, and I in you. As the branch cannot bear fruit of
            itself, unless it abides in the vine, neither can you, unless you
            <span className='text-abide-main dark:text-abide-accent font-bold'>
              &nbsp; abide in Me
            </span>
            .
          </p>
          <p className='text-gray-800 dark:text-abide-light tracking-widest font-semibold mb-10'>
            JOHN 15:4
          </p>
          <button className='btn-cta'>Read the Blogs</button>
        </section>
        {/* Featured Posts section */}
        <section className='lg:container lg:mx-auto p-4 md:p-10 py-6'>
          <h2 className='pb-2 mb-5 inline-block text-2xl font-extrabold tracking-wide text-abide-dark relative after:absolute after:h-[3px] after:w-10 after:bg-abide-accent after:-bottom-1 after:left-0 before:absolute before:h-[3px] before:w-full before:bg-gray-200 dark:before:bg-abide-darkGray before:-bottom-1 dark:text-abide-light'>
            Featured Posts
          </h2>
          <div className='grid grid-cols-5 gap-8'>
            <div className='col-span-5 lg:col-span-3 mb-8 lg:mb-0'>
              <div className='aspect-video relative mb-5'>
                <Image
                  src='/assets/image-one.jpg'
                  alt='test image'
                  layout='fill'
                  className='object-cover object-center rounded-xl'
                />
              </div>
              <div className='flex gap-2'>
                {["Christ", "Gospel", "Prayer"].map((tag) => (
                  <Link key={tag} href='/'>
                    <a className='inline-flex items-center rounded-full text-gray-600 h-8 px-5 text-sm font-semibold  bg-gray-200 duration-200 transition-colors hover:text-white hover:bg-abide-main dark:bg-abide-darkGray dark:text-abide-light dark:hover:bg-abide-main'>
                      {tag}
                    </a>
                  </Link>
                ))}
              </div>
              <Link href='/'>
                <a className='text-4xl font-black text-abide-dark my-4 inline-block hover:underline dark:text-abide-light'>
                  The Gospel of Jesus Christ
                </a>
              </Link>
              <p className='prose-lg text-gray-700 mb-4 dark:text-abide-mediumGray'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
                iste dolore. Molestiae, nobis perferendis nam deleniti
                reiciendis numquam id provident quam earum iusto quo quod soluta
                veritatis beatae autem alias...
              </p>
              <div className='flex items-center gap-4'>
                <div className='aspect-square relative'>
                  <Image
                    src='/assets/me.jpg'
                    alt='test avatar image'
                    width={44}
                    height={44}
                    className='object-cover object-center rounded-full'
                  />
                </div>
                <div>
                  <p className='text-abide-dark font-extrabold dark:text-abide-light'>
                    Jeff Segovia
                  </p>
                  <div className='text-gray-700 text-sm space-x-2 dark:text-abide-mediumGray'>
                    <time>June 12, 2022</time>
                    <span> &bull;</span>
                    <span>12 min read</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-5 lg:col-span-2 space-y-8'>
              {[1, 2, 3, 4].map((post) => (
                <div key={post} className='grid grid-cols-5 gap-4'>
                  <div className='aspect-video relative col-span-2'>
                    <Image
                      src='/assets/glory.jpg'
                      alt='test image'
                      layout='fill'
                      className='object-cover object-center rounded-xl'
                    />
                  </div>
                  <div className='col-span-3 flex flex-col-reverse self-start lg:flex-col gap-4'>
                    <Link href='/'>
                      <a className='text-lg md:text-[22px] font-black text-abide-dark inline-block hover:underline dark:text-abide-light'>
                        My Blog post sample long title test only yey {post}
                      </a>
                    </Link>
                    <div className='mt-auto flex gap-2 flex-wrap'>
                      {["Christ", "Gospel"].map((tag) => (
                        <Link key={tag} href='/'>
                          <a className='inline-flex items-center rounded-full text-gray-600 h-8 px-5 text-sm font-semibold  bg-gray-200 duration-200 transition-colors hover:text-white hover:bg-abide-main dark:bg-abide-darkGray dark:text-abide-light dark:hover:bg-abide-main'>
                            {tag}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Most Recent Posts section */}
        <section className='lg:container lg:mx-auto p-4 md:p-10'>
          <h2 className='pb-2 mb-5 inline-block text-2xl font-extrabold tracking-wide text-abide-dark relative after:absolute after:h-[3px] after:w-10 after:bg-abide-accent after:-bottom-1 after:left-0 before:absolute before:h-[3px] before:w-full before:bg-gray-200 dark:before:bg-abide-darkGray before:-bottom-1 dark:text-abide-light'>
            Most Recent Posts
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12'>
            {[1, 2, 3, 4, 5, 6].map((post) => (
              <div key={post}>
                <div className='aspect-video relative mb-5'>
                  <Image
                    src='/assets/image-one.jpg'
                    alt='test image'
                    layout='fill'
                    className='object-cover object-center rounded-xl'
                  />
                </div>
                <div className='flex gap-2'>
                  {["Christ", "Gospel", "Prayer"].map((tag) => (
                    <Link key={tag} href='/'>
                      <a className='inline-flex items-center rounded-full text-gray-600 h-8 px-5 text-sm font-semibold  bg-gray-200 duration-200 transition-colors hover:text-white hover:bg-abide-main dark:bg-abide-darkGray dark:text-abide-light dark:hover:bg-abide-main'>
                        {tag}
                      </a>
                    </Link>
                  ))}
                </div>
                <Link href='/'>
                  <a className='text-2xl lg:text-3xl font-black text-abide-dark my-4 inline-block hover:underline dark:text-abide-light'>
                    My Recent Post Sample {post}
                  </a>
                </Link>
                <p className='prose-lg text-gray-700 mb-4 dark:text-abide-mediumGray'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, iste dolore. Molestiae, nobis perferendis nam
                  deleniti...
                </p>
                <div className='flex items-center gap-4'>
                  <Image
                    src='/assets/me.jpg'
                    alt='test avatar image'
                    width={44}
                    height={44}
                    className='object-cover object-center rounded-full'
                  />
                  <div>
                    <p className='text-abide-dark font-extrabold dark:text-abide-light'>
                      Jeff Segovia
                    </p>
                    <div className='text-gray-700 text-sm space-x-2 dark:text-abide-mediumGray'>
                      <time>June 12, 2022</time>
                      <span> &bull;</span>
                      <span>12 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='text-center my-12'>
            <button className='btn-cta'>View More Posts</button>
          </div>
        </section>
        {/* Message Section */}
        <section className='p-2 lg:p-10 bg-abide-lighter dark:bg-abide-dark'>
          <div className='flex flex-col lg:flex-row gap-8 mx-5 md:mx-20 py-10'>
            <div className='lg:w-1/2 space-y-4'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-abide-dark dark:text-abide-light'>
                Message Us
              </h2>
              <p className='prose text-lg font-semibold dark:text-abide-mediumGray'>
                Whether you want to know God and the Gospel of Christ or you
                need a prayer, you may send us a message. We are here for you
                beloved.
              </p>
            </div>
            <form className='flex-1 flex flex-col gap-4'>
              <input
                type='text'
                name='name'
                aria-label='name'
                placeholder='Your name'
                className='rounded-2xl py-4 px-6 outline-0 font-semibold text-xl bg-transparent border-2 border-gray-200 dark:border-abide-darkGray dark:text-abide-light dark:placeholder:text-abide-darkGray focus:border-abide-accent'
              />
              <input
                type='email'
                name='email'
                aria-label='email'
                placeholder='youremail@example.com'
                className='rounded-2xl py-4 px-6 outline-0 font-semibold text-xl bg-transparent border-2 border-gray-200 dark:border-abide-darkGray dark:text-abide-light dark:placeholder:text-abide-darkGray focus:border-abide-accent'
              />
              <textarea
                name='message'
                aria-label='message'
                rows={3}
                placeholder='Enter your message here'
                className='rounded-2xl py-4 px-6 outline-0 font-semibold text-xl bg-transparent border-2 border-gray-200 dark:border-abide-darkGray dark:text-abide-light dark:placeholder:text-abide-darkGray focus:border-abide-accent min-h-[200px] h-[200px]'
              />
              <button
                type='submit'
                className='mt-6 py-4 px-6 rounded-2xl font-semibold text-xl text-white bg-abide-main transition-opacity duration-300 hover:opacity-95'
              >
                Send
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className='px-8 md:px-10 lg:px-20 dark:bg-abide-darkestGray'>
        <div className='grid md:grid-cols-4 gap-16 py-16 border-b dark:border-abide-dark'>
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
              Abide in the Vine is a Christian organization which aims to
              glorify God by proclaiming the truth that satisfaction and joy can
              only be found in Jesus Christ.
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
                <Link href='/gospel'>
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
    </>
  );
};

export default Home;
