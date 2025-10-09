import { Download, Github, MapPin, Briefcase, Code2, Boxes, Mail, Linkedin, Globe } from "lucide-react";
import { cn } from "../../lib/utils";
import portrait from "../../assets/Portrait.jpeg";


const MeterDots = ({ value = 0, outOf = 5 }) => (
  <div className="flex gap-1" aria-hidden>
    {Array.from({ length: outOf }).map((_, i) => (
      <span
        key={i}
        className={cn("inline-block size-2.5 rounded-full", i < value ? "bg-primary" : "bg-border/60")}
      />
    ))}
  </div>
);

const SkillCategory = ({ icon: Icon, title, items }) => (
  <div className="rounded-xl border border-border/60 bg-background/60 p-4">
    <div className="mb-3 flex items-center gap-2">
      <Icon className="size-4 text-primary" />
      <h4 className="text-sm font-semibold">{title}</h4>
    </div>
    <ul className="space-y-2">
      {items.map(({ name, level }) => (
        <li key={name} className="flex items-center justify-between text-sm">
          <span className="text-foreground/80">{name}</span>
          <MeterDots value={level} />
        </li>
      ))}
    </ul>
  </div>
);


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
            Recent graduate with an M.S. in physics, adept at using various programming languages such as Python and
            Julia to build simulations and models. Experienced in SolidWorks with a strong background in automotive projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-stretch">
          {/* LEFT: nested grid so the Skills card ends where the photo card ends */}
          <div className="md:col-span-3 grid md:grid-rows-[auto_1fr] gap-6 animate-[var(--animate-fade-in-delay-1)] h-full">
            {/* About card */}
            <div className="rounded-2xl bg-card/70 border border-border p-6 md:p-8 text-left shadow-sm">
              <h3 className="text-xl md:text-2xl font-semibold">A little about me</h3>
              <p className="mt-3 text-foreground/70">
                My name is Kyle Corbett. I'm a recent graduate with a Master of Science in Physics from San Jose State University.
                I have a strong background in computational physics, with experience in developing simulations and models using Python and Julia.
                I have 8 years of working on automotive related projects, with 5 years SolidWorks experience as well.
                Outside of academics, I am passionate about cars and drifting, golf, and coffee and I enjoy working on personal projects that combine these interests.
                Currently looking for roles where I can apply my skills!
              </p>

              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Python",
                  "Julia",
                  "SolidWorks",
                  "Condensed Matter Physics",
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
                  href="/kylePortfolio/Kyle%20Corbett%20Resume%202025.pdf"
                  className={cn(
                    "inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2",
                    "bg-background/60 hover:bg-background/80 transition-colors"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="size-4" /> Resume
                </a>
                
              </div>
            </div>

            {/* Skills card (dot meters) */}
            <div className="rounded-2xl bg-card/70 border border-border p-6 md:p-8 shadow-sm h-full flex flex-col animate-[var(--animate-fade-in-delay-2)]">
              <h3 className="text-xl md:text-2xl font-semibold">Skills</h3>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <SkillCategory
                  icon={Code2}
                  title="Software"
                  items={[
                    { name: "Python", level: 4 },
                    { name: "Julia", level: 4 },
                    { name: "SolidWorks", level: 4 },
                    { name: "Rust", level: 3 },
                  ]}
                />
                <SkillCategory
                  icon={Boxes}
                  title="Hardware"
                  items={[
                    { name: "Raspberry Pi", level: 5 },
                    { name: "Arduino", level: 3 },
                    { name: "Automotive Mechanical", level: 5 },
                    { name: "3D Printing", level: 5 },
                  ]}
                />
                <SkillCategory
                  icon={Code2}
                  title="Physics"
                  items={[
                    { name: "Condensed Matter", level: 5 },
                    { name: "Quantum Theory", level: 4 },
                    { name: "Statistical Mechanics", level: 4 },
                    { name: "Mechanical Systems", level: 4 },
                  ]}
                />
                <SkillCategory
                  icon={Code2}
                  title="Other"
                  items={[
                    { name: "Team Work", level: 5 },
                    { name: "Communication", level: 5 },
                    { name: "Teaching", level: 5 },
                  ]}
                />
              </div>

              <div className="mt-auto" />
            </div>
          </div>

          {/* RIGHT: photo card */}
          <aside className="md:col-span-2 h-full">
            <div className="gradient-border p-[1px] rounded-2xl animate-[var(--animate-fade-in-delay-1)] h-full">
              <div className="rounded-2xl bg-card/80 p-5 border border-border/50 h-full flex flex-col">
                <div className="relative overflow-hidden rounded-xl">
                  <img src={portrait} alt="Portrait of Kyle Corbett" className="w-full aspect-[4/5] object-cover" />
                </div>
                <div className="mt-4 flex items-center gap-2 text-foreground/80">
                  <MapPin className="size-4" /> Bay Area, CA
                </div>
                <div className="mt-2 flex items-center gap-2 text-foreground/80">
                  <Briefcase className="size-4" /> Open to full-time positions
                </div>

                <div className="mt-auto pt-4 border-t border-border/60">
  <h4 className="text-sm font-semibold text-foreground/80 mb-2">Contact</h4>

  <div className="grid grid-cols-2 gap-2">
    <a
      href="mailto:kylecorbet@gmail.com"
      className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 hover:bg-background/80"
      aria-label="Email"
    >
      <Mail className="size-4" /> Email
    </a>
    <a
      href="https://www.linkedin.com/in/kyleccorbett/"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 hover:bg-background/80"
      aria-label="LinkedIn"
    >
      <Linkedin className="size-4" /> LinkedIn
    </a>
    <a
      href="https://github.com/swestastic"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 hover:bg-background/80"
      aria-label="GitHub"
    >
      <Github className="size-4" /> GitHub
    </a>
    <a
      href="https://yayracing.com"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 hover:bg-background/80"
      aria-label="SolidWorks Portfolio"
    >
      <Globe className="size-4" /> Website
    </a>
  </div>
</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
