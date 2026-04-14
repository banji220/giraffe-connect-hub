import FadeInView from "./FadeInView";
import { Timer, TrendingUp, FileX2, Target } from "lucide-react";

const stats = [
  { icon: Timer, number: "60s", label: "Avg. close time", desc: "From knock to signed deal" },
  { icon: TrendingUp, number: "3×", label: "More quotes", desc: "Per knock session vs. paper" },
  { icon: FileX2, number: "0", label: "Paper lists", desc: "Everything lives on your phone" },
  { icon: Target, number: "12%", label: "Higher close rate", desc: "Neighborhood domination effect" },
];

export default function StatsBanner() {
  return (
    <section className="relative px-5 py-16 md:py-24 overflow-hidden">
      {/* Gold ambient glow */}
      <div className="absolute inset-0 bg-gold/[0.02]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <FadeInView>
          <p className="mb-3 text-center font-heading text-sm font-bold uppercase tracking-widest text-gold">
            The numbers don't lie
          </p>
          <h2 className="mb-12 text-center font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
            Built different. Performs different.
          </h2>
        </FadeInView>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <FadeInView key={s.number} delay={i * 0.1}>
              <div className="flex h-full flex-col items-center rounded-xl border border-border/50 bg-card p-5 text-center transition-all duration-300 hover:border-gold/25 md:p-6">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/[0.08] text-gold">
                  <s.icon size={22} strokeWidth={1.8} />
                </div>
                <span className="font-heading text-4xl font-bold leading-none text-gold md:text-5xl" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {s.number}
                </span>
                <p className="mt-2 font-heading text-sm font-bold md:text-base">{s.label}</p>
                <p className="mt-1 text-[11px] text-muted-foreground md:text-xs">{s.desc}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}