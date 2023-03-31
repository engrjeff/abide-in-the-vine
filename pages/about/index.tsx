import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo title='About Us - Abide in the Vine' />
      <div className='relative'>
        <div className='h-[300px] w-full bg-about bg-cover bg-center bg-no-repeat text-white md:h-[400px]'>
          <div className='absolute inset-0 flex flex-col justify-center gap-8 bg-black/70 p-6 md:items-center'>
            <h1 className='text-5xl font-extrabold md:text-6xl'>
              <span>About Us</span>
            </h1>
            <p className='text-lg uppercase tracking-wider'>
              Proclaiming Christ and Him crucified
            </p>
          </div>
        </div>
      </div>
      <section className='container max-w-4xl py-20'>
        <h1 className='my-6 text-4xl font-extrabold text-abide-dark dark:text-abide-light'>
          About Us
        </h1>
        <div className='prose mx-auto font-article dark:prose-invert lg:prose-xl'>
          <p>
            Abide in the Vine is a Christ-centered, non-profit ministry located
            in the Philippines. This ministry exists to glorify God by
            proclaiming Christ and Him crucified (2 Cor. 2:2) to all people.
          </p>
          <p>
            We believe that Christ is the only way to be saved from sin and to
            be reconciled with God. Furthermore, we believe and proclaim that
            Christ is all-satisfying and supreme over all. For this reason, it
            is our deep prayer and desire that people will run to Christ for
            salvation and embrace Him as their ultimate joy and have their joy
            found only in Him.
          </p>
          <p>
            May you be blessed by the posts in this website. Soli Deo Gloria!
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
