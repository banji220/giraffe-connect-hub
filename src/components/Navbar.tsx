import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  <motion.button
    whileHover={{ y: 4, x: 4, boxShadow: "4px 4px 0px #0F0F0F" }}
    whileTap={{ y: 6, x: 6, boxShadow: "2px 2px 0px #0F0F0F" }}
    transition={{ type: "spring", stiffness: 500, damping: 15 }}
    onClick={onClick}
    className={`rounded-2xl px-6 py-3 font-heading text-sm font-bold ${
      variant === "primary"
        ? "bg-emerald-primary text-foreground"
        : "bg-white text-foreground"
    } ${className}`}
    style={{ borderWidth: "3px", borderColor: "#0F0F0F", boxShadow: "8px 8px 0px #0F0F0F" }}
  >
    {children}
  </motion.button>
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-brand-black md:hidden"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export { BrutalButton };
