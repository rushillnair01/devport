"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-300 to-pink-300 bg-clip-text text-transparent">
              DEV FULETRA
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-100 mb-8"
          >
            <TypeAnimation
              sequence={[
                "Computer Science student passionate about development",
                2000,
                "Building secure applications and AI solutions",
                2000,
                "Creating engaging gaming experiences",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto mb-12"
          >
            Computer Science Engineering student at Sai Vidya Institute of Technology with expertise in Python, C#, and
            application development. Passionate about creating secure, innovative solutions and interactive gaming
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
              View My Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-purple-500 hover:bg-purple-500/10 px-8 py-3 rounded-lg font-medium transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
