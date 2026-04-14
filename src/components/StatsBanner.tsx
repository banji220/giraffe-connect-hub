import { motion } from "framer-motion";
import { Timer, TrendingUp, FileX2, Target } from "lucide-react";

const stats = [
  {
    icon: Timer,
    number: "60s",
    label: "Avg. close time",
    desc: "From knock to signed deal",
    bg: "bg-coral",
    rotate: -3,
  },
  {
    icon: TrendingUp,
    number: "3×",
    label: "More quotes",
    desc: "Per knock session vs. paper",
    bg: "bg-brand-yellow",
    rotate: 2,
  },
  {
    icon: FileX2,
    number: "0",
    label: "Paper lists",
    desc: "Everything lives on your phone",
    bg: "bg-mint",
    rotate: -1,
  },
  {
    icon: Target,
    number: "12%",
    label: "Higher close rate",
    desc: "Neighborhood domination effect",
    bg: "bg-pastel-yellow",
    rotate: 3,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  }),
};

export default function StatsBanner() {
  return (
    <section className="relative px-5 py-16 md:py-24 bg-brand-yellow overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-40px] left-[-40px] w-32 h-32 rounded-full bg-[oklch(0.75_0.14_75)] opacity-70" />
      <div className="absolute top-[10%] left-[8%] w-20 h-20 rounded-full bg-[oklch(0.80_0.12_80)] opacity-50" />
      <div className="absolute top-[-20px] right-[-30px] w-28 h-28 rounded-full bg-[oklch(0.75_0.14_75)] opacity-60" style={{ clipPath: "inset(0 50% 50% 0)" }} />
      <div className="absolute top-[15%] right-[5%] w-16 h-16 rounded-full bg-[oklch(0.80_0.12_80)] opacity-40" />
      <div className="absolute bottom-[-30px] left-[15%] w-24 h-24 rounded-full bg-[oklch(0.75_0.14_75)] opacity-50" />
      <div className="absolute bottom-[10%] right-[12%] w-20 h-20 rounded-full bg-[oklch(0.80_0.12_80)] opacity-60" />
      <div className="absolute bottom-[-20px] right-[-20px] w-28 h-28 rounded-full bg-[oklch(0.75_0.14_75)] opacity-50" />
      <div className="absolute top-[50%] left-[-20px] w-16 h-16 rounded-full bg-[oklch(0.80_0.12_80)] opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center font-heading text-sm font-bold uppercase tracking-widest text-brand-black"
        >
          The numbers don't lie
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 text-center font-heading text-3xl font-bold text-brand-black md:text-4xl lg:text-5xl"
        >
          Built different. Performs different.
        </motion.h2>

        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.number}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -6, rotate: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="relative flex h-full flex-col items-center rounded-3xl bg-white p-5 text-center md:p-6"
                style={{
                  borderWidth: "3px",
                  borderColor: "#0F0F0F",
                  boxShadow: "6px 6px 0px #0F0F0F",
                  rotate: `${s.rotate}deg`,
                }}
              >
                {/* Icon */}
                <div
                  className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow/40"
                  style={{ borderWidth: "2px", borderColor: "#0F0F0F" }}
                >
                  <s.icon size={22} strokeWidth={2.5} />
                </div>

                {/* Number */}
                <span
                  className="font-heading text-4xl font-bold leading-none text-foreground md:text-5xl"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {s.number}
                </span>

                {/* Label */}
                <p className="mt-2 font-heading text-sm font-bold text-foreground md:text-base">
                  {s.label}
                </p>

                {/* Description */}
                <p className="mt-1 text-[11px] text-foreground/60 md:text-xs">
                  {s.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
