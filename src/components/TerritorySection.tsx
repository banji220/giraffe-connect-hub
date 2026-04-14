import { motion } from "framer-motion";
import territoryMap from "@/assets/territory-map.png";

const chips = [
  "9 color-coded states",
  "1-tap follow-ups",
  "GPS-precise pins",
];

export default function TerritorySection() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Text side */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 font-heading text-sm font-bold uppercase tracking-widest text-emerald-primary">
            Your territory, finally visible.
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Every house you've ever knocked. On one map.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Color-coded pins tell you everything at a glance.
            <br /><br />
            <span className="font-semibold text-foreground">Red</span> = hard no.{" "}
            <span className="font-semibold text-foreground">Emerald</span> = you won.{" "}
            <span className="font-semibold text-foreground">Yellow</span> = come back Saturday.
            <br /><br />
            Never knock the same door twice. Never miss a follow-up.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-pastel-yellow px-4 py-1.5 font-heading text-sm font-bold text-foreground"
                style={{ borderWidth: "2px", borderColor: "#0F0F0F" }}
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Map illustration */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img
            src={territoryMap}
            alt="Isometric neighborhood map with color-coded pins and a giraffe walking between houses"
            width={1024}
            height={900}
            loading="lazy"
            className="w-full drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
