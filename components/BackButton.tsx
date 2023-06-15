import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

interface BackButtonProps {
  backToPath: string;
  label: string;
}

const BackButton = (props: BackButtonProps) => {
  return (
    <Link
      href={props.backToPath}
      aria-label={props.label}
      className='group mb-4 inline-flex items-center justify-center self-start text-accent transition-colors duration-200 hover:text-brand-primary'
    >
      <ArrowLeftIcon className='mr-4 h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1' />{" "}
      Back
    </Link>
  );
};

export default BackButton;
