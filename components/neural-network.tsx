"use client"

import { useEffect, useRef } from "react"

interface Node {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
}

export function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    if (typeof window === "undefined") return
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize 60 nodes
    const nodes: Node[] = []
    for (let i = 0; i < 60; i++) {
      nodes.push({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: [],
      })
    }

    // Create connections between nearby nodes
    nodes.forEach((node, i) => {
      nodes.forEach((otherNode, j) => {
        if (i !== j) {
          const distance = Math.sqrt(Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2))
          if (distance < 150 && node.connections.length < 3) {
            node.connections.push(j)
          }
        }
      })
    })

    nodesRef.current = nodes

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update node positions
      nodesRef.current.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1

        // Keep nodes in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))
      })

      // Draw connections
      ctx.strokeStyle = "rgba(147, 51, 234, 0.2)"
      ctx.lineWidth = 1
      nodesRef.current.forEach((node) => {
        node.connections.forEach((connectionId) => {
          const connectedNode = nodesRef.current[connectionId]
          if (connectedNode) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(connectedNode.x, connectedNode.y)
            ctx.stroke()
          }
        })
      })

      // Draw nodes
      nodesRef.current.forEach((node) => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(147, 51, 234, 0.6)"
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />
}
