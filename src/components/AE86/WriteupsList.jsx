import { writeupsMeta } from "./Writeups";
import { WriteupCard } from "./WriteupCard";

export function WriteupsList() {
  if (!writeupsMeta || writeupsMeta.length === 0) {
    return <p className="text-foreground/70">No writeups yet. I'll post updates here as the project progresses.</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {writeupsMeta.map((post) => (
        <WriteupCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
