import useScrollIndicator from "@utils/hooks/useScrollIndicator";

const ArticleScrollIndicator = () => {
  const scrollIndicatorRef = useScrollIndicator();
  return (
    <div
      ref={scrollIndicatorRef}
      className='absolute left-0 top-full z-20 h-[3px] bg-brand-primary'
    />
  );
};

export default ArticleScrollIndicator;
