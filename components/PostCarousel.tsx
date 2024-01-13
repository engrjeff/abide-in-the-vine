import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import useEmblaCarousel from 'embla-carousel-react';

import { type PostWithoutBody } from '@api/contentFetchFunctions';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Card from './Card';

function PostCarousel({ posts }: { posts: PostWithoutBody[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', () => {
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
    <Card className="relative">
      <div>
        <h4 className="text-xl font-bold">Gospel Posts</h4>
        <span className="bg-gradient-to-r from-primary to-accent w-10 h-1 rounded-full inline-block"></span>
      </div>
      <div className="overflow-hidden mt-6" ref={emblaRef}>
        <div className="flex">
          {posts.map((post) => (
            <div key={post._id} className="relative flex-[0_0_100%] mx-3">
              <Link href={post.url}>
                <div className="relative aspect-video">
                  <Image
                    src={post.bannerUrl}
                    placeholder="blur"
                    blurDataURL={post.bannerUrl}
                    alt={post.title}
                    fill
                    className="w-full h-full rounded-lg  transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="pt-6">
                <h5 className="text-lg lg:text-xl font-semibold">
                  <Link href={post.url}>{post.title}</Link>
                </h5>
                <span className="text-sm text-muted">{post.publishedAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 mt-3">
        <button
          aria-label="go to previous slide"
          onClick={handlePrevious}
          className="w-8 h-8 flex items-center justify-center bg-white/5 text-muted border rounded-full transition-colors hover:text-accent hover:border-accent"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </button>
        <button
          aria-label="go to next slide"
          onClick={handleNext}
          className="w-8 h-8 flex items-center justify-center bg-white/5 text-muted border rounded-full transition-colors hover:text-accent hover:border-accent"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
    </Card>
  );
}

export default PostCarousel;
