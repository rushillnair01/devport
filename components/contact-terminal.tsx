"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { Send, Mail, Phone, MapPin } from "lucide-react"

export function ContactTerminal() {
  const [command, setCommand] = useState("")
  const [messages, setMessages] = useState([
    "Welcome to Dev Fuletra's contact terminal",
    "Type 'help' for available commands",
  ])

  const handleCommand = (cmd: string) => {
    const newMessages = [...messages, `dev@contact:~$ ${cmd}`]

    switch (cmd.toLowerCase()) {
      case "help":
        newMessages.push(
          "Available commands:\n- email: Get email address\n- phone: Get phone number\n- location: Get location\n- social: Get social links\n- clear: Clear terminal",
        )
        break
      case "email":
        newMessages.push("📧 devtosend@gmail.com")
        break
      case "phone":
        newMessages.push("📱 +91 72596 00532")
        break
      case "location":
        newMessages.push("📍 Bengaluru, India")
        break
      case "social":
        newMessages.push("🔗 GitHub: github.com/devfuletra\n🔗 LinkedIn: linkedin.com/in/devfuletra")
        break
      case "clear":
        setMessages(["Terminal cleared", "Type 'help' for available commands"])
        setCommand("")
        return
      default:
        newMessages.push(`Command '${cmd}' not found. Type 'help' for available commands.`)
    }

    setMessages(newMessages)
    setCommand("")
  }

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
          <h2 className="text-4xl font-bold text-green-400 font-mono mb-4">&gt; ./connect.sh</h2>
          <p className="text-gray-300">Let's build something amazing together</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Interactive Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black border border-green-500/30 rounded-lg overflow-hidden"
          >
            <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-sm ml-4">contact-terminal</span>
            </div>

            <div className="p-4 h-80 overflow-y-auto">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm font-mono mb-2 whitespace-pre-line"
                >
                  {message}
                </motion.div>
              ))}

              <div className="flex items-center space-x-2 mt-4">
                <span className="text-gray-400 font-mono">dev@contact:~$</span>
                <input
                  type="text"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleCommand(command)}
                  className="bg-transparent text-green-400 font-mono outline-none flex-1"
                  placeholder="Type a command..."
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900/90 backdrop-blur-sm border border-green-500/30 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold text-green-400 font-mono mb-6">send_message.py</h3>

            <form className="space-y-4">
              <div>
                <label className="block text-green-400 text-sm font-mono mb-2">name = input("Your name: ")</label>
                <input
                  type="text"
                  className="w-full bg-black border border-green-500/30 rounded px-3 py-2 text-green-400 font-mono focus:border-green-500 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-green-400 text-sm font-mono mb-2">email = input("Your email: ")</label>
                <input
                  type="email"
                  className="w-full bg-black border border-green-500/30 rounded px-3 py-2 text-green-400 font-mono focus:border-green-500 focus:outline-none"
                  placeholder="your.email@domain.com"
                />
              </div>

              <div>
                <label className="block text-green-400 text-sm font-mono mb-2">message = input("Your message: ")</label>
                <textarea
                  rows={4}
                  className="w-full bg-black border border-green-500/30 rounded px-3 py-2 text-green-400 font-mono focus:border-green-500 focus:outline-none resize-none"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-green-500/20 border border-green-500 text-green-400 py-3 rounded font-mono hover:bg-green-500/30 transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={16} />
                <span>execute_send()</span>
              </motion.button>
            </form>

            {/* Quick Contact */}
            <div className="mt-6 pt-6 border-t border-green-500/30">
              <h4 className="text-green-400 font-mono mb-4">Quick Access:</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="text-green-400" size={16} />
                  <span className="text-gray-300 font-mono">devtosend@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="text-green-400" size={16} />
                  <span className="text-gray-300 font-mono">+91 72596 00532</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="text-green-400" size={16} />
                  <span className="text-gray-300 font-mono">Bengaluru, India</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
