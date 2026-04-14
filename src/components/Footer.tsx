import giraffeLogo from "@/assets/giraffe-logo.png";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Login", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground px-5 py-12 text-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <img src={giraffeLogo} alt="Giraffe CRM" className="h-8 w-auto" />
          <span className="font-heading text-lg font-bold">Giraffe CRM</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-background/70 transition-colors hover:text-pastel-yellow"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-background/50">
          Built for the knockers by a knocker.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-background/10 pt-6 text-center text-xs text-background/40">
        &copy; 2026 Holy Giraffe
      </div>
    </footer>
  );
}
