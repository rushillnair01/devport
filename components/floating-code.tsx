"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const codeSnippets = [
  "function hello() {",
  "console.log('Dev');",
  "return 'Fuletra';",
  "}",
  "class Developer {",
  "constructor() {",
  "this.skills = [];",
  "}",
  "const projects = [];",
  "if (coding) {",
  "build();",
  "}",
]

export function FloatingCode() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  if (dimensions.width === 0 || dimensions.height === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {codeSnippets.map((code, index) => (
        <motion.div
          key={index}
          className="absolute text-green-500/20 text-sm font-mono"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {code}
        </motion.div>
      ))}
    </div>
  )
}
