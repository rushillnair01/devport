"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react"

export function EducationSection() {
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
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Academic journey focused on computer science fundamentals and practical application development.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition-all duration-300"
          >
            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 rounded-xl">
                <GraduationCap className="text-purple-400" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">B.E. Computer Science Engineering</h3>
                <p className="text-xl text-purple-200 font-medium mb-4">Sai Vidya Institute of Technology</p>
                <div className="flex flex-wrap items-center gap-6 text-gray-100 text-sm mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-purple-400" />
                    <span>Bengaluru, India</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award size={16} className="text-purple-400" />
                    <span>CGPA: 7.8</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} className="text-purple-400" />
                    <span>2021 - 2025 (Expected)</span>
                  </div>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <p className="text-green-400 text-sm font-medium">✅ Zero Backlogs - Clean Academic Record</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition-all duration-300"
          >
            <div className="flex items-start space-x-6">
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-4 rounded-xl">
                <GraduationCap className="text-blue-400" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
                  12th Grade
                </h3>
                <p className="text-xl bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent font-medium mb-4">
                  Navkis Educational Center
                </p>
                <div className="flex items-center space-x-6 text-gray-300 text-sm">
                  <div className="flex items-center space-x-2">
                    <Award size={16} className="text-blue-400" />
                    <span>88.2% - Excellent Performance</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 text-center">
            Relevant Coursework
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Data Structures",
              "Python Programming",
              "IoT Applications",
              "C Programming",
              "Big Data Analytics",
              "Cloud Computing",
            ].map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 text-center hover:border-purple-500/40 transition-all duration-300"
              >
                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-medium">
                  {course}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
