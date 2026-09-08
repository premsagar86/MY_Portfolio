"use client";

import { AnimatePresence, motion } from "motion/react";
import { nav, profile } from "@/lib/data";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl md:hidden"
          onKeyDown={(e) => e.key === "Escape" && onClose()}
        >
          <nav className="flex h-full flex-col items-center justify-center gap-8">
            {nav.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i + 0.1 }}
                className="font-display text-3xl font-semibold"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href={profile.resume}
              target="_blank"
              rel="noopener"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * nav.length + 0.1 }}
              className="mt-4 rounded-full border border-accent px-6 py-3 text-sm font-medium text-accent"
            >
              Résumé
            </motion.a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
