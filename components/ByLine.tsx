import Image from "next/image";

function ByLine() {
  return (
    <div className='mt-4 flex items-center gap-4'>
      <Image
        src='https://jeffsegovia.dev/me.jpg'
        alt='Jeff segovia'
        width={36}
        height={36}
        className='h-9 w-9 rounded-full object-cover'
      />
      <span className='uppercase tracking-wider text-sm'>By: Jeff Segovia</span>
    </div>
  );
}

export default ByLine;
