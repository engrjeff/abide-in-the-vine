import Card from "./Card";
import TagLink from "./TagLink";

function TagClouds({ tags }: { tags: string[] }) {
  return (
    <Card>
      <h4 className='text-xl font-bold'>Tag Clouds</h4>
      <span className='bg-gradient-to-r from-primary to-accent w-10 h-1 rounded-full inline-block'></span>

      <div className='flex gap-2 items-center flex-wrap mt-6'>
        {tags.map((tag) => (
          <TagLink key={tag} tag={tag} />
        ))}
      </div>
    </Card>
  );
}

export default TagClouds;
