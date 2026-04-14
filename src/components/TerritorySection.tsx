import { MapPin, Eye, RotateCcw } from "lucide-react";
import territoryMap from "@/assets/territory-map.png";

const pinStates = [
  { color: "bg-red-500/80", label: "Hard no" },
  { color: "bg-gold", label: "You won" },
  { color: "bg-gold-bright", label: "Come back" },
  { color: "bg-gold/70", label: "Hot lead" },
  { color: "bg-navy-deep", label: "Quoted" },
  { color: "bg-purple-400/60", label: "Scheduled" },
  { color: "bg-slate-warm", label: "Follow-up" },
  { color: "bg-muted-foreground/40", label: "Not home" },
  { color: "bg-foreground/30", label: "DNC" },
];

const features = [
  { icon: MapPin, title: "GPS-precise pins", desc: "Every door you knock is auto-pinned. No typing addresses." },
  { icon: Eye, title: "9 color-coded states", desc: "Instant visual status for every house on your map." },
  { icon: RotateCcw, title: "1-tap follow-ups", desc: "Tap a pin, set a date. Giraffe reminds you. Nothing slips." },
];

export default function TerritorySection() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 font-heading text-sm font-bold uppercase tracking-widest text-gold">
            Territory mapping
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Every house you've ever knocked.
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">On one map.</span>
              <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-gold/20 md:h-4" />
            </span>
          </h2>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-5">
          <div className="relative md:col-span-3">
            <div
              className="overflow-hidden rounded-xl border border-border/50 bg-card"
              style={{ boxShadow: "0 20px 60px oklch(0 0 0 / 0.4)" }}
            >
              <img
                src={territoryMap}
                alt="Isometric neighborhood map with color-coded pins"
                width={1024}
                height={900}
                loading="lazy"
                className="w-full"
              />
            </div>
            <div
              className="absolute -right-3 -top-3 z-20 rounded-xl bg-gold px-4 py-2 font-heading text-sm font-bold text-obsidian md:-right-5 md:-top-5"
              style={{ boxShadow: "0 8px 24px oklch(0.75 0.09 85 / 0.2)" }}
            >
              Never knock twice ✨
            </div>
          </div>

          <div className="flex flex-col gap-6 md:col-span-2">
            <div className="rounded-xl border border-border/50 bg-card p-6">
              <h3 className="mb-4 font-heading text-lg font-bold">Pin color guide</h3>
              <div className="grid grid-cols-3 gap-3">
                {pinStates.map((pin) => (
                  <div key={pin.label} className="flex items-center gap-2">
                    <span className={`h-3.5 w-3.5 shrink-0 rounded-full ${pin.color}`} />
                    <span className="text-xs font-medium text-muted-foreground">{pin.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-border/50 bg-card p-5 transition-all duration-300 hover:border-gold/25">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-gold/[0.08] p-2.5 text-gold">
                    <f.icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold">{f.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}