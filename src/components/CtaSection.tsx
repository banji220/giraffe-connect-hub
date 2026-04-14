import { BrutalButton } from "./Navbar";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden px-5 py-20 md:py-28">
      {/* Subtle gold gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Stop losing deals to paper.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
          Giraffe CRM runs on any phone. Be on the map in 60 seconds.
        </p>
        <div className="mt-8">
          <BrutalButton className="px-10 py-4 text-base">
            Text yourself the link
          </BrutalButton>
          <p className="mt-4 text-sm text-muted-foreground/60">
            We text you a login code. That's the whole signup.
          </p>
        </div>
      </div>
    </section>
  );
}