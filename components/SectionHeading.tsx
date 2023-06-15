function SectionHeading({ title }: { title: string }) {
  return (
    <div>
      <h2 className='font-bold text-2xl'>{title}</h2>
      <span className='bg-gradient-to-r from-primary to-accent w-10 h-1 rounded-full inline-block'></span>
    </div>
  );
}

export default SectionHeading;
