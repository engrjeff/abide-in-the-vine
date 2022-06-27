const MessageUsSection = () => {
  return (
    <section className='p-2 lg:p-10 bg-abide-lighter dark:bg-abide-dark'>
      <div className='flex flex-col lg:flex-row gap-8 mx-5 md:mx-20 py-10'>
        <div className='lg:w-1/2 space-y-4'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-abide-dark dark:text-abide-light'>
            Message Us
          </h2>
          <p className='prose text-lg font-semibold dark:text-abide-mediumGray'>
            Whether you want to know God and the Gospel of Christ or you need a prayer, you may send
            us a message. We are here for you beloved.
          </p>
        </div>
        <form className='flex-1 flex flex-col gap-4'>
          <input
            type='text'
            name='name'
            aria-label='name'
            placeholder='Your name'
            className='rounded-2xl py-4 px-6 outline-0 font-semibold text-xl bg-transparent border-2 border-gray-200 dark:border-abide-darkGray dark:text-abide-light dark:placeholder:text-abide-darkGray focus:border-abide-accent dark:focus:border-abide-accent'
          />
          <input
            type='email'
            name='email'
            aria-label='email'
            placeholder='youremail@example.com'
            className='rounded-2xl py-4 px-6 outline-0 font-semibold text-xl bg-transparent border-2 border-gray-200 dark:border-abide-darkGray dark:text-abide-light dark:placeholder:text-abide-darkGray focus:border-abide-accent dark:focus:border-abide-accent'
          />
          <textarea
            name='message'
            aria-label='message'
            rows={3}
            placeholder='Enter your message here'
            className='rounded-2xl py-4 px-6 outline-0 font-semibold text-xl bg-transparent border-2 border-gray-200 dark:border-abide-darkGray dark:text-abide-light dark:placeholder:text-abide-darkGray focus:border-abide-accent dark:focus:border-abide-accent min-h-[200px] h-[200px]'
          />
          <button
            type='submit'
            className='mt-6 py-4 px-6 rounded-2xl font-semibold text-xl text-white bg-abide-main transition-opacity duration-300 hover:opacity-95'
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default MessageUsSection;
