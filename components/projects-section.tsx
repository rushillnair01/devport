"use client"

import { motion } from "framer-motion"
import { ExternalLink, Database, ShieldCheck, Wand2, Gamepad2 } from "lucide-react"

const projects = [
  {
    title: "Online Voting Application",
    organization: "Independent Project",
    description:
      "Developed a secure online voting application with end-to-end encryption and robust security measures to ensure fair and tamper-proof elections.",
    tech: ["Python", "Encryption", "Security", "Web Development"],
    icon: ShieldCheck,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Phishing Detection using AI & Machine Learning",
    organization: "Independent Project",
    description:
      "Engineered an AI-powered phishing detection system using machine learning models to analyze website features and identify potential phishing attempts.",
    tech: ["Machine Learning", "Python", "AI", "Cybersecurity"],
    icon: Database,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "2D Passage Gateway Animation",
    organization: "Independent Project",
    description:
      "Created an immersive 2D animation of a passage gateway, incorporating interactive design elements to enhance user engagement and visual appeal.",
    tech: ["2D Animation", "Interactive Design", "Gaming"],
    icon: Wand2,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Boxy (2D Game Development)",
    organization: "Independent Project",
    description:
      "Developed 'Boxy,' a 2D game using C# and Unity, featuring engaging gameplay and visually appealing 2D graphics.",
    tech: ["C#", "Unity", "Game Development", "2D Graphics"],
    icon: Gamepad2,
    gradient: "from-orange-500 to-yellow-500",
  },
]

export function ProjectsSection() {
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
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Innovative projects showcasing skills in AI, cybersecurity, and game development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className={`bg-gradient-to-r ${project.gradient} p-3 rounded-lg w-fit mb-4`}>
                <project.icon className="text-white" size={24} />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-purple-200 text-sm font-medium mb-3">{project.organization}</p>
              <p className="text-gray-100 text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 text-sm"
                >
                  <ExternalLink size={16} />
                  <span>View Details</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
