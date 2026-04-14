import FadeInView from "./FadeInView";
import { MessageSquare, Clock, DollarSign, Users, Shield, TrendingUp } from "lucide-react";

const features = [
  { icon: MessageSquare, accent: "bg-coral", title: "SMS receipts", desc: "Auto-text quotes and receipts the second a deal closes." },
  { icon: Clock, accent: "bg-pastel-yellow", title: "Smart follow-ups", desc: "Come-back dates trigger reminders. Nothing slips." },
  { icon: DollarSign, accent: "bg-mint", title: "Anchor pricing", desc: "Show the normal price crossed out. Show your price. Close faster." },
  { icon: Users, accent: "bg-emerald-primary", title: "Invite your team", desc: "Text a friend a link. They're in. Zero IT." },
  { icon: Shield, accent: "bg-foreground", iconColor: "text-white", title: "Avoid list", desc: "Mark dangerous or DNC houses. They stay marked forever." },
  { icon: TrendingUp, accent: "bg-coral", title: "LTV tracking", desc: "See lifetime value per house. Offer recleans at the right time." },
];

export default function ExtrasSection() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeInView>
          <h2 className="mb-12 text-center font-heading text-3xl font-bold md:text-4xl">
            Everything else, handled.
          </h2>
        </FadeInView>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FadeInView key={f.title} delay={i * 0.08}>
              <div
                className="rounded-2xl bg-card p-6"
                style={{ borderWidth: "3px", borderColor: "#0F0F0F", boxShadow: "6px 6px 0px #0F0F0F" }}
              >
                <div
                  className={`mb-4 inline-flex rounded-xl ${f.accent} p-3`}
                  style={{ borderWidth: "2px", borderColor: "#0F0F0F" }}
                >
                  <f.icon size={22} className={f.iconColor ?? "text-foreground"} />
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
