import { BrutalButton } from "./Navbar";
import giraffeLogo from "@/assets/giraffe-logo.png";
import { Sparkles, ArrowRight, MapPin, Star, CheckCircle } from "lucide-react";

function PhoneMockup() {
  const pins = [
    { x: "28%", y: "38%", color: "bg-gold", label: "$120" },
    { x: "55%", y: "30%", color: "bg-gold-bright", label: "$85" },
    { x: "68%", y: "52%", color: "bg-navy-deep", label: "$200" },
    { x: "35%", y: "60%", color: "bg-gold", label: "$150" },
    { x: "50%", y: "72%", color: "bg-gold-bright", label: "$95" },
  ];

  return (
    <div className="relative mx-auto w-[260px] md:w-[300px] lg:w-[320px]">
      <div
        className="relative overflow-hidden rounded-[2.5rem] border border-gold/10 bg-obsidian p-2"
        style={{ boxShadow: "0 30px 80px oklch(0 0 0 / 0.6), 0 0 0 1px oklch(0.75 0.09 85 / 0.08)" }}
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-charcoal">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 py-2 text-[10px] font-bold text-foreground/30">
            <span>9:41</span>
            <div className="mx-auto h-5 w-20 rounded-full bg-obsidian" />
            <span>100%</span>
          </div>

          {/* App header */}
          <div className="bg-obsidian px-4 py-2 border-b border-border/30">
            <p className="font-heading text-xs font-bold text-gold flex items-center gap-1.5"><img src={giraffeLogo} alt="Giraffe CRM" className="h-4 w-auto" /> Giraffe CRM</p>
            <p className="text-[10px] text-muted-foreground">12 leads today</p>
          </div>

          {/* Map area */}
          <div className="relative h-[240px] md:h-[280px] bg-muted">
            <svg className="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              {[...Array(8)].map((_, i) => (
                <line key={`h${i}`} x1="0" y1={`${(i + 1) * 12.5}%`} x2="100%" y2={`${(i + 1) * 12.5}%`} stroke="currentColor" strokeWidth="0.5" />
              ))}
              {[...Array(6)].map((_, i) => (
                <line key={`v${i}`} x1={`${(i + 1) * 16.6}%`} y1="0" x2={`${(i + 1) * 16.6}%`} y2="100%" stroke="currentColor" strokeWidth="0.5" />
              ))}
              <line x1="0" y1="45%" x2="100%" y2="45%" stroke="currentColor" strokeWidth="2" opacity="0.15" />
              <line x1="40%" y1="0" x2="40%" y2="100%" stroke="currentColor" strokeWidth="2" opacity="0.15" />
            </svg>

            {pins.map((pin, i) => (
              <div
                key={i}
                className="absolute animate-[pinDrop_0.4s_ease-out_both]"
                style={{ left: pin.x, top: pin.y, animationDelay: `${0.8 + i * 0.12}s` }}
              >
                <div className="relative -translate-x-1/2">
                  <div
                    className={`${pin.color} flex items-center gap-0.5 rounded-full px-2 py-0.5 font-heading text-[9px] font-bold text-obsidian`}
                    style={{ boxShadow: "0 2px 10px oklch(0 0 0 / 0.4)" }}
                  >
                    <MapPin size={8} />
                    {pin.label}
                  </div>
                  <div className={`mx-auto h-2 w-0.5 ${pin.color} opacity-60`} />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom card */}
          <div className="border-t border-border/50 bg-card p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-heading text-[11px] font-bold text-foreground">42 Elm Street</p>
                <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                  <Star size={8} className="fill-gold text-gold" />
                  <span>Hot lead · 6 windows</span>
                </div>
              </div>
              <div className="rounded-lg bg-gold px-2.5 py-1 font-heading text-[10px] font-bold text-obsidian">
                $120
              </div>
            </div>
            <div className="mt-2 flex gap-1.5">
              <div className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-gold py-1.5 font-heading text-[9px] font-bold text-obsidian">
                <CheckCircle size={10} /> Close Deal
              </div>
              <div className="flex flex-1 items-center justify-center rounded-lg border border-border bg-secondary py-1.5 font-heading text-[9px] font-bold text-foreground/60">
                Follow Up
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 py-16 md:py-24 lg:py-32">
      {/* Decorative ambient glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gold/[0.04] blur-[100px] animate-[subtlePulse_8s_ease-in-out_infinite]" />
      <div className="absolute -bottom-32 right-0 hidden h-72 w-72 rounded-full bg-navy-deep/20 blur-[80px] md:block animate-[subtlePulse_6s_ease-in-out_infinite_1s]" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Left: Copy */}
        <div>
          <div className="animate-[fadeUp_0.6s_ease-out_both]">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/[0.06] px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-widest text-gold">
              <Sparkles size={14} strokeWidth={2.5} />
              Built for door knockers
            </span>
          </div>

          <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl animate-[fadeUp_0.6s_ease-out_0.15s_both]">
            Knock. Quote.{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Close.</span>
              <span className="absolute bottom-1 left-0 -z-0 h-3 w-full origin-left bg-gold/25 md:h-4 animate-[scaleX_0.5s_ease-out_0.8s_both]" />
            </span>
            <br />
            <span className="text-gold">Under 60s.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg animate-[fadeUp_0.6s_ease-out_0.3s_both]">
            The only CRM built for door-to-door window cleaners.
            <br />
            Map-first. Mobile-first. Your whole business in one thumb.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 animate-[fadeUp_0.6s_ease-out_0.45s_both]">
            <BrutalButton className="w-full sm:w-auto px-10 py-4 text-base" <BrutalButton className="w-full sm:w-auto px-10 py-4 text-base" onClick={() => window.location.href = "https://app.holygiraffe.com/login"}>>
              Sign in <ArrowRight size={18} className="ml-1 inline" />
            </BrutalButton>
            <BrutalButton variant="outline" className="w-full sm:w-auto">Watch the 45s demo</BrutalButton>
          </div>

          {/* Social proof */}
          <div className="mt-8 flex items-center gap-3 animate-[fadeUp_0.6s_ease-out_0.6s_both]">
            <div className="flex -space-x-2">
              {["bg-gold", "bg-gold-bright", "bg-navy-deep"].map((bg, i) => (
                <div
                  key={i}
                  className={`h-8 w-8 rounded-full ${bg} flex items-center justify-center font-heading text-xs font-bold ${i === 2 ? "text-ivory" : "text-obsidian"} border border-border/50`}
                >
                  {["JK", "MA", "TS"][i]}
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="font-bold text-gold">2,400+</span> window cleaners already knocking
            </p>
          </div>
        </div>

        {/* Right: Phone mockup */}
        <div className="relative">
          <div
            className="absolute -right-2 -top-3 z-30 rounded-xl bg-gold px-4 py-2 font-heading text-sm font-bold text-obsidian md:-right-6 md:-top-5 md:text-base animate-[badgePop_0.5s_ease-out_0.9s_both]"
            style={{ boxShadow: "0 8px 30px oklch(0.75 0.09 85 / 0.25)", rotate: "-3deg" }}
          >
            +328% close rate 🔥
          </div>

          <div
            className="absolute -left-2 bottom-20 z-30 rounded-xl border border-gold/20 bg-card px-3 py-2 font-heading text-xs font-bold text-gold md:-left-6 md:text-sm animate-[badgePop_0.5s_ease-out_1.1s_both]"
            style={{ boxShadow: "0 8px 24px oklch(0 0 0 / 0.4)", rotate: "3deg" }}
          >
            ⚡ Quote in 3 taps
          </div>

          <div className="animate-[phoneSlideUp_0.8s_ease-out_0.4s_both]">
            <div className="animate-[gentleFloat_4s_ease-in-out_infinite]">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}