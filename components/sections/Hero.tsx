import React from "react";
import Image from "next/image";
import HeroArt from "@assets/hero-art.svg";
import CTAButton from "@components/CTAButton";
import SectionContainer from "@components/SectionContainer";

const Hero = () => {
  return (
    <SectionContainer>
      <section className='grid grid-cols-1 md:grid-cols-12 mt-32 mb-16 md:mb-0 py-8 md:h-screen'>
        <div className='col-span-5 flex flex-col gap-y-8'>
          <h1 className='text-5xl md:text-6xl text-abide-dark font-black text-center md:text-left'>
            Having Christ as joy and finding joy in Christ
          </h1>
          <div className='flex flex-col'>
            <p className='text-abide-gray text-2xl font-semibold italic text-center md:text-left'>
              Abide in Me, and I in you. As the branch cannot bear fruit of
              itself, unless it abides in the vine, neither can you, unless you
              abide in Me.
            </p>
            <p className='font-extrabold uppercase mt-4 text-abide-dark md:self-end md:mr-7 text-center md:text-left'>
              John 15:4
            </p>
          </div>
          <CTAButton
            text='Read the Blogs'
            isLink
            href='/blogs'
            className='self-center md:self-start'
          />
        </div>
        <div className='absolute top-20 right-0 w-[500px] h-[400px] hidden md:block'>
          <Image src={HeroArt} alt='abide in the vine art' />
        </div>
      </section>
    </SectionContainer>
  );
};

export default Hero;
