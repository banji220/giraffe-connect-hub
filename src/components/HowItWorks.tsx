import FadeInView from "./FadeInView";
import { MapPin, Calculator, Zap, Target } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MapPin,
    title: "Knock a door",
    body: "Tap your GPS. A pin drops. You're on the map.",
    bg: "bg-pastel-yellow",
  },
  {
    num: "02",
    icon: Calculator,
    title: "Quote on the spot",
    body: "Window count → price in 3 taps. No spreadsheets.",
    bg: "bg-coral",
  },
  {
    num: "03",
    icon: Zap,
    title: "Close right there",
    body: "Swipe to accept. The job is booked. Receipt auto-texts.",
    bg: "bg-mint",
  },
  {
    num: "04",
    icon: Target,
    title: "Dominate the block",
    body: "Come back. Follow up. Turn one house into the whole street.",
    bg: "bg-emerald-primary",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeInView>
          <h2 className="mb-12 text-center font-heading text-3xl font-bold md:text-4xl">
            How it actually works.
          </h2>
        </FadeInView>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <FadeInView key={s.num} delay={i * 0.1}>
              <div
                className={`relative h-full rounded-3xl ${s.bg} p-6`}
                style={{
                  borderWidth: "3px",
                  borderColor: "#0F0F0F",
                  boxShadow: "8px 8px 0px #0F0F0F",
                }}
              >
                <span className="font-heading text-5xl font-bold leading-none text-foreground/20" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {s.num}
                </span>
                <div className="mt-3 mb-3">
                  <s.icon size={28} strokeWidth={2.5} />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold">{s.title}</h3>
                <p className="text-sm text-foreground/70">{s.body}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
