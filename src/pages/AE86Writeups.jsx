import { Navbar } from "../components/Home/Navbar";
import { WriteupsList } from "../components/AE86/WriteupsList";

export default function AE86Writeups() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container py-12">
        <div className="mx-auto max-w-4xl">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">AE86 Writeups</h1>
            <p className="mt-2 text-foreground/70">
              Project posts, how-tos, and photo writeups documenting work on my AE86.
            </p>
          </header>

          <section className="space-y-6">
            <WriteupsList />
          </section>
        </div>
      </main>
    </div>
  );
}
