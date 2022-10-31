import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo title='About Us - Abide in the Vine' />
      <section className='container py-6'>
        <div className='prose prose-xl mx-auto dark:prose-invert'>
          <h1 className='text-abide-dark dark:text-abide-light text-4xl font-extrabold my-6'>
            About Us
          </h1>
          <p>
            Abide in the Vine is a Christ-centered, non-profit ministry located in the Philippines.
            This ministry exists to glorify God by proclaiming Christ and Him crucified (2 Cor. 2:2)
            to all people.
          </p>
          <p>
            We believe that Christ is the only way to be saved from sin and to be reconciled with
            God. Furthermore, we believe and proclaim that Christ is all-satisfying and supreme over
            all. For this reason, it is our deep prayer and desire that people will run to Christ
            for salvation and embrace Him as their ultimate joy and have their joy found only in
            Him.
          </p>
          <p>May you be blessed by the posts in this website. Soli Deo Gloria!</p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
