import Link from "next/link";

function HeroImage() {
  return (
    <div className='relative'>
      <div className='h-[500px] w-full bg-hero bg-cover bg-center bg-no-repeat text-white md:h-[600px]'>
        <div className='absolute inset-0 flex flex-col items-center justify-center gap-8 bg-black/80 p-8'>
          <h1 className='text-center text-[40px] font-extrabold leading-[1.1] md:text-6xl'>
            <span>Finding Joy in Christ,&nbsp;</span>
            <span>Having Christ as Joy</span>
          </h1>
          <p className='text-center uppercase tracking-wider md:text-lg'>
            Christ-centered, Spirit-led, God-exalting content to feed your soul.
          </p>
          <div className='mt-10 flex'>
            <Link
              href='/blogs'
              className='rounded-full bg-brand-primary bg-opacity-95 px-10 py-4 text-lg font-medium text-white shadow-lg hover:bg-opacity-100 focus:shadow-sm'
            >
              Read the Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
