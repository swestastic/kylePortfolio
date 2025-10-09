import { cn } from "../../lib/utils";

export const Footer = () => {
  return (
    <footer className={cn("border-t border-border bg-background/80")}>
      <div className="container py-2 flex flex-col md:flex-row text-center mx-auto justify-center gap-1.5">
        <p className="text-[11px] text-foreground/60">
          © {new Date().getFullYear()} Kyle Corbett
        </p>
      </div>
    </footer>
  );
}