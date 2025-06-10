"use client"
import { MatrixBackground } from "@/components/matrix-background"
import { TerminalHeader } from "@/components/terminal-header"
import { CodeHeroSection } from "@/components/code-hero-section"
import { TerminalAbout } from "@/components/terminal-about"
import { CodeProjectsGrid } from "@/components/code-projects-grid"
import { SkillsTerminal } from "@/components/skills-terminal"
import { ContactTerminal } from "@/components/contact-terminal"
import { FloatingCode } from "@/components/floating-code"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden font-mono">
      <MatrixBackground />
      <FloatingCode />

      <div className="relative z-10">
        <TerminalHeader />
        <CodeHeroSection />
        <TerminalAbout />
        <CodeProjectsGrid />
        <SkillsTerminal />
        <ContactTerminal />
      </div>
    </div>
  )
}
