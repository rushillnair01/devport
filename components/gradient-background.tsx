"use client"
import { motion } from "framer-motion"

export function GradientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Moving gradient blurs */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{ top: "10%", left: "10%" }}
      />

      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 80, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{ top: "60%", right: "15%" }}
      />

      <motion.div
        className="absolute w-72 h-72 bg-gradient-to-r from-emerald-500/25 to-teal-500/25 rounded-full blur-3xl"
        animate={{
          x: [0, 70, -30, 0],
          y: [0, -60, 80, 0],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{ bottom: "20%", left: "20%" }}
      />

      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 40, -70, 0],
        }}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{ top: "30%", right: "30%" }}
      />

      <motion.div
        className="absolute w-88 h-88 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full blur-3xl"
        animate={{
          x: [0, 90, -70, 0],
          y: [0, -50, 60, 0],
        }}
        transition={{
          duration: 35,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{ bottom: "40%", right: "5%" }}
      />
    </div>
  )
}
