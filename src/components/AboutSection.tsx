import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionLabel } from "./SectionLabel";

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-32">
      <div ref={ref} className={`container mx-auto px-6 ${isVisible ? "animate-reveal" : "opacity-0"}`}>
        <SectionLabel>About</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-8 text-foreground">Who I Am</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm an Electrical Engineering student at The University of British Columbia on the Dean's Honor List.
              As a member of UBC Formula SAE Racing and a former BC Hydro intern, I bring hands-on experience
              with embedded systems, PCB design, automotive electrical integration, and power systems.
            </p>
            <p>
              I'm passionate about designing hardware that works in the real world — from custom STM32 PCBs
              on a formula racecar to FPGA processors written in SystemVerilog. I thrive at the intersection
              of digital design and physical systems.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Education", value: "B.ASc Electrical Eng." },
              { label: "University", value: "UBC, Vancouver" },
              { label: "Graduation", value: "2027" },
              { label: "Recognition", value: "Dean's Honor List" },
            ].map(item => (
              <div key={item.label} className="p-4 rounded-lg bg-card border border-border">
                <p className="font-mono text-xs uppercase tracking-wider text-accent mb-1">{item.label}</p>
                <p className="font-semibold text-sm text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
