import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Search() {
  return (
    <div>
      <button className='p-2 rounded-full hover:bg-white/10'>
        <span className='sr-only'>search</span>
        <MagnifyingGlassIcon className='w-5 h-5' />
      </button>
    </div>
  );
}

export default Search;
