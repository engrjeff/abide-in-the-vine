import React from "react";

interface TagProps {
  label: string;
}

const Tag = (props: TagProps) => {
  const { label } = props;
  return (
    <div className='border border-abide-light text-abide-dark inline'>
      <span className='text-[11px] uppercase font-semibold px-3 py-1 inline-block'>
        {label}
      </span>
    </div>
  );
};

export default Tag;
