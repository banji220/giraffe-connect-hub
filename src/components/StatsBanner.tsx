import { motion } from "framer-motion";

const stats = [
  { number: "60s", label: "Avg. time to close a deal", rotate: "-3deg" },
  { number: "3x", label: "More quotes per knock session", rotate: "2deg" },
  { number: "0", label: "Paper lists needed", rotate: "-1deg" },
  { number: "12%", label: "Higher neighborhood close rate", rotate: "3deg" },
];

export default function StatsBanner() {
  return (
    <section className="px-5 py-16 md:py-20" style={{ backgroundColor: "#0A6B0A" }}>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.number}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <span
              className="mb-4 inline-block rounded-2xl bg-pastel-yellow px-5 py-3 font-heading text-4xl font-bold text-foreground md:text-5xl"
              style={{
                borderWidth: "3px",
                borderColor: "#0F0F0F",
                boxShadow: "5px 5px 0px #0F0F0F",
                rotate: s.rotate,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {s.number}
            </span>
            <p className="font-heading text-sm font-medium text-white/90 md:text-base">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
