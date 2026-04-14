import { motion } from "framer-motion";
import { BrutalButton } from "./Navbar";
import { Sparkles, ArrowRight, MapPin, Star, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

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
      {/* Phone frame */}
      <div
        className="relative overflow-hidden rounded-[2.5rem] bg-foreground p-2"
        style={{ boxShadow: "12px 12px 0px #0F0F0F" }}
      >
        {/* Inner screen */}
        <div className="relative overflow-hidden rounded-[2rem] bg-background">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 py-2 text-[10px] font-bold text-foreground/60">
            <span>9:41</span>
            <div className="mx-auto h-5 w-20 rounded-full bg-foreground" />
            <span>100%</span>
          </div>

          {/* App header */}
          <div className="bg-brand-black px-4 py-2">
            <p className="font-heading text-xs font-bold text-brand-yellow">🦒 Giraffe CRM</p>
            <p className="text-[10px] text-white/60">12 leads today</p>
          </div>

          {/* Map area */}
          <div className="relative h-[240px] md:h-[280px] bg-pastel-yellow/30">
            {/* Grid lines to simulate map */}
            <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              {[...Array(8)].map((_, i) => (
                <line key={`h${i}`} x1="0" y1={`${(i + 1) * 12.5}%`} x2="100%" y2={`${(i + 1) * 12.5}%`} stroke="currentColor" strokeWidth="0.5" />
              ))}
              {[...Array(6)].map((_, i) => (
                <line key={`v${i}`} x1={`${(i + 1) * 16.6}%`} y1="0" x2={`${(i + 1) * 16.6}%`} y2="100%" stroke="currentColor" strokeWidth="0.5" />
              ))}
              {/* Streets */}
              <line x1="0" y1="45%" x2="100%" y2="45%" stroke="currentColor" strokeWidth="2" opacity="0.3" />
              <line x1="40%" y1="0" x2="40%" y2="100%" stroke="currentColor" strokeWidth="2" opacity="0.3" />
              <line x1="10%" y1="70%" x2="80%" y2="25%" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
            </svg>

            {/* Map pins */}
            {pins.map((pin, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ left: pin.x, top: pin.y }}
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.12, type: "spring", stiffness: 400, damping: 15 }}
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
              </motion.div>
            ))}
          </div>

          {/* Bottom card */}
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
      {/* Decorative shapes */}
      <motion.div
        className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-pastel-yellow opacity-60"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-10 right-10 hidden h-40 w-40 rounded-3xl bg-mint opacity-40 md:block"
        style={{ borderWidth: "3px", borderColor: "#0F0F0F" }}
        animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Left: Copy */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div custom={0} variants={fadeUp}>
            <span
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-pastel-yellow px-4 py-1.5 font-heading text-xs font-bold uppercase tracking-wider"
              style={{ borderWidth: "2px", borderColor: "#0F0F0F", boxShadow: "3px 3px 0px #0F0F0F" }}
            >
              <Sparkles size={14} strokeWidth={2.5} />
              Built for door knockers
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="mt-6 font-heading text-5xl font-bold leading-[1.08] md:text-6xl lg:text-7xl"
          >
            Knock. Quote.{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Close.</span>
              <motion.span
                className="absolute bottom-1 left-0 -z-0 h-3 w-full origin-left bg-brand-yellow md:h-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
              />
            </span>
            <br />
            <span className="text-coral">Under 60s.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            The only CRM built for door-to-door window cleaners.
            <br />
            Map-first. Mobile-first. Your whole business in one thumb.
          </motion.p>

          <motion.div custom={3} variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <BrutalButton>
              Start Knocking <ArrowRight size={16} className="ml-1 inline" />
            </BrutalButton>
            <BrutalButton variant="outline">Watch the 45s demo</BrutalButton>
          </motion.div>

          {/* Social proof micro-strip */}
          <motion.div custom={4} variants={fadeUp} className="mt-8 flex items-center gap-3">
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
          </motion.div>
        </motion.div>

        {/* Right: Phone mockup */}
        <div className="relative">
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 300, damping: 15 }}
            className="absolute -right-2 -top-3 z-30 rounded-2xl bg-coral px-4 py-2 font-heading text-sm font-bold text-white md:-right-6 md:-top-5 md:text-base"
            style={{ borderWidth: "3px", borderColor: "#0F0F0F", boxShadow: "4px 4px 0px #0F0F0F" }}
          >
            +328% close rate 🔥
          </motion.div>

          {/* Second badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 300, damping: 15 }}
            className="absolute -left-2 bottom-20 z-30 rounded-2xl bg-pastel-yellow px-3 py-2 font-heading text-xs font-bold md:-left-6 md:text-sm"
            style={{ borderWidth: "3px", borderColor: "#0F0F0F", boxShadow: "4px 4px 0px #0F0F0F" }}
          >
            ⚡ Quote in 3 taps
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 3 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneMockup />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
