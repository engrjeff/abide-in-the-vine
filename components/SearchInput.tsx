import React from "react";
import { SearchIcon } from "@heroicons/react/solid";

interface SearchInputProps {
  search: string;
  onChange: (value: string) => void;
}

const SearchInput = (props: SearchInputProps) => {
  const { search, onChange } = props;

  return (
    <div className='relative'>
      <input
        value={search}
        onChange={(e) => onChange(e.target.value)}
        type='text'
        placeholder='Search blogs'
        className='w-full pl-9 pr-4 py-2 bg-abide-light rounded-full outline-none ring-abide-light ring-offset-4 hover:ring-4 duration-100 transition'
      />
      <SearchIcon className='h-5 w-6 text-abide-gray absolute left-2 top-1/2 -translate-y-1/2' />
    </div>
  );
};

export default SearchInput;
