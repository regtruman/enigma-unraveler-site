import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionLabel } from "./SectionLabel";

const experiences = [
  {
    title: "Electrical Engineering Intern",
    org: "BC Hydro — W.A.C. Bennett Dam",
    period: "May 2025 – Aug 2025",
    points: [
      "Diagnosed PLC control system issues and authored redesign recommendation report",
      "Worked with Schneider PLCs, ladder logic, PID control, VFDs, and 30HP pump systems",
      "Performed load calculations for transformers, breakers, and cables per Canadian Electrical Code",
      "Coordinated breaker cutovers, managed contractor submittals, and produced progress reports",
    ],
  },
  {
    title: "Electrical & Firmware Subteam Member",
    org: "Formula UBC SAE Racing",
    period: "Sept 2024 – Present",
    points: [
      "Design, solder, and test PCBs and firmware for power/signal transmission and data acquisition",
      "Contributed to STM32-based CAN bus PCB for extended sensor support",
      "Designed wiring harnesses and assisted PCB design for power distribution and drive-by-wire",
      "Designed analog op-amp pressure transducer PCB with Arduino for airfoil pressure measurement",
    ],
  },
];

export function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-24 lg:py-32 bg-card">
      <div ref={ref} className={`container mx-auto px-6 ${isVisible ? "animate-reveal" : "opacity-0"}`}>
        <SectionLabel>Experience</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-12 text-foreground">Where I've Worked</h2>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className={`${isVisible ? `animate-reveal delay-${i + 1}` : "opacity-0"}`}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-sm text-accent font-medium">{exp.org}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground shrink-0">{exp.period}</span>
              </div>
              <ul className="space-y-2 ml-4">
                {exp.points.map((pt, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
