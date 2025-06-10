"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 p-6"
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          DEV FULETRA
        </motion.div>

        <div className="flex items-center space-x-6">
          <motion.a
            href="mailto:Devf0220@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Mail size={20} />
          </motion.a>
          <motion.a
            href="https://github.com/devvijayfuletra"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/dev-fuletra-2833081bb/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Download CV
          </motion.button>
        </div>
      </nav>
    </motion.header>
  )
}
