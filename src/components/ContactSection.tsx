import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionLabel } from "./SectionLabel";
import { Mail, Linkedin } from "lucide-react";

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div ref={ref} className={`container mx-auto px-6 text-center ${isVisible ? "animate-reveal" : "opacity-0"}`}>
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-foreground">Let's Connect</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          I'm looking for engineering internship opportunities. Let's chat about how I can contribute to your team.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:ryanpetertam@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-shadow hover:shadow-lg active:scale-[0.97]"
          >
            <Mail className="w-4 h-4" /> ryanpetertam@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-peter-tam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium transition-shadow hover:shadow-md active:scale-[0.97]"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
