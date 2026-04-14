import { motion } from "framer-motion";
import { FileX, Clock, UserX } from "lucide-react";

const pains = [
  {
    icon: FileX,
    title: "Paper notes get lost",
    desc: "Scribbled addresses vanish by Monday. Your pipeline shouldn't live on a napkin.",
    bg: "bg-pastel-yellow",
  },
  {
    icon: Clock,
    title: "Generic CRMs waste your time",
    desc: "Built for desk jockeys, not door knockers. Too many clicks, zero field context.",
    bg: "bg-coral",
  },
  {
    icon: UserX,
    title: "No-shows kill your day",
    desc: "Forgotten follow-ups mean lost jobs. Every missed callback is money gone.",
    bg: "bg-mint",
  },
];

export default function PainPoints() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center font-heading text-3xl font-bold md:text-4xl"
        >
          Sound familiar?
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {pains.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div
                className={`relative rounded-2xl border-foreground ${p.bg} p-6`}
                style={{ borderWidth: "3px", boxShadow: "4px 4px 0px #000" }}
              >
                <p.icon size={32} className="mb-4" />
                <h3 className="mb-2 font-heading text-xl font-bold">{p.title}</h3>
                <p className="text-sm text-foreground/70">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
