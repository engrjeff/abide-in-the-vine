interface MobileMenuButtonProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

const MobileMenuButton = ({
  onMenuToggle,
  isMenuOpen,
}: MobileMenuButtonProps) => {
  return (
    <div className='rounded-full hover:bg-gray-100 dark:hover:bg-abide-dark'>
      <button
        onClick={onMenuToggle}
        aria-label='toggle menu'
        className='ml-auto h-10 w-10 relative lg:hidden scale-[0.8] lg:scale-100'
      >
        <span
          className={`absolute top-[10px] -translate-x-1/2 inline-block bg-abide-dark dark:bg-abide-light w-7 h-[3px] origin-top-left transition-transform duration-200 ${
            isMenuOpen ? "rotate-45 -translate-y-1/2 -translate-x-[10px]" : ""
          }`}
        />
        <span
          className={`absolute top-[18px] -translate-x-1/2 inline-block bg-abide-dark dark:bg-abide-light w-7 h-[3px] transition duration-200 ${
            isMenuOpen ? "opacity-0 translate-x-2 scale-x-0" : ""
          }`}
        />
        <span
          className={`absolute top-[26px] -translate-x-1/2 inline-block bg-abide-dark dark:bg-abide-light w-7 h-[3px] origin-bottom-left transition-transform duration-200 ${
            isMenuOpen ? "-rotate-45 translate-y-1/2 -translate-x-[10px]" : ""
          }`}
        />
      </button>
    </div>
  );
};

export default MobileMenuButton;
