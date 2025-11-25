export function WriteupCard({ post }) {
  return (
    <article className="border border-border rounded-lg overflow-hidden bg-card">
      {post.image && (
        <div className="h-44 overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
        <div className="text-foreground/60 text-sm mb-3">{new Date(post.date).toLocaleDateString()}</div>
        <p className="text-foreground/70 mb-4">{post.excerpt}</p>
        <a
          href={`#/ae86/writeups/${post.slug}`}
          className="inline-block text-sm font-medium text-primary hover:underline"
        >
          Read full writeup →
        </a>
      </div>
    </article>
  );
}
