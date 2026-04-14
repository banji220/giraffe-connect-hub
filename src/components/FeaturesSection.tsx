import FadeInView from "./FadeInView";
import { MapPin, Calculator, Map, PhoneCall } from "lucide-react";

const features = [
  { icon: MapPin, title: "GPS Auto-Fill", desc: "Pull the address the second you knock." },
  { icon: Calculator, title: "Instant Pricing", desc: "Auto-calculate quotes on the spot." },
  { icon: Map, title: "Route View", desc: "See all your leads mapped out." },
  { icon: PhoneCall, title: "Follow-Up Queue", desc: "Know exactly who to call tomorrow." },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeInView>
          <p className="mb-3 text-center font-heading text-sm font-bold uppercase tracking-widest text-gold">Features</p>
          <h2 className="mb-4 text-center font-heading text-3xl font-bold md:text-4xl">
            Everything you need in the field
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-center text-muted-foreground">
            No fluff. Just the tools that make door-to-door faster.
          </p>
        </FadeInView>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <FadeInView key={f.title} delay={i * 0.1}>
              <div className="rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-gold/25 hover:shadow-[0_8px_30px_oklch(0.75_0.09_85_/_0.06)]">
                <div className="mb-4 inline-flex rounded-lg bg-gold/[0.08] p-3 text-gold">
                  <f.icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}