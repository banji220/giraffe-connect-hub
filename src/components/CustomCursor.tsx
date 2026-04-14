import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const x = useSpring(0, { stiffness: 300, damping: 25 });
  const y = useSpring(0, { stiffness: 300, damping: 25 });

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [visible, x, y]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
      style={{ x, y }}
    />
  );
}
