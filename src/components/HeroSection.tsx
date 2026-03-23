import { Mail, Linkedin, ChevronDown } from "lucide-react";
import ryanPhoto from "@/assets/ryan-photo-alt.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center">
      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-reveal">
              <p className="font-mono text-sm tracking-widest uppercase text-accent mb-4">
                Electrical Engineering · UBC
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] text-foreground">
                Ryan Tam
              </h1>
            </div>

            <p className="animate-reveal delay-1 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Embedded systems, PCB design, and FPGA development. Building real hardware 
              on Formula SAE racecars and at BC Hydro.
            </p>

            <div className="animate-reveal delay-2 flex flex-wrap gap-3">
              <a
                href="mailto:ryanpetertam@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm transition-shadow hover:shadow-lg active:scale-[0.97]"
              >
                <Mail className="w-4 h-4" /> Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/ryan-peter-tam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground rounded-lg font-medium text-sm transition-shadow hover:shadow-md active:scale-[0.97]"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>

            <div className="animate-reveal delay-3 flex flex-wrap gap-2 pt-2">
              {["C", "SystemVerilog", "Python", "ARM Assembly", "Altium Designer", "FPGA", "PCB Design"].map(s => (
                <span key={s} className="font-mono text-xs px-2.5 py-1 rounded bg-secondary text-secondary-foreground border border-border">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-reveal delay-2 hidden lg:block">
            <div className="w-72 h-72 xl:w-80 xl:h-80 rounded-2xl overflow-hidden shadow-xl ring-1 ring-border">
              <img src={ryanPhoto} alt="Ryan Tam at BC Hydro dam" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-reveal delay-5 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Scroll to About"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
}
