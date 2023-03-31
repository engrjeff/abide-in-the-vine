interface MobileMenuButtonProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

const MobileMenuButton = ({
  onMenuToggle,
  isMenuOpen,
}: MobileMenuButtonProps) => {
  return (
    <div className='rounded-full hover:bg-slate-200 dark:hover:bg-slate-700'>
      <button
        onClick={onMenuToggle}
        aria-label='toggle menu'
        className='relative ml-auto h-10 w-10 scale-[0.8] lg:hidden lg:scale-100'
      >
        <span
          className={`absolute top-[10px] inline-block h-[3px] w-7 origin-top-left -translate-x-1/2 bg-abide-dark transition-transform duration-200 dark:bg-abide-light ${
            isMenuOpen ? "-translate-x-[10px] -translate-y-1/2 rotate-45" : ""
          }`}
        />
        <span
          className={`absolute top-[18px] inline-block h-[3px] w-7 -translate-x-1/2 bg-abide-dark transition duration-200 dark:bg-abide-light ${
            isMenuOpen ? "translate-x-2 scale-x-0 opacity-0" : ""
          }`}
        />
        <span
          className={`absolute top-[26px] inline-block h-[3px] w-7 origin-bottom-left -translate-x-1/2 bg-abide-dark transition-transform duration-200 dark:bg-abide-light ${
            isMenuOpen ? "-translate-x-[10px] translate-y-1/2 -rotate-45" : ""
          }`}
        />
      </button>
    </div>
  );
};

export default MobileMenuButton;
