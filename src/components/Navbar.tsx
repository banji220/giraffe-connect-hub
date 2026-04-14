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
    className={`rounded-2xl px-6 py-3 font-heading text-sm font-bold transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_#0F0F0F] active:translate-x-1.5 active:translate-y-1.5 active:shadow-[2px_2px_0px_#0F0F0F] ${
      variant === "primary"
        ? "bg-emerald-primary text-foreground"
        : "bg-white text-foreground"
    } ${className}`}
    style={{ borderWidth: "3px", borderColor: "#0F0F0F", boxShadow: "8px 8px 0px #0F0F0F" }}
  >
    {children}
  </button>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b-3 border-foreground bg-brand-black" style={{ borderBottomWidth: "3px" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#" className="flex items-center gap-2">
          <img src={giraffeLogo} alt="Giraffe CRM Logo" className="h-10 w-auto brightness-0 invert drop-shadow-[0_0_1px_rgba(255,255,255,0.8)]" />
          <span className="font-heading text-xl font-bold text-brand-yellow">Giraffe CRM</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-heading text-sm font-medium text-white/80 transition-colors hover:text-brand-yellow"
            >
              {l.label}
            </a>
          ))}
          <BrutalButton>Get Early Access</BrutalButton>
        </div>

        <button className="text-white md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="overflow-hidden border-t border-white/10 bg-brand-black md:hidden animate-[fadeUp_0.2s_ease-out]">
          <div className="flex flex-col gap-4 px-5 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-heading text-sm font-medium text-white/80 hover:text-brand-yellow"
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