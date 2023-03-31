import Image from "next/image";

interface BannerImageProps {
  src: string;
  alt: string;
}

const BannerImage = ({ src, alt }: BannerImageProps) => {
  return (
    <div className='relative aspect-video overflow-hidden rounded-lg'>
      <Image
        src={src}
        alt={alt}
        blurDataURL={src}
        placeholder='blur'
        fill
        className='obect-cover rounded-lg object-center'
      />
    </div>
  );
};

export default BannerImage;
