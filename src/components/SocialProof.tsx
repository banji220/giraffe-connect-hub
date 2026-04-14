import FadeInView from "./FadeInView";
import { Star, Zap } from "lucide-react";

const testimonials = [
  {
    name: "Jake M.",
    role: "Owner, Sparkle Panes",
    quote: "I used to lose half my leads in my truck. Now everything's in my pocket. Giraffe CRM changed my business.",
  },
  {
    name: "Sarah T.",
    role: "Solo Operator, ClearView Cleaning",
    quote: "Quoting used to take me 5 minutes per house. Now it's instant. I knock more doors and close more jobs.",
  },
];

export default function SocialProof() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeInView>
          <h2 className="mb-12 text-center font-heading text-3xl font-bold md:text-4xl">
            Trusted by door knockers
          </h2>
        </FadeInView>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeInView key={t.name} delay={i * 0.1}>
              <div className="rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-gold/25">
                <div className="mb-3 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="mb-4 text-sm italic text-foreground/70">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-heading text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </FadeInView>
          ))}

          <FadeInView delay={0.2}>
            <div className="flex h-full flex-col items-center justify-center rounded-xl border border-gold/20 bg-gold/[0.06] p-6 text-gold">
              <Zap size={28} className="mb-2" strokeWidth={1.8} />
              <span className="font-heading text-4xl font-bold">3×</span>
              <span className="mt-1 font-heading text-sm font-medium text-gold/80">Faster Quoting</span>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}