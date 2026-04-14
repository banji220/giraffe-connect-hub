import { motion } from "framer-motion";
import { BrutalButton } from "./Navbar";
import { Sparkles, ArrowRight } from "lucide-react";
import heroPhoneGiraffe from "@/assets/hero-phone-giraffe.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const phoneFloat = {
  hidden: { opacity: 0, y: 60, rotate: 3 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

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
                transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
          <motion.div
            custom={4}
            variants={fadeUp}
            className="mt-8 flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {[
                "bg-coral",
                "bg-brand-yellow",
                "bg-emerald-primary",
              ].map((bg, i) => (
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

        {/* Right: Phone mockup — wrapper is relative so badge can overflow */}
        <div className="relative mx-auto w-[300px] md:w-[380px] lg:w-[420px]">
          {/* Floating badge — sibling of image, not inside overflow-hidden */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 300, damping: 15 }}
            className="absolute -right-4 -top-4 z-30 rounded-full bg-coral px-4 py-2 font-heading text-sm font-bold text-white md:-right-6 md:-top-6 md:text-base"
            style={{ borderWidth: "3px", borderColor: "#0F0F0F", boxShadow: "3px 3px 0px #0F0F0F" }}
          >
            +328% close rate
          </motion.div>

          {/* Second floating badge — bottom left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 300, damping: 15 }}
            className="absolute -left-3 bottom-16 z-30 rounded-2xl bg-pastel-yellow px-3 py-2 font-heading text-xs font-bold md:-left-6 md:text-sm"
            style={{ borderWidth: "3px", borderColor: "#0F0F0F", boxShadow: "3px 3px 0px #0F0F0F" }}
          >
            ⚡ Quote in 3 taps
          </motion.div>

          {/* Phone image */}
          <motion.div
            variants={phoneFloat}
            initial="hidden"
            animate="visible"
          >
            <motion.img
              src={heroPhoneGiraffe}
              alt="Giraffe CRM app showing a map with colorful lead pins on a phone, with a cartoon giraffe peeking over"
              width={800}
              height={1024}
              className="w-full drop-shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
