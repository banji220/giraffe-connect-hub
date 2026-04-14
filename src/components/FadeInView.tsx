import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

export default function FadeInView({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay, duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
