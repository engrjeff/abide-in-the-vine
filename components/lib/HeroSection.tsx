import Link from "next/link";
import { MdFormatQuote } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className='container flex flex-col items-center py-10'>
      <h1 className='max-w-xl text-abide-dark dark:text-abide-light font-black text-[40px] md:text-6xl text-center mb-10 leading-tight'>
        Having Christ as joy and finding joy in Christ
      </h1>
      <p className='max-w-xs md:max-w-md text-gray-800 text-lg md:text-xl text-center mb-5 relative font-sans dark:text-abide-light'>
        <MdFormatQuote className='text-abide-accent rotate-180 text-5xl absolute -top-8 -left-5' />
        Abide in Me, and I in you. As the branch cannot bear fruit of itself,
        unless it abides in the vine, neither can you, unless you
        <span className='text-abide-main dark:text-abide-accent font-bold'>
          &nbsp; abide in Me
        </span>
        .
      </p>
      <p className='text-gray-800 dark:text-abide-light tracking-widest font-semibold mb-10'>
        JOHN 15:4
      </p>
      <Link href='/blogs'>
        <a className='btn-cta w-[234px]'>Read the Blogs</a>
      </Link>
      <Link href='/the-gospel'>
        <a className='btn-cta lg:hidden mt-4 bg-white dark:bg-transparent border border-abide-main text-abide-main hover:bg-abide-main hover:text-white dark:hover:bg-abide-main'>
          Know the Gospel
        </a>
      </Link>
    </section>
  );
};

export default HeroSection;
