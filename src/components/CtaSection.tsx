import { motion } from "framer-motion";
import { BrutalButton } from "./Navbar";
import giraffePeeking from "@/assets/giraffe-peeking.png";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-pastel-yellow px-5 py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
        >
          Stop losing deals to paper.
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-5 max-w-lg text-base text-foreground/70 md:text-lg"
        >
          Giraffe CRM runs on any phone. Be on the map in 60 seconds.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <BrutalButton className="px-10 py-4 text-base">
            Text yourself the link
          </BrutalButton>
          <p className="mt-4 text-sm text-foreground/50">
            We text you a login code. That's the whole signup.
          </p>
        </motion.div>
      </div>

      {/* Peeking giraffe */}
      <img
        src={giraffePeeking}
        alt="Cartoon giraffe peeking"
        width={600}
        height={800}
        loading="lazy"
        className="absolute -bottom-8 -right-4 z-0 w-40 opacity-80 md:-right-2 md:bottom-0 md:w-56"
      />
    </section>
  );
}
