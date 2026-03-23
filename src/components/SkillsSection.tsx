import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionLabel } from "./SectionLabel";

const skillGroups = [
  {
    label: "Software",
    skills: ["Altium Designer", "LTSpice", "Rapid Harness", "Intel Quartus Prime", "ModelSim", "Git", "SolidWorks", "MATLAB", "Microsoft Excel"],
  },
  {
    label: "Programming & HDL",
    skills: ["C", "ARM Assembly", "SystemVerilog", "Python", "Ladder Logic"],
  },
  {
    label: "Hardware",
    skills: ["Embedded Systems", "PCB Design & Testing", "FPGAs", "Digital Circuit Design", "PLCs", "Soldering"],
  },
];

export function SkillsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 lg:py-32 bg-card">
      <div ref={ref} className={`container mx-auto px-6 ${isVisible ? "animate-reveal" : "opacity-0"}`}>
        <SectionLabel>Skills</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-12 text-foreground">Technical Toolkit</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <div key={group.label} className={`${isVisible ? `animate-reveal delay-${i + 1}` : "opacity-0"}`}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-4">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="text-sm px-3 py-1.5 rounded-md bg-background border border-border text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
