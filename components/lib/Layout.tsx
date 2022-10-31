import { ReactNode } from 'react';
import { NextSeo } from 'next-seo';

import Header from '@components/lib/Header';
import Footer from '@components/lib/Footer';

import { abide } from '@utils/constants';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NextSeo
        title='Abide in the Vine'
        description={abide.desc}
        canonical={abide.canonicalUrl}
        facebook={{ appId: abide.fbAppId }}
        openGraph={{
          url: abide.canonicalUrl,
          title: 'Abide in the Vine',
          description: abide.desc,
          site_name: 'Abide in the Vine',
          images: [
            {
              url: abide.bannerUrl,
              alt: 'Abide in the Vine',
            },
          ],
        }}
        twitter={{
          handle: '@engrjeffsegovia',
          site: 'Abide in the Vine',
          cardType: 'summary_large_image',
        }}
      />
      <Header />
      <main className='dark:bg-abide-darkestGray pt-4 mt-[64px] lg:mt-[84px]'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
