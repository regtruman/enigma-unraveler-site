import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  slug: string;
  title: string;
  org: string;
  date: string;
  description: string;
  details: string[];
  tags: string[];
  images?: string[];
  index: number;
}

export function ProjectCard({ slug, title, org, date, description, details, tags, images, index }: ProjectCardProps) {
  const { ref, isVisible } = useScrollReveal(0.1);
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`${isVisible ? "animate-reveal" : "opacity-0"}`}>
      <div className={`grid ${images?.length ? "lg:grid-cols-[1fr_1fr]" : ""} gap-8 items-start ${!isEven && images?.length ? "lg:grid-flow-dense" : ""}`}>
        {images && images.length > 0 && (
          <div className={`grid ${images.length > 1 ? "grid-cols-2" : ""} gap-3 ${!isEven ? "lg:col-start-2" : ""}`}>
            {images.map((img, i) => (
              <div key={i} className={`rounded-lg overflow-hidden shadow-md ring-1 ring-border ${images.length === 3 && i === 0 ? "col-span-2" : ""}`}>
                <img src={img} alt={`${title} image ${i + 1}`} className="w-full h-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h3 className="text-xl font-bold text-foreground">{title}</h3>
              <span className="font-mono text-xs text-muted-foreground shrink-0">{date}</span>
            </div>
            <p className="text-sm font-medium text-accent">{org}</p>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

          <ul className="space-y-1.5">
            {details.slice(0, 3).map((d, i) => (
              <li key={i} className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40">
                {d}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {tags.map(t => (
              <span key={t} className="font-mono text-[11px] px-2 py-0.5 rounded bg-secondary text-secondary-foreground border border-border">
                {t}
              </span>
            ))}
          </div>

          <Link
            to={`/project/${slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline pt-1 group"
          >
            View Full Details
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
