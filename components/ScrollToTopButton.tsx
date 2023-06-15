import useScrollToTop from "@utils/hooks/useScrollToTop";

const ScrollToTopButton = () => {
  const { scrollToTop, shown } = useScrollToTop(300);

  return (
    <button
      aria-label='scroll to top'
      onClick={scrollToTop}
      className={`${
        shown ? "scale-100" : "scale-0"
      } w-10 h-10 transition-transform duration-200 flex fixed right-4 lg:right-20 bottom-4 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg justify-center items-center text-white`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={2}
        stroke='currentColor'
        className='w-5 h-5'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M4.5 15.75l7.5-7.5 7.5 7.5'
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
