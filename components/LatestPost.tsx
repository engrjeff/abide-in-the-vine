import Image from "next/image";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import { type PostWithoutBody } from "@api/contentFetchFunctions";
import { useEffect, useState } from "react";

interface LatestPostsProps {
  posts: PostWithoutBody[];
}

function LatestPosts({ posts }: LatestPostsProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setCurrentSlideIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const updateCurrent = () => {
    if (!emblaApi) return;
    setCurrentSlideIndex(emblaApi.selectedScrollSnap());
  };

  const handlePrevious = () => {
    emblaApi?.scrollPrev();

    updateCurrent();
  };
  const handleNext = () => {
    emblaApi?.scrollNext();

    updateCurrent();
  };

  const handleDotClick = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);

    updateCurrent();
  };

  return (
    <div className='relative'>
      <button
        aria-label='go to previous slide'
        onClick={handlePrevious}
        className='w-12 h-12 hidden md:flex items-center justify-center bg-white/30 rounded-full absolute z-10 top-1/2 -translate-y-1/2 left-4'
      >
        <ChevronLeftIcon className='w-5 h-5 text-white' />
      </button>
      <button
        aria-label='go to next slide'
        onClick={handleNext}
        className='w-12 h-12 hidden md:flex items-center justify-center bg-white/30 rounded-full absolute z-10 top-1/2 -translate-y-1/2 right-4'
      >
        <ChevronRightIcon className='w-5 h-5 text-white' />
      </button>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {posts.map((post) => (
            <div
              key={post._id}
              className='relative flex-[0_0_100%] mx-2 lg:mx-4'
            >
              <Link
                href={post.url}
                className='relative w-full block h-[250px] md:h-auto md:aspect-video group rounded-lg overflow-hidden'
              >
                <Image
                  src={post.bannerUrl}
                  placeholder='blur'
                  blurDataURL={post.bannerUrl}
                  alt={post.title}
                  fill
                  className='w-full h-full rounded-lg  transition-transform duration-300 brightness-50'
                />
              </Link>

              {/* <div className='absolute inset-0 bg-black/50 backdrop-brightness-50 rounded-lg pointer-events-none'></div> */}
              <div className='absolute w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
                <h1 className='text-white font-bold text-2xl md:text-4xl text-center mb-5 hover:text-accent transition-colors leading-relaxed'>
                  <Link href={post.url}>{post.title}</Link>
                </h1>
                <span className='text-sm text-white'>{post.publishedAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='absolute bottom-3 md:bottom-6 inset-x-0 w-full flex justify-center gap-3'>
        {posts.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlideIndex ? "bg-primary w-8" : "bg-white/20"
            }`}
          >
            <span className='sr-only'>go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default LatestPosts;
