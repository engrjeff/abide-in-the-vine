import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { cn } from "@utils/helpers";
import { FormEventHandler, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Search() {
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [keyword, setSearchKeyword] = useState(() => router.query.q ?? "");

  const toggleSearch = (open: boolean) => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    setSearchOpen(open);
  };

  const handleSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!keyword) return;

    router.push({
      pathname: "/search",
      query: {
        q: keyword,
      },
    });

    toggleSearch(false);
  };

  return (
    <div>
      <button
        className='p-2 rounded-full hover:bg-white/10'
        onClick={() => toggleSearch(true)}
      >
        <span className='sr-only'>search</span>
        <MagnifyingGlassIcon className='w-5 h-5' />
      </button>
      <div
        className={cn(
          "fixed inset-0 h-screen w-screen flex items-center justify-center z-[1010] bg-background transition-all duration-500 origin-right",
          searchOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          className='absolute top-8 right-8 text-white hover:text-primary'
          aria-label='close search'
          onClick={() => toggleSearch(false)}
        >
          <XMarkIcon className='h-6 w-6' />
        </button>
        <div className='px-6 flex-1 flex justify-center'>
          <div className='flex-1 md:flex-none'>
            <h1 className='text-muted mb-3'>Search</h1>
            <form
              onSubmit={handleSearch}
              className='flex items-center p-2 pl-5 border-2 rounded-full lg:w-[450px]'
            >
              <input
                className='bg-transparent border-none outline-none h-10 flex-1'
                placeholder='Search articles'
                value={keyword}
                onChange={(e) => setSearchKeyword(e.currentTarget.value)}
              />
              <button
                type='submit'
                aria-label='search'
                className='ml-3 h-10 w-10 inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-primary via-accent to-primary'
              >
                <MagnifyingGlassIcon className='h-6 w-6' />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
