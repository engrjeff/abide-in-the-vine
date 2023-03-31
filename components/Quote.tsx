interface QuoteProps {
  content: string;
  cite?: string;
}

function Quote({ content, cite }: QuoteProps) {
  return (
    <div className='border-b border-t border-slate-200 dark:border-slate-700'>
      <blockquote className='not-prose relative border-none text-[22px] not-italic leading-[1.8]'>
        <span className='absolute -left-2 text-6xl'>&ldquo;</span>
        <p>{content}</p>
        {cite ? (
          <span className='text-base font-medium uppercase tracking-widest text-gray-700 dark:text-brand-coolnavy200'>
            <span className='text-brand-primary'>&mdash;</span> {cite}{" "}
            <span className='text-brand-primary'>&mdash;</span>
          </span>
        ) : null}
      </blockquote>
    </div>
  );
}

export default Quote;
