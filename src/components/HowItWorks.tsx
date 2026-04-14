import { motion } from "framer-motion";
import { DoorOpen, ClipboardCheck, BadgeDollarSign, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: DoorOpen,
    title: "Knock",
    desc: "Walk up, tap, and GPS auto-fills the address. You're ready before they open the door.",
    accent: "bg-pastel-yellow",
  },
  {
    num: "02",
    icon: ClipboardCheck,
    title: "Capture",
    desc: "Add notes, snap photos, and auto-generate a quote in under 30 seconds.",
    accent: "bg-mint",
  },
  {
    num: "03",
    icon: BadgeDollarSign,
    title: "Close",
    desc: "Follow-up queue reminds you who to call. Turn knocks into signed jobs.",
    accent: "bg-coral",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center font-heading text-3xl font-bold md:text-4xl"
        >
          Three steps. That&rsquo;s it.
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              {/* Arrow connector (desktop only) */}
              {i < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-foreground md:block">
                  <ArrowRight size={20} />
                </div>
              )}
              <div
                className="h-full rounded-2xl border-foreground bg-card p-6"
                style={{ borderWidth: "3px", boxShadow: "4px 4px 0px #000" }}
              >
                <span
                  className={`mb-4 inline-block rounded-xl ${s.accent} px-3 py-1 font-heading text-lg font-bold`}
                  style={{ borderWidth: "2px", borderColor: "#000" }}
                >
                  {s.num}
                </span>
                <div className="mb-3">
                  <s.icon size={28} />
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
