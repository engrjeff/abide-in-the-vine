import Link from "next/link";
import type { Tag } from "@utils/types";

interface PostTagProps {
  tag: Tag;
}
const PostTag = ({ tag }: PostTagProps) => {
  return (
    <Link key={tag.id} href='/'>
      <a className='capitalize flex items-center rounded-full text-gray-600 h-8 px-5 text-sm font-semibold  bg-gray-200 duration-200 transition-colors hover:text-white hover:bg-abide-main dark:bg-abide-darkGray dark:text-abide-light dark:hover:bg-abide-main'>
        {tag.name}
      </a>
    </Link>
  );
};

export default PostTag;
