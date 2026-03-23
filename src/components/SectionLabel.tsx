export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs font-medium tracking-widest uppercase text-accent">
      {children}
    </span>
  );
}
