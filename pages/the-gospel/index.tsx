import { NextPage } from "next";
import { GetStaticProps } from "next";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import qs from "qs";

import { abide, API_URL } from "@utils/constants";
import {
  CMSGospelResponse,
  CMSPostResponse,
  GospelSection,
  Post,
} from "@utils/types";
import { transformGospelResponse, transformPostResponse } from "@utils/helpers";
import BackButton from "@components/BackButton";
import { NextSeo } from "next-seo";
import ShareButtons from "@components/ShareButtons";
import PostCard from "@components/lib/PostCard";

interface GospelPageProps {
  gospelData: GospelSection[];
  relatedPosts: Post[];
}

const GospelPage: NextPage<GospelPageProps> = (props) => {
  const { gospelData, relatedPosts } = props;

  const ogTags = {
    url: `${abide.canonicalUrl}/the-gospel`,
    images: [
      {
        url: abide.gospelBanner,
        alt: "The Gospel of Jesus Christ",
      },
    ],
  };

  return (
    <>
      <NextSeo
        title='The Gospel of Jesus Christ'
        description={abide.gospelDesc}
        openGraph={ogTags}
      />
      <section className='container'>
        <article className='px-5 md:px-10 max-w-4xl mx-auto mt-2 md:mt-10 flex flex-col'>
          <BackButton backToPath='/' label='Back to Home' />
          <h1 className='text-abide-dark dark:text-abide-light text-4xl font-extrabold my-6'>
            The Gospel of Jesus Christ
          </h1>
          <ShareButtons />
          {gospelData.map((g) => (
            <div key={g.id} className='mb-8'>
              <h2 className='text-3xl md:text-4xl font-extrabold text-abide-dark dark:text-abide-light'>
                {g.sectionTitle}
              </h2>
              <figure className='my-10'>
                <div className='aspect-video relative mb-5 bg-center rounded-xl overflow-hidden'>
                  <Image
                    src={g.banner.url}
                    alt={
                      g.banner.alternativeText || g.sectionTitle.toLowerCase()
                    }
                    layout='fill'
                    className='object-cover object-center rounded-xl'
                    placeholder='blur'
                    blurDataURL={g.banner.url}
                  />
                </div>
                <span className='block text-center text-gray-300 dark:text-abide-mediumGray'>
                  The Gospel: {g.sectionTitle}
                </span>
              </figure>
              <div className='max-w-3xl w-full mx-auto'>
                <ReactMarkdown className='prose prose-lg md:prose-xl prose-blockquote:border-abide-accent prose-blockquote:py-3 prose-blockquote:bg-abide-lighter text-justify dark:prose-invert dark:prose-blockquote:bg-abide-dark'>
                  {g.sectionContent}
                </ReactMarkdown>
              </div>
            </div>
          ))}
        </article>
        <hr className='my-10' />
        <div className='px-5 md:px-10 max-w-4xl mx-auto my-10'>
          <div className='space-y-3'>
            <h4 className='text-3xl lg:text-4xl font-extrabold text-abide-dark dark:text-abide-light'>
              Want to know the Gospel more?,
            </h4>
            <p className='text-lg lg:text-xl text-zinc-700 font-semibold dark:text-abide-mediumGray'>
              Here are other posts about the Gospel
            </p>
          </div>
          <div className='my-10 grid lg:grid-cols-3 gap-6'>
            {relatedPosts.map((post) => (
              <PostCard key={post.id} post={post} isSmall minimal />
            ))}
          </div>
        </div>
      </section>
    </>
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

  const nextQuery = qs.stringify(
    {
      fields: ["title", "slug"],
      populate: ["tags", "banner"],
    },
    { encodeValuesOnly: true }
  );

  const nextResponse = await fetch(`${API_URL}/api/posts?${nextQuery}`);
  const nextJsonDoc: CMSPostResponse = await nextResponse.json();
  const nextPosts = transformPostResponse(nextJsonDoc);

  const postsWithGospelTags = nextPosts.filter((post) =>
    post.tags.some((tag) =>
      ["Gospel", "Christ", "atonement"].includes(tag.name)
    )
  );

  // shuffle the posts and get 3 posts only
  const shuffledPosts = postsWithGospelTags.sort(() => 0.5 - Math.random());
  const relatedPosts = shuffledPosts.slice(0, 3);

  return {
    props: {
      gospelData,
      relatedPosts,
    },
  };
};

export default GospelPage;
