import { Navbar } from "../../../components/Home/Navbar";
import { sr20deSwapMeta, Sr20deSwapContent } from "../../../components/AE86/Writeups/Sr20deSwap";

export default function Sr20deSwapWriteup() {
  const post = sr20deSwapMeta;

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
            <Sr20deSwapContent />
          </article>

          <div className="mt-8">
            <a href="#/ae86/writeups" className="inline-block text-sm font-medium text-primary hover:underline">← Back to writeups</a>
          </div>
        </div>
      </main>
    </div>
  );
}
