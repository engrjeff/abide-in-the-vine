interface PostTagProps {
  tag: string;
}
const PostTag = ({ tag }: PostTagProps) => {
  return (
    <button className='capitalize flex items-center rounded-full text-gray-600 h-8 px-5 text-sm font-semibold  bg-gray-200 duration-200 transition-colors dark:bg-abide-darkGray dark:text-abide-light'>
      {tag}
    </button>
  );
};

export default PostTag;
