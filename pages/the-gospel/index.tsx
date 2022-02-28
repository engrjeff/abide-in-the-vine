import React from "react";
import { NextPage } from "next";
import { GetStaticProps } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import qs from "qs";

import Layout from "@components/Layout";
import SectionContainer from "@components/SectionContainer";
import { abide, API_URL } from "@utils/constants";
import { CMSGospelResponse, GospelSection } from "@utils/types";
import { transformGospelResponse } from "@utils/helpers";
import BackButton from "@components/BackButton";
import { NextSeo } from "next-seo";
import ShareButtons from "@components/ShareButtons";

interface GospelPageProps {
  gospelData: GospelSection[];
}

const GospelPage: NextPage<GospelPageProps> = (props) => {
  const { gospelData } = props;

  return (
    <Layout
      title='The Gospel of Jesus Christ | Abide in the Vine'
      descr={abide.gospelDesc}
    >
      <NextSeo
        openGraph={{
          url: `${abide.siteUrl}/the-gospel`,
          title: "The Gospel of Jesus Christ | Abide in the Vine",
          description: abide.gospelDesc,
          site_name: "Abide in the Vine",
          type: "article",
          article: {
            section: "Blogs",
            authors: [abide.author],
            tags: [
              "what is the gospel",
              "how to be saved",
              "Jesus Christ",
              "Christianity",
              "salvation",
            ],
          },
          images: [
            {
              url: abide.gospelBanner,
              alt: "Gospel of Jesus Christ",
            },
          ],
        }}
      />
      <SectionContainer className='my-32 flex flex-col items-center'>
        <BackButton backToPath='/' label='Back to Home' />
        <article className='abide-article mt-4'>
          <h1 className='text-3xl font-extrabold text-abide-dark mt-2'>
            The Gospel of Jesus Christ
          </h1>
          <ShareButtons />
          {gospelData.map((g) => (
            <div key={g.id}>
              <h2 className='mt-8 border-b-2 border-abide-accent inline-block text-2xl'>
                {g.sectionTitle}
              </h2>
              <div className='aspect-video'>
                <Image
                  src={g.banner.formats.medium?.url as string}
                  alt={g.sectionTitle}
                  width={g.banner.formats.medium?.width}
                  height={g.banner.formats.medium?.height}
                />
              </div>
              <ReactMarkdown>{g.sectionContent}</ReactMarkdown>
            </div>
          ))}
        </article>
      </SectionContainer>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const query = qs.stringify(
    { populate: ["sectionImage"], sort: ["createdAt:asc"] },
    { encodeValuesOnly: true }
  );

  const response = await fetch(`${API_URL}/api/gospels?${query}`);
  const jsonDoc: CMSGospelResponse = await response.json();

  const gospelData = transformGospelResponse(jsonDoc);

  return {
    props: {
      gospelData,
    },
  };
};

export default GospelPage;
