import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const WhatWeBelievePage: NextPage = () => {
  return (
    <>
      <NextSeo title='About Us - Abide in the Vine' />
      <section className='container mx-auto p-4 lg:p-10 py-6'>
        <h1 className='text-abide-dark dark:text-abide-light text-5xl font-extrabold mb-8'>
          What We Believe
        </h1>
      </section>
    </>
  );
};

export default WhatWeBelievePage;
