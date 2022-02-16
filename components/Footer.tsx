import React from "react";
import Image from "next/image";
import Logo from "@assets/logo.svg";
import ArtLeftSide from "@assets/art-left.svg";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className='flex flex-col items-center pt-16 overflow-hidden border-t border-abide-light'>
      <div className='absolute left-0'>
        <Image src={ArtLeftSide} alt='abide in the vine art' height={340} />
      </div>
      <Image src={Logo} alt='Abide in the Vine' width={240} />
      <div className='text-center w-[300px] space-y-4 my-4 md:my-8'>
        <p className='text-2xl font-quote text-abide-dark leading-snug'>
          Abide in Me, and I in you. As the branch cannot bear fruit of itself,
          unless it abides in the vine, neither can you, unless you abide in Me.
        </p>
        <p className='uppercase text-abide-gray tracking-widest font-bold'>
          John 15:4
        </p>
      </div>
      <div className='md:grid md:grid-cols-3 md:place-items-center w-full mt-16 flex flex-col items-center gap-3 mb-4'>
        <span className='text-abide-dark text-sm order-2 md:order-1'>
          &copy; {year} Abide in the Vine. All rightes reserved.
        </span>
        <span className='text-abide-gray font-semibold order-1 md:order-2'>
          #SoliDeoGloria
        </span>
        <span className='text-abide-dark text-sm order-3 md:order-3'>
          Made with <span className='text-red-600 text-lg'>♥</span> by Jeff
          Segovia
        </span>
      </div>
    </footer>
  );
};

export default Footer;
