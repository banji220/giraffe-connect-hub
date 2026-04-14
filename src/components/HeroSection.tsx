import { BrutalButton } from "./Navbar";
import { Sparkles, ArrowRight, MapPin, Star, CheckCircle } from "lucide-react";

function PhoneMockup() {
  const pins = [
    { x: "28%", y: "38%", color: "bg-coral", label: "$120" },
    { x: "55%", y: "30%", color: "bg-brand-yellow", label: "$85" },
    { x: "68%", y: "52%", color: "bg-emerald-primary", label: "$200" },
    { x: "35%", y: "60%", color: "bg-coral", label: "$150" },
    { x: "50%", y: "72%", color: "bg-brand-yellow", label: "$95" },
  ];

  return (
    <div className="relative mx-auto w-[260px] md:w-[300px] lg:w-[320px]">
      <div
        className="relative overflow-hidden rounded-[2.5rem] bg-foreground p-2"
        style={{ boxShadow: "12px 12px 0px #0F0F0F" }}
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-background">
          <div className="flex items-center justify-between px-5 py-2 text-[10px] font-bold text-foreground/60">
            <span>9:41</span>
            <div className="mx-auto h-5 w-20 rounded-full bg-foreground" />
            <span>100%</span>
          </div>

          <div className="bg-brand-black px-4 py-2">
            <p className="font-heading text-xs font-bold text-brand-yellow">🦒 Giraffe CRM</p>
            <p className="text-[10px] text-white/60">12 leads today</p>
          </div>

          <div className="relative h-[240px] md:h-[280px] bg-pastel-yellow/30">
            <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              {[...Array(8)].map((_, i) => (
                <line key={`h${i}`} x1="0" y1={`${(i + 1) * 12.5}%`} x2="100%" y2={`${(i + 1) * 12.5}%`} stroke="currentColor" strokeWidth="0.5" />
              ))}
              {[...Array(6)].map((_, i) => (
                <line key={`v${i}`} x1={`${(i + 1) * 16.6}%`} y1="0" x2={`${(i + 1) * 16.6}%`} y2="100%" stroke="currentColor" strokeWidth="0.5" />
              ))}
              <line x1="0" y1="45%" x2="100%" y2="45%" stroke="currentColor" strokeWidth="2" opacity="0.3" />
              <line x1="40%" y1="0" x2="40%" y2="100%" stroke="currentColor" strokeWidth="2" opacity="0.3" />
              <line x1="10%" y1="70%" x2="80%" y2="25%" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
            </svg>

            {pins.map((pin, i) => (
              <div
                key={i}
                className="absolute animate-[pinDrop_0.4s_ease-out_both]"
                style={{ left: pin.x, top: pin.y, animationDelay: `${0.8 + i * 0.12}s` }}
              >
                <div className="relative -translate-x-1/2">
                  <div
                    className={`${pin.color} flex items-center gap-0.5 rounded-full px-2 py-0.5 font-heading text-[9px] font-bold text-white`}
                    style={{ borderWidth: "1.5px", borderColor: "#0F0F0F", boxShadow: "2px 2px 0px #0F0F0F" }}
                  >
                    <MapPin size={8} />
                    {pin.label}
                  </div>
                  <div className={`mx-auto h-2 w-0.5 ${pin.color}`} />
                </div>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-foreground bg-white p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-heading text-[11px] font-bold">42 Elm Street</p>
                <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
                  <Star size={8} className="fill-brand-yellow text-brand-yellow" />
                  <span>Hot lead · 6 windows</span>
                </div>
              </div>
              <div
                className="rounded-xl bg-coral px-2.5 py-1 font-heading text-[10px] font-bold text-white"
                style={{ borderWidth: "1.5px", borderColor: "#0F0F0F", boxShadow: "2px 2px 0px #0F0F0F" }}
              >
                $120
              </div>
            </div>
            <div className="mt-2 flex gap-1.5">
              <div className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-emerald-primary py-1.5 font-heading text-[9px] font-bold text-white"
                style={{ borderWidth: "1.5px", borderColor: "#0F0F0F" }}
              >
                <CheckCircle size={10} /> Close Deal
              </div>
              <div className="flex flex-1 items-center justify-center rounded-lg bg-pastel-yellow py-1.5 font-heading text-[9px] font-bold"
                style={{ borderWidth: "1.5px", borderColor: "#0F0F0F" }}
              >
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
      {/* Decorative shapes — pure CSS animation */}
      <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-pastel-yellow opacity-60 animate-[blobPulse_8s_ease-in-out_infinite]" />
      <div
        className="absolute -bottom-10 right-10 hidden h-40 w-40 rounded-3xl bg-mint opacity-40 md:block animate-[blobFloat_6s_ease-in-out_infinite]"
        style={{ borderWidth: "3px", borderColor: "#0F0F0F" }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Left: Copy */}
        <div>
          <div className="animate-[fadeUp_0.6s_ease-out_both]">
            <span
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-pastel-yellow px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wider"
              style={{ borderWidth: "2px", borderColor: "#0F0F0F", boxShadow: "3px 3px 0px #0F0F0F" }}
            >
              <Sparkles size={14} strokeWidth={2.5} />
              Built for door knockers
            </span>
          </div>

          <h1
            className="mt-6 font-heading text-5xl font-bold leading-[1.08] md:text-6xl lg:text-7xl animate-[fadeUp_0.6s_ease-out_0.15s_both]"
          >
            Knock. Quote.{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Close.</span>
              <span
                className="absolute bottom-1 left-0 -z-0 h-3 w-full origin-left bg-brand-yellow md:h-4 animate-[scaleX_0.5s_ease-out_0.8s_both]"
              />
            </span>
            <br />
            <span className="text-coral">Under 60s.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg animate-[fadeUp_0.6s_ease-out_0.3s_both]">
            The only CRM built for door-to-door window cleaners.
            <br />
            Map-first. Mobile-first. Your whole business in one thumb.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 animate-[fadeUp_0.6s_ease-out_0.45s_both]">
            <BrutalButton>
              Start Knocking <ArrowRight size={16} className="ml-1 inline" />
            </BrutalButton>
            <BrutalButton variant="outline">Watch the 45s demo</BrutalButton>
          </div>

          {/* Social proof micro-strip */}
          <div className="mt-8 flex items-center gap-3 animate-[fadeUp_0.6s_ease-out_0.6s_both]">
            <div className="flex -space-x-2">
              {["bg-coral", "bg-brand-yellow", "bg-emerald-primary"].map((bg, i) => (
                <div
                  key={i}
                  className={`h-8 w-8 rounded-full ${bg} flex items-center justify-center font-heading text-xs font-bold text-white`}
                  style={{ borderWidth: "2px", borderColor: "#0F0F0F" }}
                >
                  {["JK", "MA", "TS"][i]}
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="font-bold text-foreground">2,400+</span> window cleaners already knocking
            </p>
          </div>
        </div>

        {/* Right: Phone mockup */}
        <div className="relative">
          {/* Floating badge */}
          <div
            className="absolute -right-2 -top-3 z-30 rounded-2xl bg-coral px-4 py-2 font-heading text-sm font-bold text-white md:-right-6 md:-top-5 md:text-base animate-[badgePop_0.5s_ease-out_0.9s_both]"
            style={{ borderWidth: "3px", borderColor: "#0F0F0F", boxShadow: "4px 4px 0px #0F0F0F", rotate: "-3deg" }}
          >
            +328% close rate 🔥
          </div>

          {/* Second badge */}
          <div
            className="absolute -left-2 bottom-20 z-30 rounded-2xl bg-pastel-yellow px-3 py-2 font-heading text-xs font-bold md:-left-6 md:text-sm animate-[badgePop_0.5s_ease-out_1.1s_both]"
            style={{ borderWidth: "3px", borderColor: "#0F0F0F", boxShadow: "4px 4px 0px #0F0F0F", rotate: "3deg" }}
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