import FadeInView from "./FadeInView";
import { FileX, Clock, UserX } from "lucide-react";

const pains = [
  {
    icon: FileX,
    title: "Paper notes get lost",
    desc: "Scribbled addresses vanish by Monday. Your pipeline shouldn't live on a napkin.",
  },
  {
    icon: Clock,
    title: "Generic CRMs waste your time",
    desc: "Built for desk jockeys, not door knockers. Too many clicks, zero field context.",
  },
  {
    icon: UserX,
    title: "No-shows kill your day",
    desc: "Forgotten follow-ups mean lost jobs. Every missed callback is money gone.",
  },
];

export default function PainPoints() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeInView>
          <h2 className="mb-12 text-center font-heading text-3xl font-bold md:text-4xl">
            Sound familiar?
          </h2>
        </FadeInView>

        <div className="grid gap-6 md:grid-cols-3">
          {pains.map((p, i) => (
            <FadeInView key={p.title} delay={i * 0.1}>
              <div
                className="rounded-2xl bg-card border border-border/50 p-6 transition-all duration-300 hover:border-brand-gold/30"
              >
                <div className="mb-4 inline-flex rounded-xl bg-brand-gold/10 p-3 text-brand-gold">
                  <p.icon size={28} strokeWidth={2} />
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}