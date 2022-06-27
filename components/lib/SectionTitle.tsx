const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2 className='pb-2 mb-5 inline-block text-2xl font-extrabold tracking-wide text-abide-dark relative after:absolute after:h-[3px] after:w-10 after:bg-abide-accent after:-bottom-1 after:left-0 before:absolute before:h-[3px] before:w-full before:bg-gray-200 dark:before:bg-abide-darkGray before:-bottom-1 dark:text-abide-light'>
      {title}
    </h2>
  );
};

export default SectionTitle;
