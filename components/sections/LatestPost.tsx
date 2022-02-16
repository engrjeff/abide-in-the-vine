import React from "react";
import Image from "next/image";

import SectionTitle from "@components/SectionTitle";
import CTAButton from "@components/CTAButton";
import SectionContainer from "@components/SectionContainer";
import { Post } from "@utils/types";

interface LatestPostProps {
  post: Post;
}

const LatestPost = (props: LatestPostProps) => {
  const { post } = props;

  const banner = post.banner.formats.large || post.banner;

  return (
    <SectionContainer>
      <section>
        <SectionTitle title='Latest Post' />
        <div className='grid grid-cols-10 gap-x-4 mt-8'>
          <div className='col-span-10 md:col-span-4 flex flex-col gap-y-4'>
            <p className='uppercase tracking-widest font-medium text-abide-gray'>
              Article
            </p>
            <h4 className='text-4xl md:text-5xl text-abide-dark font-extrabold capitalize'>
              {post.title}
            </h4>
            <div className='block md:hidden'>
              <Image
                src={banner.url}
                alt={post.title}
                width={banner.width}
                height={banner.height}
              />
            </div>
            <p className='text-abide-gray text-lg mb-6'>{post.description}</p>
            <CTAButton
              isLink
              href={`/blogs/${post.slug}`}
              text='Read Now'
              className='self-center md:self-start'
            />
          </div>
          <div className='col-start-6 col-span-5 hidden md:block'>
            <Image
              src={banner.url}
              alt={post.title}
              width={banner.width}
              height={banner.height}
            />
          </div>
        </div>
      </section>
    </SectionContainer>
  );
};

export default LatestPost;
