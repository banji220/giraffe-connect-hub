import { motion } from "framer-motion";
import { Star, Zap } from "lucide-react";

const testimonials = [
  {
    name: "Jake M.",
    role: "Owner, Sparkle Panes",
    quote:
      "I used to lose half my leads in my truck. Now everything's in my pocket. Giraffe CRM changed my business.",
  },
  {
    name: "Sarah T.",
    role: "Solo Operator, ClearView Cleaning",
    quote:
      "Quoting used to take me 5 minutes per house. Now it's instant. I knock more doors and close more jobs.",
  },
];

export default function SocialProof() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center font-heading text-3xl font-bold md:text-4xl"
        >
          Trusted by door knockers
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border-foreground bg-card p-6"
              style={{ borderWidth: "3px", boxShadow: "4px 4px 0px #000" }}
            >
              <div className="mb-3 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              <p className="mb-4 text-sm italic text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-heading text-sm font-bold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}

          {/* Stat badge */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center rounded-2xl border-foreground bg-electric-blue p-6 text-white"
            style={{ borderWidth: "3px", boxShadow: "4px 4px 0px #000" }}
          >
            <Zap size={32} className="mb-2" />
            <span className="font-heading text-4xl font-bold">3×</span>
            <span className="mt-1 font-heading text-sm font-medium">Faster Quoting</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
