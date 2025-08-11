import { Download, Mail, Github, MapPin, Briefcase } from "lucide-react";
import { cn } from "../lib/utils";
import portrait from "../assets/Portrait.jpeg";


export const About = () => {
  return (
    <section id="about" className={cn("relative py-20 md:py-28 bg-background text-foreground")}>      
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16 animate-[var(--animate-fade-in)]">
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-glow">Kyle Corbett</span> — Physics, Software, Hardware
          </h2>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            Recent graduate with an M.S. in physics, adept at using various programming languages such as Python and Julia to build simulations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-start">
          {/* Left: Bio & highlights */}
          <div className="md:col-span-3 space-y-6 animate-[var(--animate-fade-in-delay-1)]">
            <div className="rounded-2xl bg-card/70 border border-border p-6 md:p-8 text-left shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold">A little about me</h3>
              <p className="mt-3 text-foreground/70">
              // Short (1–2 sentences)
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi at tristique feugiat, augue lorem luctus odio, eget volutpat nunc lorem id magna.

              </p>

              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "React + Tailwind enjoyer (TypeScript friendly)",
                  "Express / PostgreSQL on the backend",
                  "Authentication, role-based access, and clean REST",
                  "Data viz & dashboards with an eye for UX",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-border/60 bg-background/60 p-3"
                  >
                    <span className="mt-1 size-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                
                <a
                  href="/Kyle_Corbett_Resume.pdf"
                  className={cn(
                    "inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2",
                    "bg-background/60 hover:bg-background/80 transition-colors"
                  )}
                >
                  <Download className="size-4" /> Resume
                </a>
                <a
                  href="https://github.com/swestastic"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 hover:bg-background/80"
                >
                  <Github className="size-4" /> GitHub
                </a>
              </div>
            </div>

            
            
          </div>

          
          <aside className="md:col-span-2 space-y-6">
            <div className="gradient-border p-[1px] rounded-2xl animate-[var(--animate-fade-in-delay-1)]">
              <div className="rounded-2xl bg-card/80 p-5 border border-border/50">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src= {portrait}
                    alt="Portrait of Kyle Corbett"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
                <div className="mt-4 flex items-center gap-2 text-foreground/80">
                  <MapPin className="size-4" /> Bay Area, CA
                </div>
                <div className="mt-2 flex items-center gap-2 text-foreground/80">
                  <Briefcase className="size-4" /> Open to full‑time positions
                </div>
              </div>
            </div>

            
          </aside>
        </div>
      </div>
    </section>
  );
};
