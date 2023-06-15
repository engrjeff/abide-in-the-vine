import Link from "next/link";

function TagLink({ tag }: { tag: string }) {
  return (
    <Link key={tag} href={`/blogs/tags/${tag}`} className='inline-flex'>
      <span className='px-3 py-1.5 rounded-full border text-xs text-muted capitalize transition-colors hover:border-primary hover:bg-primary hover:text-white'>
        #{tag}
      </span>
    </Link>
  );
}

export default TagLink;
