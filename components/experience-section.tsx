"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "AIML Intern",
    company: "LiquidMindAI",
    location: "Remote",
    period: "Feb 2025 – May 2025",
    description: [
      "Developed and deployed multi-modal RAG pipelines for automating trade compliance tasks",
      "Integrated domain-specific retrieval systems using vector databases (Qdrant) and graph-based knowledge (Neo4j)",
      "Improved document classification, relevance ranking, and response generation in regulatory workflows",
    ],
    current: true,
  },
  {
    title: "ML Research Intern",
    company: "Indian Institute of Science (ICWaR)",
    location: "Bangalore, India",
    period: "Apr 2024 – Mar 2025",
    description: [
      "Collaborated on research to forecast hydrological variables across Bangalore's flood-prone regions",
      "Explored time series and deep learning models for short-term discharge prediction and model reliability",
      "Co-authored internal research publication focused on model interpretability in uncertain climatic conditions",
    ],
    current: false,
  },
]

export function ExperienceSection() {
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
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hands-on experience in AI research and development across leading institutions and innovative startups.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      {exp.current && (
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-purple-300 mb-4">
                      <div className="flex items-center space-x-1">
                        <Building size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
