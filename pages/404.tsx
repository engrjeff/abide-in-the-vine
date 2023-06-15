import Image from "next/image";

import { NextSeo } from "next-seo";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className='container mx-auto flex h-screen w-screen flex-col items-center px-8 pt-10'>
      <NextSeo title='Page Not Found - Abide in the Vine' />
      <Image
        src='/abide-logo.png'
        alt='Abide in the Vine'
        width={64}
        height={64}
        className='mb-4 object-cover object-center'
      />
      <h4 className='text-2xl font-bold text-abide-dark dark:text-abide-light'>
        Abide in the Vine
      </h4>
      <p className='mt-8 text-center text-xl font-medium text-abide-dark dark:text-abide-light'>
        The page that you are requesting does not exist.
      </p>
      <Link
        href='/'
        className='mt-10 rounded-full bg-gradient-to-r from-primary to-accent px-10 py-4 text-lg font-medium text-white shadow-lg hover:bg-opacity-100 focus:shadow-sm'
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
