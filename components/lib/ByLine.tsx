import Image from "next/image";
import { formatDate } from "@utils/helpers";

interface ByLineProps {
  publishedAt: string | Date;
  timeToRead?: string;
}

const ByLine = ({ publishedAt, timeToRead }: ByLineProps) => {
  return (
    <div className='flex items-center gap-4 my-4'>
      <div className='aspect-square relative'>
        <Image
          src='/assets/me.jpg'
          alt='test avatar image'
          width={44}
          height={44}
          className='object-cover object-center rounded-full'
        />
      </div>
      <div>
        <p className='text-gray-600 font-semibold dark:text-abide-mediumGray'>
          By: Jeff Segovia
        </p>
        <div className='text-sm text-gray-600 dark:text-abide-mediumGray'>
          <time>{formatDate(publishedAt)}</time>{" "}
          {timeToRead && <span> - {timeToRead}</span>}
        </div>
      </div>
    </div>
  );
};

export default ByLine;
