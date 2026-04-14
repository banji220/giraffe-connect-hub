import FadeInView from "./FadeInView";
import { MessageSquare, Clock, DollarSign, Users, Shield, TrendingUp } from "lucide-react";

const features = [
  { icon: MessageSquare, title: "SMS receipts", desc: "Auto-text quotes and receipts the second a deal closes." },
  { icon: Clock, title: "Smart follow-ups", desc: "Come-back dates trigger reminders. Nothing slips." },
  { icon: DollarSign, title: "Anchor pricing", desc: "Show the normal price crossed out. Show your price. Close faster." },
  { icon: Users, title: "Invite your team", desc: "Text a friend a link. They're in. Zero IT." },
  { icon: Shield, title: "Avoid list", desc: "Mark dangerous or DNC houses. They stay marked forever." },
  { icon: TrendingUp, title: "LTV tracking", desc: "See lifetime value per house. Offer recleans at the right time." },
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
              <div className="rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-gold/25">
                <div className="mb-4 inline-flex rounded-lg bg-gold/[0.08] p-3 text-gold">
                  <f.icon size={22} strokeWidth={1.8} />
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