import {
  type GetServerSideProps,
  type InferGetServerSidePropsType,
} from "next";
import Link from "next/link";
import { PostWithoutBody, getSearchResults } from "@api/contentFetchFunctions";
import SectionHeading from "@components/SectionHeading";
import BlogCard from "@components/BlogCard";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

function SearchPage({ posts, q }: Props) {
  const hasResults = posts.length > 0;

  return (
    <>
      <div className='relative'>
        <div className='h-[300px] w-full bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC] text-white md:h-[400px]'>
          <div className='absolute inset-0 flex flex-col justify-center gap-8 bg-black/10 p-6 md:items-center'>
            <h1 className='text-5xl font-extrabold md:text-6xl'>
              <span>Search - {q}</span>
            </h1>
          </div>
        </div>
      </div>
      <div className='bg-background py-10'>
        <div className='container max-w-site space-y-10'>
          <div className='flex items-center gap-x-2'>
            <Link className='transition-colors hover:text-accent' href='/'>
              Home
            </Link>
            <span>{">"}</span>
            <Link className='transition-colors hover:text-accent' href='/blogs'>
              Blogs
            </Link>
            <span>{">"}</span>
            <span>{q}</span>
          </div>
          <SectionHeading
            title={
              hasResults
                ? `Search results related to "${q}"`
                : `No results found for "${q}"`
            }
          />
          <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-2'>
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>

          {!hasResults && (
            <Link
              href='/blogs'
              className='text-white inline-flex items-center justify-center bg-gradient-to-r from-primary to-accent px-6 py-4 rounded-full font-medium'
            >
              Go to Blogs
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  q: string;
  posts: PostWithoutBody[];
}> = async (context) => {
  const { q } = context.query as { q: string };

  const posts = getSearchResults(q);

  return {
    props: {
      posts,
      q,
    },
  };
};

export default SearchPage;
