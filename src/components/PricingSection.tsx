import FadeInView from "./FadeInView";
import { Check } from "lucide-react";
import { BrutalButton } from "./Navbar";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "For solo knockers just getting started.",
    features: ["Up to 50 leads", "GPS auto-fill", "Basic quoting", "1 user"],
    cta: "Start Free",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    desc: "For teams ready to scale their territory.",
    features: [
      "Unlimited leads",
      "GPS auto-fill",
      "Advanced auto-pricing",
      "Route view & mapping",
      "Follow-up queue",
      "Priority support",
    ],
    cta: "Go Pro",
    popular: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <FadeInView>
          <p className="mb-3 text-center font-heading text-sm font-bold uppercase tracking-widest text-gold">Pricing</p>
          <h2 className="mb-4 text-center font-heading text-3xl font-bold md:text-4xl">
            Simple pricing
          </h2>
          <p className="mx-auto mb-12 max-w-md text-center text-muted-foreground">
            No hidden fees. No contracts. Cancel anytime.
          </p>
        </FadeInView>

        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((plan, i) => (
            <FadeInView key={plan.name} delay={i * 0.1}>
              <div className="relative">
                {plan.popular && (
                  <span className="absolute -top-3 right-4 z-10 rounded-md bg-gold px-3 py-1 font-heading text-xs font-bold text-obsidian">
                    MOST POPULAR
                  </span>
                )}
                <div
                  className={`flex h-full flex-col rounded-xl border bg-card p-6 transition-all duration-300 ${
                    plan.popular
                      ? "border-gold/30 shadow-[0_0_30px_oklch(0.75_0.09_85_/_0.08)]"
                      : "border-border/50 hover:border-gold/20"
                  }`}
                >
                  <div className="mb-4 inline-flex self-start rounded-md bg-gold/[0.08] px-3 py-1 font-heading text-sm font-bold text-gold">
                    {plan.name}
                  </div>
                  <div className="mb-1 flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-bold">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="mb-6 text-sm text-muted-foreground">{plan.desc}</p>
                  <ul className="mb-8 flex-1 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check size={16} className="shrink-0 text-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <BrutalButton
                    variant={plan.popular ? "primary" : "outline"}
                    className="w-full"
                  >
                    {plan.cta}
                  </BrutalButton>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}