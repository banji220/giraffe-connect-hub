import FadeInView from "./FadeInView";
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
    accent: "bg-emerald-primary",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeInView>
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
              <div
                className="rounded-2xl bg-card p-6"
                style={{ borderWidth: "3px", borderColor: "#0F0F0F", boxShadow: "4px 4px 0px #0F0F0F" }}
              >
                <div
                  className={`mb-4 inline-flex rounded-xl ${f.accent} p-3`}
                  style={{ borderWidth: "2px", borderColor: "#0F0F0F" }}
                >
                  <f.icon size={24} />
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
