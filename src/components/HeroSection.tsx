import { BrutalButton } from "./Navbar";
import heroPhoneGiraffe from "@/assets/hero-phone-giraffe.png";

export default function HeroSection() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="font-heading text-5xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">
            Knock. Quote. Close.
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">Under 60 seconds.</span>
              <span className="absolute bottom-1 left-0 -z-0 h-3 w-full origin-left bg-pastel-yellow md:h-4" />
            </span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            The only CRM built for door-to-door window cleaners.
            <br />
            Map-first. Mobile-first. Your whole business in one thumb.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <BrutalButton>Start Knocking →</BrutalButton>
            <BrutalButton variant="outline">Watch the 45s demo</BrutalButton>
          </div>
        </div>

        <div className="relative mx-auto w-[320px] md:w-[400px]">
          <div
            className="absolute -right-4 -top-4 z-20 rounded-full bg-coral px-4 py-2 font-heading text-sm font-bold text-white md:-right-6 md:-top-6 md:text-base"
            style={{ borderWidth: "3px", borderColor: "#0F0F0F", boxShadow: "3px 3px 0px #0F0F0F" }}
          >
            +328% close rate
          </div>

          <img
            src={heroPhoneGiraffe}
            alt="Giraffe CRM app showing a map with colorful lead pins on a phone, with a cartoon giraffe peeking over"
            width={800}
            height={1024}
            className="w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
