import { motion } from "framer-motion";
import { MapPin, Calculator, Map, PhoneCall } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "GPS Auto-Fill",
    desc: "Pull the address the second you knock.",
    accent: "bg-mint",
  },
  {
    icon: Calculator,
    title: "Instant Pricing",
    desc: "Auto-calculate quotes on the spot.",
    accent: "bg-pastel-yellow",
  },
  {
    icon: Map,
    title: "Route View",
    desc: "See all your leads mapped out.",
    accent: "bg-coral",
  },
  {
    icon: PhoneCall,
    title: "Follow-Up Queue",
    desc: "Know exactly who to call tomorrow.",
    accent: "bg-electric-blue",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-center font-heading text-3xl font-bold md:text-4xl"
        >
          Everything you need in the field
        </motion.h2>
        <p className="mx-auto mb-12 max-w-lg text-center text-muted-foreground">
          No fluff. Just the tools that make door-to-door faster.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border-foreground bg-card p-6"
              style={{ borderWidth: "3px", boxShadow: "4px 4px 0px #000" }}
            >
              <div
                className={`mb-4 inline-flex rounded-xl ${f.accent} p-3`}
                style={{ borderWidth: "2px", borderColor: "#000" }}
              >
                <f.icon size={24} className={f.accent === "bg-electric-blue" ? "text-white" : "text-foreground"} />
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
