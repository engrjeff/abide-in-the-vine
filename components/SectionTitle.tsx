interface SectionTitleProps {
  title: string;
  subtitle: string;
}

function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className='mb-10 space-y-3 text-center md:mb-20'>
      <h2 className='text-3xl font-bold md:text-4xl'>{title}</h2>
      <p className='text-lg text-brand-gray500 dark:text-brand-coolnavy200'>
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;
