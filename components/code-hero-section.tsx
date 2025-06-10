"use client"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useState, useEffect, useCallback } from "react"

export function CodeHeroSection() {
  const [currentLine, setCurrentLine] = useState(0)

  const codeLines = [
    "class DevFuletra {",
    "  constructor() {",
    "    this.name = 'Dev Vijay Fuletra';",
    "    this.role = 'Computer Science Student';",
    "    this.location = 'Bengaluru, India';",
    "    this.passion = ['Coding', 'AI', 'Game Dev'];",
    "  }",
    "",
    "  getSkills() {",
    "    return ['Python', 'C#', 'Unity', 'AI/ML'];",
    "  }",
    "",
    "  buildFuture() {",
    "    return 'Innovative Solutions';",
    "  }",
    "}",
    "",
    "const dev = new DevFuletra();",
    "console.log(dev.buildFuture());",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % codeLines.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Code Editor */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900/90 backdrop-blur-sm border border-green-500/30 rounded-lg overflow-hidden"
        >
          <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400 text-sm font-mono">DevFuletra.js</span>
          </div>
          <div className="p-6 font-mono text-sm">
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                className={`flex items-center space-x-4 ${index === currentLine ? "bg-green-500/10" : ""}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index <= currentLine ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-gray-500 w-6 text-right">{index + 1}</span>
                <span
                  className={`${
                    line.includes("class") || line.includes("constructor") || line.includes("return")
                      ? "text-purple-400"
                      : line.includes("this.") || line.includes("const")
                        ? "text-blue-400"
                        : line.includes("'") || line.includes('"')
                          ? "text-yellow-400"
                          : "text-green-400"
                  }`}
                >
                  {line || "\u00A0"}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Terminal Output */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          <div className="bg-black border border-green-500/30 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-green-400">dev@portfolio:~$</span>
              <TypeAnimation
                sequence={[
                  "node DevFuletra.js",
                  1000,
                  "node DevFuletra.js\n> Innovative Solutions",
                  2000,
                  "node DevFuletra.js\n> Innovative Solutions\n> Ready to code the future!",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-white"
                repeat={Number.POSITIVE_INFINITY}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold text-green-400 font-mono">&gt; DEV FULETRA_</h1>
            <p className="text-gray-300 text-lg">
              Computer Science student passionate about building innovative solutions through code. Specializing in AI,
              game development, and secure applications.
            </p>
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500/20 border border-green-500 text-green-400 px-6 py-3 rounded font-mono hover:bg-green-500/30 transition-colors"
                onClick={() => scrollToSection("projects")}
              >
                ./view_projects.sh
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-green-500/50 text-green-400 px-6 py-3 rounded font-mono hover:bg-green-500/10 transition-colors"
                onClick={() => scrollToSection("contact")}
              >
                cat contact.txt
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
