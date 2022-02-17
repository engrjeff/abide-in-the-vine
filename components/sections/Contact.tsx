import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoOpacity from "@assets/logo-opacity.svg";

import {
  FacebookIcon,
  InstagramIcon,
  MediumIcon,
  YoutubeIcon,
} from "@components/Icon";
import { abide } from "@utils/constants";

const socialLinkItems = [
  {
    path: abide.facebook,
    label: "Abide in the Vine - Facebook",
    Icon: <FacebookIcon />,
  },
  {
    path: abide.instagram,
    label: "Abide in the Vine - Instagram",
    Icon: <InstagramIcon />,
  },
  {
    path: abide.medium,
    label: "Abide in the Vine - Medium",
    Icon: <MediumIcon />,
  },
  {
    path: abide.youtube,
    label: "Abide in the Vine - YouTube",
    Icon: <YoutubeIcon />,
  },
];

const Contact = () => {
  return (
    <section className='bg-abide-light md:py-8 snap-y' id='contact-us'>
      <div className='flex flex-col items-center py-16 gap-8'>
        <p className='uppercase text-abide-gray tracking-widest font-semibold'>
          Connect with Abide
        </p>
        <div className='flex gap-4 md:gap-8'>
          {socialLinkItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              aria-label={item.label}
              target='_blank'
              rel='noopener noreferrer'
              className='text-abide-gray duration-200 transition-colors hover:text-abide-dark'
            >
              {item.Icon}
            </a>
          ))}
        </div>
        <p className='uppercase text-abide-gray tracking-widest font-semibold'>
          And Abide in the Lord
        </p>
        <div className='text-center w-[300px] md:w-[350px] space-y-4 my-4'>
          <p className='text-3xl md:text-4xl font-quote text-abide-dark leading-snug'>
            Your words were found, and I ate them, And Your word was to me the
            joy and rejoicing of my heart
          </p>
          <p className='uppercase text-abide-gray tracking-widest font-bold'>
            Jeremiah 15:16
          </p>
        </div>
        <Image src={logoOpacity} alt='Abide in the Vine' />
      </div>
    </section>
  );
};

export default Contact;
