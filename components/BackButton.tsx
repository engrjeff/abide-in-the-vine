import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/solid';

interface BackButtonProps {
  backToPath: string;
  label: string;
}

const BackButton = (props: BackButtonProps) => {
  return (
    <Link href={props.backToPath}>
      <a
        aria-label={props.label}
        className='mb-4 flex items-center justify-center self-start p-3 rounded-full border border-abide-[#ccc] text-[#ccc] hover:text-abide-gray hover:border-abide-gray duration-200 transition-colors group'
      >
        <ArrowLeftIcon className='h-5 w-5 group-hover:-translate-x-1 duration-200 transition-transform' />
      </a>
    </Link>
  );
};

export default BackButton;
