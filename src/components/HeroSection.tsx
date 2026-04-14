import { motion } from "framer-motion";
import { BrutalButton } from "./Navbar";
import { MapPin, DollarSign, Clock, Wifi, Battery, Signal } from "lucide-react";

const fadeInUp = {
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true } as const,
};

function PhoneMockup() {
  return (
    <motion.div
      {...fadeInUp}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="relative mx-auto w-[280px] md:w-[300px]"
    >
      {/* Phone frame */}
      <div
        className="relative rounded-[2.5rem] border-foreground bg-foreground p-2"
        style={{ borderWidth: "3px", boxShadow: "6px 6px 0px #000" }}
      >
        {/* Dynamic island */}
        <div className="absolute left-1/2 top-3 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-foreground" />

        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2rem] bg-background">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pb-1 pt-8 text-[10px] text-muted-foreground">
            <span className="font-heading font-bold">9:41</span>
            <div className="flex items-center gap-1">
              <Signal size={10} />
              <Wifi size={10} />
              <Battery size={10} />
            </div>
          </div>

          {/* App header */}
          <div className="border-b border-foreground/10 px-4 pb-2 pt-1">
            <span className="font-heading text-xs font-bold text-electric-blue">
              Giraffe CRM
            </span>
          </div>

          {/* Lead card */}
          <div className="p-4">
            <div
              className="relative rounded-xl border-foreground bg-card p-3"
              style={{ borderWidth: "2px", boxShadow: "3px 3px 0px #000" }}
            >
              <div className="mb-2 flex items-start justify-between">
                <h4 className="font-heading text-sm font-bold leading-tight">
                  742 Evergreen Terr.
                </h4>
                <span
                  className="shrink-0 rounded-lg bg-mint px-2 py-0.5 text-[10px] font-bold text-foreground"
                  style={{ borderWidth: "1.5px", borderColor: "#000" }}
                >
                  NEW
                </span>
              </div>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <MapPin size={11} className="shrink-0" />
                  <span>Springfield, IL 62704</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <DollarSign size={11} className="shrink-0" />
                  <span className="font-bold text-foreground">$185.00</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={11} className="shrink-0" />
                  <span>Follow-up: Tomorrow 10am</span>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="mt-3 flex gap-2">
              <div
                className="flex-1 rounded-lg bg-electric-blue py-2 text-center text-xs font-bold text-white"
                style={{ borderWidth: "2px", borderColor: "#000", boxShadow: "2px 2px 0px #000" }}
              >
                Call
              </div>
              <div
                className="flex-1 rounded-lg bg-pastel-yellow py-2 text-center text-xs font-bold text-foreground"
                style={{ borderWidth: "2px", borderColor: "#000", boxShadow: "2px 2px 0px #000" }}
              >
                Quote
              </div>
            </div>

            {/* Second lead preview */}
            <div
              className="mt-3 rounded-xl border-foreground bg-card/60 p-3 opacity-50"
              style={{ borderWidth: "2px" }}
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-xs font-bold">1024 Oak Ave.</span>
                <span
                  className="rounded-lg bg-pastel-yellow px-2 py-0.5 text-[10px] font-bold"
                  style={{ borderWidth: "1.5px", borderColor: "#000" }}
                >
                  PENDING
                </span>
              </div>
            </div>
          </div>

          {/* Bottom nav bar */}
          <div className="flex justify-around border-t border-foreground/10 px-4 py-2">
            {["Leads", "Map", "Queue"].map((tab) => (
              <span
                key={tab}
                className={`text-[10px] font-heading font-medium ${tab === "Leads" ? "text-electric-blue font-bold" : "text-muted-foreground"}`}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Home indicator */}
      <div className="mx-auto mt-1.5 h-1 w-24 rounded-full bg-foreground/30" />
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            The CRM Built for{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Door Knockers.</span>
              <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-pastel-yellow md:h-4" />
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base text-muted-foreground md:text-lg">
            Quote on the spot. Capture leads in seconds. Never lose a follow-up
            again.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <BrutalButton>Start Free</BrutalButton>
            <BrutalButton variant="outline">See It In Action</BrutalButton>
          </div>
        </motion.div>

        <PhoneMockup />
      </div>
    </section>
  );
}
