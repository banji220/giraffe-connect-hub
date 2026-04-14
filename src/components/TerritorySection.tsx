import { MapPin, Eye, RotateCcw } from "lucide-react";
import territoryMap from "@/assets/territory-map.png";

const pinStates = [
  { color: "bg-red-500", label: "Hard no", border: "border-red-600" },
  { color: "bg-emerald-primary", label: "You won", border: "border-emerald-700" },
  { color: "bg-pastel-yellow", label: "Come back", border: "border-yellow-500" },
  { color: "bg-coral", label: "Hot lead", border: "border-orange-600" },
  { color: "bg-electric-blue", label: "Quoted", border: "border-blue-700" },
  { color: "bg-purple-400", label: "Scheduled", border: "border-purple-600" },
  { color: "bg-mint", label: "Follow-up", border: "border-teal-500" },
  { color: "bg-gray-400", label: "Not home", border: "border-gray-500" },
  { color: "bg-foreground", label: "DNC", border: "border-gray-800" },
];

const features = [
  {
    icon: MapPin,
    accent: "bg-coral",
    title: "GPS-precise pins",
    desc: "Every door you knock is auto-pinned. No typing addresses.",
  },
  {
    icon: Eye,
    accent: "bg-pastel-yellow",
    title: "9 color-coded states",
    desc: "Instant visual status for every house on your map.",
  },
  {
    icon: RotateCcw,
    accent: "bg-mint",
    title: "1-tap follow-ups",
    desc: "Tap a pin, set a date. Giraffe reminds you. Nothing slips.",
  },
];

export default function TerritorySection() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-heading text-sm font-bold uppercase tracking-widest text-emerald-primary">
            Territory mapping
          </p>
          <h2 className="font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Every house you've ever knocked.
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">On one map.</span>
              <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-pastel-yellow md:h-4" />
            </span>
          </h2>
        </div>

        {/* Main content: map + legend */}
        <div className="grid items-start gap-10 md:grid-cols-5">
          {/* Map card — takes 3 cols */}
          <div className="relative md:col-span-3">
            <div
              className="overflow-hidden rounded-3xl bg-card"
              style={{
                borderWidth: "3px",
                borderColor: "#0F0F0F",
                boxShadow: "8px 8px 0px #0F0F0F",
              }}
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
            {/* Floating badge */}
            <div
              className="absolute -right-3 -top-3 z-20 rounded-2xl bg-emerald-primary px-4 py-2 font-heading text-sm font-bold text-white md:-right-5 md:-top-5"
              style={{
                borderWidth: "3px",
                borderColor: "#0F0F0F",
                boxShadow: "4px 4px 0px #0F0F0F",
              }}
            >
              Never knock twice ✨
            </div>
          </div>

          {/* Right column: pin legend + stats */}
          <div className="flex flex-col gap-6 md:col-span-2">
            {/* Pin legend card */}
            <div
              className="rounded-3xl bg-card p-6"
              style={{
                borderWidth: "3px",
                borderColor: "#0F0F0F",
                boxShadow: "6px 6px 0px #0F0F0F",
              }}
            >
              <h3 className="mb-4 font-heading text-lg font-bold">
                Pin color guide
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {pinStates.map((pin) => (
                  <div key={pin.label} className="flex items-center gap-2">
                    <span
                      className={`h-4 w-4 shrink-0 rounded-full ${pin.color}`}
                      style={{ borderWidth: "2px", borderColor: "#0F0F0F" }}
                    />
                    <span className="text-xs font-medium text-muted-foreground">
                      {pin.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature mini-cards */}
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-3xl bg-card p-5"
                style={{
                  borderWidth: "3px",
                  borderColor: "#0F0F0F",
                  boxShadow: "6px 6px 0px #0F0F0F",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`shrink-0 rounded-xl ${f.accent} p-2.5`}
                    style={{ borderWidth: "2px", borderColor: "#0F0F0F" }}
                  >
                    <f.icon size={20} className="text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-bold">{f.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {f.desc}
                    </p>
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
