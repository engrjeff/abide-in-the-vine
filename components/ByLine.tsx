import Image from "next/image";

function ByLine() {
  return (
    <div className='flex items-center gap-4'>
      <Image
        src='https://jeffsegovia.dev/me.jpg'
        alt='Jeff segovia'
        width={36}
        height={36}
        className='h-9 w-9 rounded-full object-cover'
      />
      <span className='text-sm text-muted font-sans'>By: Jeff Segovia</span>
    </div>
  );
}

export default ByLine;
