import React from "react";
import Image from "next/image";

import AbideBullet from "@assets/abide-bullet.svg";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = (props: SectionTitleProps) => {
  return (
    <div className='flex items-center gap-2'>
      <Image
        src={AbideBullet}
        alt='Abide in the Vine - bullet'
        width={24}
        height={24}
      />
      <h4 className='font-bold text-abide-dark text-[26px]'>{props.title}</h4>
    </div>
  );
};

export default SectionTitle;
