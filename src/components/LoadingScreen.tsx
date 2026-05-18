"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Animated rings */}
          <div className="relative flex items-center justify-center">
            <motion.div
              className="absolute h-24 w-24 rounded-full border border-purple-500/30"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute h-16 w-16 rounded-full border border-blue-500/40"
              animate={{ rotate: -360, scale: [1, 0.9, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>

          <motion.p
            className="loading-text mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            INITIALIZING AI PORTFOLIO
          </motion.p>

          {/* Progress bar */}
          <div className="mt-4 h-0.5 w-48 overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
