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
    className={`rounded-xl px-6 py-3 font-heading text-sm font-bold tracking-wide transition-all duration-200 ${
      variant === "primary"
        ? "bg-gold text-obsidian hover:bg-gold-bright hover:shadow-[0_0_20px_oklch(0.75_0.09_85_/_0.25)]"
        : "bg-transparent text-foreground border border-border hover:border-gold/40 hover:text-gold"
    } ${className}`}
  >
    {children}
  </button>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-obsidian/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#" className="flex items-center gap-2.5">
          <img src={giraffeLogo} alt="Giraffe CRM Logo" className="h-9 w-auto brightness-0 invert opacity-90" />
          <span className="font-heading text-lg font-bold text-gold tracking-wide">Giraffe CRM</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-heading text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <BrutalButton>Get Early Access</BrutalButton>
        </div>

        <button className="text-foreground/70 md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/30 bg-obsidian md:hidden animate-[fadeUp_0.2s_ease-out]">
          <div className="flex flex-col gap-4 px-5 py-5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-heading text-sm font-medium text-muted-foreground hover:text-gold"
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