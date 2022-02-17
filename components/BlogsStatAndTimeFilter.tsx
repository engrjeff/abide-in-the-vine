import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon, CheckIcon } from "@heroicons/react/solid";

const filterOptions = ["Most Recent", "Oldest", "Most Viewed", "Most Shared"];

interface BlogsStatAndTimeFilterProps {
  selectedFilter: string;
  onChange: (filter: string) => void;
}

const BlogsStatAndTimeFilter = (props: BlogsStatAndTimeFilterProps) => {
  const { selectedFilter, onChange } = props;
  return (
    <div className='hidden md:flex items-center gap-x-6'>
      <p className='filter-label'>Filters</p>
      <div>
        <Listbox value={selectedFilter} onChange={onChange}>
          <div className='relative mt-1'>
            <Listbox.Button className='relative w-full py-3 pl-6 pr-14 text-left border text-sm min-w-[162px] border-abide-light rounded-md text-abide-gray font-bold'>
              <span className='block truncate'>{selectedFilter}</span>
              <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                <SelectorIcon
                  className='w-5 h-5 text-gray-400'
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='z-10 absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {filterOptions.map((option) => (
                  <Listbox.Option
                    key={option}
                    className={({ active }) =>
                      `${
                        active
                          ? "text-abide-main bg-abide-main/10"
                          : "text-abide-dark"
                      }
                          cursor-pointer select-none relative py-2 pl-10 pr-4`
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected ? "font-medium" : "font-normal"
                          } block truncate`}
                        >
                          {option}
                        </span>
                        {selected ? (
                          <span
                            className={`${
                              active ? "text-abide-main" : "text-abide-main"
                            }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                            <CheckIcon className='w-5 h-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
};

export default BlogsStatAndTimeFilter;
