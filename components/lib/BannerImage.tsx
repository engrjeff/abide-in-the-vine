import Image from 'next/image';
import React from 'react';

interface BannerImageProps {
  src: string;
  alt: string;
}

const BannerImage = ({ src, alt }: BannerImageProps) => {
  return (
    <div className='relative aspect-video rounded-lg overflow-hidden'>
      <Image
        src={src}
        alt={alt}
        blurDataURL={src}
        placeholder='blur'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        className='rounded-lg'
      />
    </div>
  );
};

export default BannerImage;
