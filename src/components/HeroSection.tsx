import { motion } from "framer-motion";
import { BrutalButton } from "./Navbar";
import { MapPin, DollarSign, Clock } from "lucide-react";

function PhoneMockup() {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="relative mx-auto w-[280px]"
    >
      {/* Phone frame */}
      <div
        className="rounded-[2rem] border-foreground bg-card p-3"
        style={{ borderWidth: "3px", boxShadow: "6px 6px 0px #000" }}
      >
        {/* Screen */}
        <div className="rounded-[1.5rem] bg-background p-4">
          {/* Status bar */}
          <div className="mb-4 flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-heading font-bold">Giraffe CRM</span>
            <span>9:41 AM</span>
          </div>

          {/* Lead card */}
          <div
            className="rounded-xl border-foreground bg-card p-3"
            style={{ borderWidth: "2px", boxShadow: "3px 3px 0px #000" }}
          >
            <div className="mb-2 flex items-start justify-between">
              <h4 className="font-heading text-sm font-bold">742 Evergreen Terr.</h4>
              <span
                className="rounded-lg bg-mint px-2 py-0.5 text-xs font-bold text-foreground"
                style={{ borderWidth: "1.5px", borderColor: "#000" }}
              >
                NEW
              </span>
            </div>
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <MapPin size={12} />
                <span>Springfield, IL 62704</span>
              </div>
              <div className="flex items-center gap-1.5">
                <DollarSign size={12} />
                <span className="font-bold text-foreground">$185.00</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={12} />
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
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="overflow-hidden px-5 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-4xl font-bold leading-tight md:text-6xl">
            The CRM Built for{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Door Knockers.</span>
              <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-pastel-yellow md:h-4" />
            </span>
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
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
