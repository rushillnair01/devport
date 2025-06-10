"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function SkillsTerminal() {
  const [currentCommand, setCurrentCommand] = useState("")
  const [output, setOutput] = useState<string[]>([])

  const commands = ["python --version", "csharp --info", "unity --status", "git log --oneline"]

  const responses = [
    "Python 3.9.7 - Ready for AI/ML development",
    "C# 9.0 - Game development ready with Unity",
    "Unity 2022.3 LTS - 2D/3D game engine active",
    "* feat: Implemented phishing detection\n* feat: Built voting system\n* feat: Created Boxy game\n* feat: Designed 2D gateway animation",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * commands.length)
      setCurrentCommand(commands[randomIndex])
      setOutput((prev) => [...prev.slice(-3), responses[randomIndex]])
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-400 font-mono mb-4">&gt; ./check_skills.sh</h2>
          <p className="text-gray-300">Technical expertise and development tools</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Live Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black border border-green-500/30 rounded-lg p-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-sm ml-4">Terminal</span>
            </div>

            <div className="space-y-2 h-64 overflow-y-auto">
              {output.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-green-400 text-sm font-mono"
                >
                  <div className="text-gray-400">dev@skills:~$ {commands[index % commands.length]}</div>
                  <div className="text-green-400 whitespace-pre-line">{line}</div>
                </motion.div>
              ))}

              <div className="flex items-center space-x-2">
                <span className="text-gray-400 font-mono">dev@skills:~$</span>
                <span className="text-white font-mono">{currentCommand}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                  className="text-green-400"
                >
                  _
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { category: "Languages", skills: ["Python", "C", "C#"], color: "text-blue-400" },
              { category: "Tools", skills: ["Visual Studio Code", "Unity", "Python IDLE"], color: "text-purple-400" },
              { category: "Automation", skills: ["Zapier"], color: "text-yellow-400" },
              { category: "Specializations", skills: ["Game Dev", "AI/ML", "Security"], color: "text-green-400" },
            ].map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/90 backdrop-blur-sm border border-green-500/30 rounded-lg p-4"
              >
                <h3 className={`font-mono font-bold mb-3 ${skillGroup.color}`}>{skillGroup.category}.json</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-green-500/20 text-green-400 px-3 py-1 rounded font-mono text-sm border border-green-500/30 hover:bg-green-500/30 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
