import Image from "next/image";

import LogoRound from "@assets/logo-round.svg";
import CTAButton from "@components/CTAButton";
import { NextSeo } from "next-seo";

const NotFoundPage = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center container mx-auto px-8 pt-10'>
      <NextSeo title='Page Not Found - Abide in the Vine' />
      <Image src={LogoRound} alt='abide in the vine' width={100} height={100} className='mb-3' />
      <h4 className='font-extrabold italic text-abide-dark text-2xl dark:text-abide-light'>
        Abide in the Vine
      </h4>
      <p className='text-xl text-abide-dark font-semibold text-center mt-8 dark:text-abide-light'>
        The page that you are requesting does not exist.
      </p>
      <div className='my-10'>
        <CTAButton text='Back to Home' isLink href='/' />
      </div>
    </div>
  );
};

export default NotFoundPage;
