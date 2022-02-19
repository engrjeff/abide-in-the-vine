import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = (props: SectionTitleProps) => {
  return (
    <div className='flex items-center gap-2 border-l-4 border-abide-accent pl-4'>
      <h4 className='font-bold text-abide-dark text-[26px]'>{props.title}</h4>
    </div>
  );
};

export default SectionTitle;
