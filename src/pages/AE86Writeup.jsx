import { useParams, Link } from "react-router-dom";
import { Navbar } from "../components/Home/Navbar";
import { writeups } from "../components/AE86/writeupsData";

export default function AE86Writeup() {
  const { slug } = useParams();
  const post = writeups.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="container py-12">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-2xl font-bold">Writeup not found</h1>
            <p className="mt-4 text-foreground/70">Couldn't find the requested writeup.</p>
            <div className="mt-6">
              <a href="#/ae86/writeups" className="text-primary hover:underline">Back to writeups</a>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container py-12">
        <div className="mx-auto max-w-4xl">
          <header className="mb-6">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <div className="text-foreground/60 text-sm">{new Date(post.date).toLocaleDateString()}</div>
          </header>

          {post.image && (
            <div className="mb-6 h-64 overflow-hidden rounded-lg">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          <article className="prose prose-invert max-w-none">
            {post.content && post.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </article>

          <div className="mt-8">
            <a href="#/ae86/writeups" className="inline-block text-sm font-medium text-primary hover:underline">← Back to writeups</a>
          </div>
        </div>
      </main>
    </div>
  );
}
