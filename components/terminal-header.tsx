"use client"
import { motion } from "framer-motion"
import { Terminal, Github, Linkedin, Mail, Download } from "lucide-react"

export function TerminalHeader() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-900/90 backdrop-blur-sm border border-green-500/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <Terminal className="text-green-400" size={20} />
              <span className="text-green-400 font-mono">dev@fuletra:~$</span>
              <motion.span
                className="text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                whoami
              </motion.span>
            </div>

            <div className="flex items-center space-x-4">
              <motion.a
                href="https://mail.google.com/mail/?view=cm&to=Devf0220@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#00ff41" }}
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/devvijayfuletra"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#00ff41" }}
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/dev-fuletra-2833081bb/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#00ff41" }}
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
