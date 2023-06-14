import useScrollIndicator from "@utils/hooks/useScrollIndicator";

const ArticleScrollIndicator = () => {
  const scrollIndicatorRef = useScrollIndicator();
  return (
    <div
      ref={scrollIndicatorRef}
      className='fixed left-0 top-0 z-[1000] h-[3px] bg-gradient-to-r from-primary to-accent'
    />
  );
};

export default ArticleScrollIndicator;
