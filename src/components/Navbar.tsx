import { useState } from "react";
import { Menu, X } from "lucide-react";
import giraffeLogo from "@/assets/giraffe-logo.png";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

const BrutalButton = ({
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className={`rounded-xl px-6 py-3 font-heading text-sm font-bold transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_oklch(0.78_0.10_85)] active:translate-x-1 active:translate-y-1 active:shadow-none ${
      variant === "primary"
        ? "bg-brand-gold text-brand-obsidian"
        : "bg-secondary text-foreground border border-border"
    } ${className}`}
    style={{
      borderWidth: variant === "primary" ? "2px" : undefined,
      borderColor: variant === "primary" ? "oklch(0.65 0.08 85)" : undefined,
      boxShadow: "4px 4px 0px oklch(0.78 0.10 85 / 0.3)",
    }}
  >
    {children}
  </button>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-brand-obsidian/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#" className="flex items-center gap-2">
          <img src={giraffeLogo} alt="Giraffe CRM Logo" className="h-10 w-auto brightness-0 invert opacity-90" />
          <span className="font-heading text-xl font-bold text-brand-gold">Giraffe CRM</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-heading text-sm font-medium text-foreground/60 transition-colors hover:text-brand-gold"
            >
              {l.label}
            </a>
          ))}
          <BrutalButton>Get Early Access</BrutalButton>
        </div>

        <button className="text-foreground md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="overflow-hidden border-t border-border/30 bg-brand-obsidian md:hidden animate-[fadeUp_0.2s_ease-out]">
          <div className="flex flex-col gap-4 px-5 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-heading text-sm font-medium text-foreground/60 hover:text-brand-gold"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <BrutalButton className="w-full">Get Early Access</BrutalButton>
          </div>
        </div>
      )}
    </nav>
  );
}

export { BrutalButton };