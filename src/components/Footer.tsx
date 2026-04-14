export default function Footer() {
  return (
    <footer className="border-t-3 border-foreground bg-brand-black px-5 py-10" style={{ borderTopWidth: "3px" }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-heading text-sm font-bold text-brand-yellow">
            Giraffe CRM
          </p>
          <p className="mt-1 text-xs text-white/60">
            by{" "}
            <a
              href="https://holygiraffe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-brand-yellow"
            >
              holygiraffe.com
            </a>
          </p>
        </div>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Contact"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-xs text-white/60 transition-colors hover:text-brand-yellow"
            >
              {l}
            </a>
          ))}
        </div>
        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} Giraffe CRM. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
