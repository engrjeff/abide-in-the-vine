import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@assets/logo.svg";

const Brand = () => {
  return (
    <Link href='/' passHref>
      <a className='w-[180px] sm:w-auto'>
        <Image src={Logo} alt='Abide in the Vine' width={200} />
      </a>
    </Link>
  );
};

export default Brand;
