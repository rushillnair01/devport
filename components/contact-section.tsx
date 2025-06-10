"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react"

export function ContactSection() {
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
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Interested in collaborating on projects or discussing opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-purple-200 mb-6">Get In Touch</h3>

            <div className="space-y-6">
              <motion.a
                href="mailto:devtosend@gmail.com"
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <Mail className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-300 text-sm">devtosend@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+917259600532"
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <Phone className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-300 text-sm">+91 72596 00532</p>
                </div>
              </motion.a>

              <div className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg">
                <div className="bg-purple-600/20 p-3 rounded-lg">
                  <MapPin className="text-purple-400" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-300 text-sm">Bengaluru, India</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 p-3 rounded-lg hover:border-purple-500/40 transition-all duration-300"
              >
                <Github className="text-purple-400" size={24} />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 p-3 rounded-lg hover:border-purple-500/40 transition-all duration-300"
              >
                <Linkedin className="text-purple-400" size={24} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
