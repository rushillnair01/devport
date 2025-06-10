"use client"
import { motion } from "framer-motion"
import { useState } from "react"

export function TerminalAbout() {
  const [activeTab, setActiveTab] = useState("education")

  const tabs = {
    education: {
      title: "education.json",
      content: {
        university: "Sai Vidya Institute of Technology",
        degree: "B.E. Computer Science Engineering",
        cgpa: 7.8,
        location: "Bengaluru, India",
        year: "2021-2025",
        backlogs: 0,
        coursework: [
          "Data Structures",
          "Python Programming",
          "IoT Applications",
          "C Programming",
          "Big Data Analytics",
          "Cloud Computing",
        ],
      },
    },
    skills: {
      title: "skills.py",
      content: `# Programming Arsenal
languages = ["Python", "C", "C#"]
tools = ["Visual Studio Code", "Unity", "Python IDLE"]
automation = ["Zapier"]
specializations = [
    "Game Development",
    "AI & Machine Learning", 
    "Security Applications"
]

def get_expertise():
    return {
        "primary": languages,
        "development": tools,
        "focus": specializations
    }`,
    },
    strengths: {
      title: "strengths.md",
      content: `# Personal Strengths

## 🗣️ Communication
- Exceptional oratory abilities
- Strong listening skills
- Team collaboration

## 💪 Work Ethic  
- Dedicated approach
- Results-driven mindset
- Positive work environment

## 🎯 Interests
- Sports & Fitness
- Travel & Exploration  
- Video Gaming
- Continuous Learning`,
    },
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
          <h2 className="text-4xl font-bold text-green-400 font-mono mb-4">&gt; about_dev.exe</h2>
          <p className="text-gray-300">Exploring the developer behind the code</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-900/90 backdrop-blur-sm border border-green-500/30 rounded-lg overflow-hidden"
        >
          {/* Terminal Tabs */}
          <div className="bg-gray-800 px-4 py-2 flex items-center space-x-4">
            {Object.entries(tabs).map(([key, tab]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-3 py-1 rounded text-sm font-mono transition-colors ${
                  activeTab === key
                    ? "bg-green-500/20 text-green-400 border border-green-500/50"
                    : "text-gray-400 hover:text-green-400"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === "education" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-sm">
                <pre className="text-green-400">{JSON.stringify(tabs.education.content, null, 2)}</pre>
              </motion.div>
            )}

            {activeTab === "skills" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-sm">
                <pre className="text-green-400">{tabs.skills.content}</pre>
              </motion.div>
            )}

            {activeTab === "strengths" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-mono text-sm text-green-400"
              >
                <div dangerouslySetInnerHTML={{ __html: tabs.strengths.content.replace(/\n/g, "<br>") }} />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
