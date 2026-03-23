import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { useEffect } from "react";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">Project not found</h1>
          <Link to="/" className="text-accent hover:underline">← Back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 flex items-center h-14">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
        </div>
      </nav>

      <main className="pt-14">
        {/* Header */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="animate-reveal space-y-4">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-mono text-xs tracking-widest uppercase text-accent">
                  {project.org}
                </span>
                <span className="font-mono text-xs text-muted-foreground">{project.date}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-secondary text-secondary-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Images gallery */}
        {project.images.length > 0 && (
          <section className="pb-16">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="animate-reveal delay-1 grid gap-4 sm:grid-cols-2">
                {project.images.map((img, i) => (
                  <div
                    key={i}
                    className={`rounded-lg overflow-hidden shadow-md ring-1 ring-border ${
                      project.images.length === 3 && i === 0 ? "sm:col-span-2" : ""
                    } ${project.images.length === 1 ? "sm:col-span-2 max-w-2xl mx-auto" : ""}`}
                  >
                    <img
                      src={img}
                      alt={`${project.title} — image ${i + 1}`}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="animate-reveal delay-2 space-y-10">
              {/* Overview */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">Overview</h2>
                <p className="text-muted-foreground leading-relaxed max-w-prose">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Technical Details */}
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-foreground">Technical Details</h2>
                <ul className="space-y-2">
                  {project.details.map((d, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-foreground">Key Features</h2>
                  <ul className="space-y-2">
                    {project.features.map((f, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Placeholder for user to add more content */}
              <div className="border border-dashed border-border rounded-lg p-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Add more content here — diagrams, schematics, code snippets, videos, or deeper technical write-ups.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-xs text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Ryan Tam
      </footer>
    </div>
  );
}
