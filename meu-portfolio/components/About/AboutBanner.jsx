
"use client";

import { motion } from "framer-motion";

export default function AboutBanner() {
  return (
    <>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-0 hidden h-full md:block">
        <motion.img
          src="/zenitsu7.png"
          alt=""
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 0.85, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="block h-full w-auto max-w-none object-contain"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-40 bg-gradient-to-b from-black/90 via-black/40 to-transparent md:h-52" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:h-52" />
    </>
  );
}
