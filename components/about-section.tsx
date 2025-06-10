"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin, Calendar, Lightbulb, Users, Dribbble } from "lucide-react"

export function AboutSection() {
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
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            A Computer Science student passionate about technology, innovation, and continuous learning. Eager to apply
            my skills and contribute to meaningful projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-300">Education</h3>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <GraduationCap className="text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">B.E. Computer Science Engineering</h4>
                  <p className="text-purple-200 font-medium mb-2">Sai Vidya Institute of Technology</p>
                  <div className="flex items-center space-x-4 text-gray-100 text-sm">
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>Bengaluru, India</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>2021 - 2025 (Expected)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-300">Highlights</h3>
            <div className="space-y-4">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">🏆 Academic Excellence</h4>
                <p className="text-gray-100 text-sm">
                  Maintaining a strong academic record with a CGPA of 7.8 and no backlogs.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">💻 Project Portfolio</h4>
                <p className="text-gray-100 text-sm">
                  Diverse projects including voting systems, AI/ML applications, and game development.
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">🌱 Ready to Learn</h4>
                <p className="text-gray-100 text-sm">
                  Possessing a student mindset and prepared to tackle real-world challenges.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-purple-300">Strengths</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Lightbulb className="text-purple-400" size={20} />
                  <h4 className="font-semibold text-white text-sm">Communication Skills</h4>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Users className="text-purple-400" size={20} />
                  <h4 className="font-semibold text-white text-sm">Work Ethic</h4>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Dribbble className="text-purple-400" size={20} />
                  <h4 className="font-semibold text-white text-sm">Sports & Fitness</h4>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-purple-400" size={20} />
                  <h4 className="font-semibold text-white text-sm">Travel</h4>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-purple-400" size={20} />
                  <h4 className="font-semibold text-white text-sm">Gaming</h4>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
