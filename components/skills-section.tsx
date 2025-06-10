"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C", "C#"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Development Tools",
    skills: ["Visual Studio Code", "Python IDLE", "Unity"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Automation & Integration",
    skills: ["Zapier"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Specializations",
    skills: ["Game Development", "AI & Machine Learning", "Security Applications"],
    color: "from-orange-500 to-red-500",
  },
]

export function SkillsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Comprehensive expertise across various technologies, showcasing a diverse and adaptable skillset.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg w-fit mb-4`}>
                <div className="w-6 h-6 bg-white/20 rounded"></div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-600/30 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
