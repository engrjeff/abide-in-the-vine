import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { matchSorter } from 'match-sorter';
import { SearchIcon, XIcon } from '@heroicons/react/outline';
import getSortedPosts from '@api/contentFetchFunctions';
import Link from 'next/link';

const posts = getSortedPosts();

const recentSearchesKey = 'ABIDE_RECENT_SEARCHES';

type RecentSearch = { title: string; url: string };

interface SearchDialogProps {
  onClose: () => void;
  visible: boolean;
}

function SearchDialog({ onClose, visible }: SearchDialogProps) {
  const [search, setSearch] = useState('');

  const [recentSearches, setRecentSearches] = useState<RecentSearch[] | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(recentSearchesKey);

      const _recentSearches = stored ? (JSON.parse(stored) as RecentSearch[]) : null;

      setRecentSearches(_recentSearches);
    } catch (error) {
      setRecentSearches(null);
    }
  }, []);

  const clearSearch = () => setSearch('');

  const saveRecentSearch = (title: string, url: string) => {
    if (recentSearches?.some((i) => i.title === title)) {
      reset();
      return;
    }

    const _recentSearches = recentSearches ? [{ title, url }, ...recentSearches] : [{ title, url }];

    localStorage.setItem(recentSearchesKey, JSON.stringify(_recentSearches));

    reset();
  };

  const reset = () => {
    // reset
    setSearch('');
    onClose();
  };

  const removeFromSearchHistory = (title: string) => {
    localStorage.setItem(
      recentSearchesKey,
      JSON.stringify(recentSearches?.filter((i) => i.title !== title))
    );

    setRecentSearches((old) => (old ? old.filter((i) => i.title !== title) : null));
  };

  const searchResults = matchSorter(posts, search, { keys: ['title', 'tags'] });

  const noRecentSearch = recentSearches?.length === 0 || !recentSearches;

  return (
    <Transition appear show={visible} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={onClose}>
        {/* Backdrop */}
        <div className='fixed inset-0 bg-black/50' aria-hidden='true' />
        <div className='fixed inset-0 flex items-center justify-center p-4'>
          <Dialog.Panel className='bg-white dark:bg-abide-dark rounded-lg shadow-md w-[98%] lg:w-1/2'>
            <div className='px-4 py-3 flex items-center'>
              <SearchIcon className='h-5 w-5 lg:h-6 lg:w-6 mr-4 text-abide-mediumGray' />
              <input
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search by post title or tags'
                className='bg-transparent px-2 py-2 flex-1 outline-0 placeholder:text-gray-300 dark:placeholder:text-abide-gray'
              />
              {Boolean(search) && (
                <button
                  onClick={clearSearch}
                  aria-label='clear search'
                  className='p-2 rounded-full text-abide-dark dark:text-abide-light lg:text-gray-500 dark:lg:text-gray-500 hover:bg-gray-100 dark:hover:bg-abide-darkestGray dark:hover:text-abide-light transition-colors duration-300'
                >
                  <XIcon className='h-5 w-5 lg:h-6 lg:w-6 text-abide-mediumGray' />
                </button>
              )}
            </div>
            <div className='min-h-[200px] px-4 py-8 border-t border-b border-abide-lighter dark:border-abide-gray'>
              {!Boolean(search) &&
                (!noRecentSearch ? (
                  <div>
                    <h3 className='font-semibold text-sm text-abide-darkestGray font-sans mb-4 px-2 dark:text-abide-lighter'>
                      Recent searches
                    </h3>
                    {recentSearches.map((item) => (
                      <div
                        key={item.title}
                        className='bg-gray-100 dark:bg-abide-darkestGray transition-colors flex items-center justify-between mb-2 px-4 py-3 rounded-md hover:bg-gray-200'
                      >
                        <Link href={item.url}>
                          <a onClick={reset} className='flex-1'>
                            {item.title}
                          </a>
                        </Link>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFromSearchHistory(item.title);
                          }}
                          title='remove this from search history'
                          aria-label='remove this from search history'
                          className='p-2 rounded-full text-abide-dark dark:text-abide-light lg:text-gray-500 dark:lg:text-gray-500 hover:bg-gray-100 dark:hover:bg-abide-darkGray dark:hover:text-abide-light transition-colors duration-300'
                        >
                          <XIcon className='h-5 w-5 lg:h-6 lg:w-6 text-abide-mediumGray' />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className='text-center text-abide-mediumGray'>No recent searches</p>
                ))}
              {Boolean(search) && (
                <div>
                  <h3 className='font-semibold text-sm text-abide-darkestGray font-sans mb-4 px-2 dark:text-abide-lighter'>
                    Found {searchResults.length} search result(s)
                  </h3>
                  <div className='max-h-[400px] overflow-y-auto px-2'>
                    {searchResults.map((result) => (
                      <Link key={result._id} href={result.url}>
                        <a
                          onClick={() => saveRecentSearch(result.title, result.url)}
                          className='group bg-gray-100 dark:bg-abide-darkestGray transition-colors flex-1 flex flex-col md:flex-row md:items-center justify-between mb-2 px-4 py-3 rounded-md hover:bg-abide-accent/40 dark:hover:bg-abide-accent/40'
                        >
                          {result.title}
                          <div className='space-x-2'>
                            {result.tags.map((tag) => (
                              <span
                                key={tag}
                                className='group-hover:bg-abide-accent dark:group-hover:bg-abide-dark group-hover:text-white font-mono text-xs bg-gray-300 dark:bg-abide-dark px-2 py-1 rounded-sm'
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className='p-4 flex justify-end'>
              <span className='font-bold text-sm italic text-abide-mediumGray'>
                Abide in the Vine
              </span>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}

function Search() {
  const [searchVisible, setSearchVisible] = useState(false);

  const openSearch = () => setSearchVisible(true);

  const closeSearch = () => setSearchVisible(false);

  return (
    <>
      <button
        onClick={openSearch}
        aria-label='search'
        className='p-2 rounded-full text-abide-dark dark:text-abide-light lg:text-gray-500 dark:lg:text-gray-500 hover:bg-gray-100 dark:hover:bg-abide-dark dark:hover:text-abide-light transition-colors duration-300'
      >
        <SearchIcon className='h-5 w-5 lg:h-6 lg:w-6' />
      </button>
      <SearchDialog
        key={searchVisible.valueOf().toString()}
        visible={searchVisible}
        onClose={closeSearch}
      />
    </>
  );
}

export default Search;
