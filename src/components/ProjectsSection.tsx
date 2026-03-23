import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionLabel } from "./SectionLabel";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div ref={ref} className={`container mx-auto px-6 ${isVisible ? "animate-reveal" : "opacity-0"}`}>
        <SectionLabel>Projects</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-12 text-foreground">What I've Built</h2>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
