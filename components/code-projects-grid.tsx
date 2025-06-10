"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { Play, Code, Shield, Gamepad2, Wand2 } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Online Voting Application",
    description: "Secure voting platform with end-to-end encryption",
    tech: ["Python", "Encryption", "Security"],
    icon: Shield,
    color: "text-blue-400",
    code: `# Secure Voting System
class VotingSystem:
    def __init__(self):
        self.votes = {}
        self.encryption = True
    
    def cast_vote(self, voter_id, candidate):
        encrypted_vote = self.encrypt(candidate)
        self.votes[voter_id] = encrypted_vote
        return "Vote cast successfully!"`,
  },
  {
    id: 2,
    title: "Phishing Detection AI",
    description: "ML model to detect phishing attempts",
    tech: ["Python", "Machine Learning", "AI"],
    icon: Code,
    color: "text-purple-400",
    code: `# Phishing Detection Model
import tensorflow as tf
from sklearn.ensemble import RandomForestClassifier

class PhishingDetector:
    def __init__(self):
        self.model = RandomForestClassifier()
    
    def predict_phishing(self, url_features):
        prediction = self.model.predict([url_features])
        return "Phishing" if prediction[0] == 1 else "Safe"`,
  },
  {
    id: 3,
    title: "2D Passage Gateway",
    description: "Interactive 2D animation with engaging visuals",
    tech: ["Animation", "Interactive Design"],
    icon: Wand2,
    color: "text-green-400",
    code: `// 2D Gateway Animation
class Gateway {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.isOpen = false;
    }
    
    animate() {
        if (this.isOpen) {
            this.openGateway();
        }
    }
}`,
  },
  {
    id: 4,
    title: "Boxy Game",
    description: "2D game developed with C# and Unity",
    tech: ["C#", "Unity", "Game Development"],
    icon: Gamepad2,
    color: "text-yellow-400",
    code: `// Boxy Game Controller
using UnityEngine;

public class BoxController : MonoBehaviour {
    public float speed = 5f;
    
    void Update() {
        float horizontal = Input.GetAxis("Horizontal");
        transform.Translate(Vector2.right * horizontal * speed * Time.deltaTime);
    }
}`,
  },
]

export function CodeProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-400 font-mono mb-4">&gt; ls projects/</h2>
          <p className="text-gray-300">Innovative solutions built with passion and code</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/90 backdrop-blur-sm border border-green-500/30 rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300"
            >
              {/* Project Header */}
              <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <project.icon className={project.color} size={20} />
                  <span className="text-white font-mono text-sm">{project.title}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                  className="text-green-400 hover:text-green-300"
                >
                  <Play size={16} />
                </motion.button>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-mono border border-green-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Code Preview */}
                {selectedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-black border border-green-500/30 rounded p-4 mt-4"
                  >
                    <pre className="text-green-400 text-xs font-mono overflow-x-auto">{project.code}</pre>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
