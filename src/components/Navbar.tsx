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
    whileHover={{ y: -2, boxShadow: "2px 2px 0px #000" }}
    whileTap={{ y: 0, boxShadow: "0px 0px 0px #000" }}
    transition={{ type: "spring", stiffness: 500, damping: 15 }}
    onClick={onClick}
    className={`rounded-2xl border-3 border-foreground px-6 py-3 font-heading font-bold text-sm transition-colors ${
      variant === "primary"
        ? "bg-electric-blue text-white shadow-brutal"
        : "bg-transparent text-foreground shadow-brutal"
    } ${className}`}
    style={{ borderWidth: "3px" }}
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
          <img src={giraffeLogo} alt="Giraffe CRM Logo" className="h-10 w-auto" />
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
