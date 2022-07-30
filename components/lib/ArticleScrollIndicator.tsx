import useScrollIndicator from "@utils/hooks/useScrollIndicator";

const ArticleScrollIndicator = () => {
  const scrollIndicatorRef = useScrollIndicator();
  return (
    <div
      ref={scrollIndicatorRef}
      className='h-1 bg-abide-accent absolute top-full left-0 z-20'
    />
  );
};

export default ArticleScrollIndicator;
