import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo title='About Us - Abide in the Vine' />
      <section className='container py-6'>
        <h1 className='text-abide-dark dark:text-abide-light text-4xl font-extrabold my-6'>
          About Us - this page is still being built
        </h1>
      </section>
    </>
  );
};

export default AboutPage;
