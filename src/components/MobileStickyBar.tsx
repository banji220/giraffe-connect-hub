import { BrutalButton } from "./Navbar";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 block border-t-3 border-foreground bg-background/95 px-4 py-3 backdrop-blur-sm md:hidden">
      <BrutalButton
        className="w-full py-3 text-base cursor-pointer"
        onClick={() => { window.location.href = "https://app.holygiraffe.com/login"; }}
      >
        Sign in →
      </BrutalButton>
    </div>
  );
}
