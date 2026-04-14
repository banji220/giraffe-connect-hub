import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { BrutalButton } from "./Navbar";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "For solo knockers just getting started.",
    features: ["Up to 50 leads", "GPS auto-fill", "Basic quoting", "1 user"],
    accent: "bg-pastel-yellow",
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
    accent: "bg-electric-blue",
    cta: "Go Pro",
    popular: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-center font-heading text-3xl font-bold md:text-4xl"
        >
          Simple pricing
        </motion.h2>
        <p className="mx-auto mb-12 max-w-md text-center text-muted-foreground">
          No hidden fees. No contracts. Cancel anytime.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <span
                  className="absolute -top-3 right-4 z-10 rounded-lg bg-coral px-3 py-1 font-heading text-xs font-bold text-foreground"
                  style={{ borderWidth: "2px", borderColor: "#000" }}
                >
                  MOST POPULAR
                </span>
              )}
              <div
                className="flex h-full flex-col rounded-2xl border-foreground bg-card p-6"
                style={{ borderWidth: "3px", boxShadow: "6px 6px 0px #000" }}
              >
                <div
                  className={`mb-4 inline-flex self-start rounded-xl ${plan.accent} px-3 py-1 font-heading text-sm font-bold ${plan.accent === "bg-electric-blue" ? "text-white" : "text-foreground"}`}
                  style={{ borderWidth: "2px", borderColor: "#000" }}
                >
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
                      <Check size={16} className="shrink-0 text-electric-blue" />
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
