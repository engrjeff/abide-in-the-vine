import Card from "./Card";

function TagClouds({ tags }: { tags: string[] }) {
  return (
    <Card>
      <h4 className='text-xl font-bold'>Tag Clouds</h4>
      <span className='bg-gradient-to-r from-primary to-accent w-10 h-1 rounded-full inline-block'></span>

      <div className='flex gap-2 items-center flex-wrap mt-6'>
        {tags.map((tag) => (
          <span
            key={tag}
            className='px-3 py-1.5 rounded-full border text-xs text-muted capitalize'
          >
            #{tag}
          </span>
        ))}
      </div>
    </Card>
  );
}

export default TagClouds;
