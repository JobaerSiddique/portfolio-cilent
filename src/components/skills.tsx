"use client"
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"
import { 
  SiNextdotjs, SiReact, SiJavascript, SiTypescript, 
  SiTailwindcss, SiBootstrap, SiFirebase, SiAmazon, 
  SiHtml5, SiCss3, SiNodedotjs, SiExpress, 
  SiMongodb, SiPrisma, SiPostgresql 
} from "react-icons/si"

const skills = [
  { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" /> },
  { name: "React", icon: <SiReact className="w-8 h-8" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-8 h-8" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="w-8 h-8" /> },
  { name: "Firebase", icon: <SiFirebase className="w-8 h-8" /> },
  { name: "AWS", icon: <SiAmazon className="w-8 h-8" /> },
  { name: "HTML5", icon: <SiHtml5 className="w-8 h-8" /> },
  { name: "CSS3", icon: <SiCss3 className="w-8 h-8" /> },
  { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8" /> },
  { name: "Express", icon: <SiExpress className="w-8 h-8" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" /> },
  { name: "Prisma", icon: <SiPrisma className="w-8 h-8" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8" /> },
]

export function Skills() {
  // Wave animation controls
  const waveControls = useAnimation()
  const waveOffset = useMotionValue(0)
  const wavePath = useTransform(waveOffset, [0, 100], [
    "M0,40 C150,80 250,0 400,40 C550,80 650,0 800,40 L800,100 L0,100 Z",
    "M0,40 C150,0 250,80 400,40 C550,0 650,80 800,40 L800,100 L0,100 Z"
  ])

  // Border animation values
  const borderProgress = useMotionValue(0)
  const borderPath = useTransform(borderProgress, [0, 100], [
    "M0,0 L100,0 L100,100 L0,100 Z",
    "M0,0 L100,0 L100,100 L0,100 Z M0,0 L100,0 L100,100 L0,100 Z"
  ])

  // Start animations
  useEffect(() => {
    // Skill cards wave animation
    const cardsAnimation = async () => {
      while (true) {
        await waveControls.start({
          x: [0, -20, 0],
          transition: { 
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }
        })
      }
    }
    cardsAnimation()

    // Background wave animation
    const waveInterval = setInterval(() => {
      waveOffset.set(Math.random() * 100)
    }, 2000)

    // Card border animation
    const borderInterval = setInterval(() => {
      borderProgress.set(prev => (prev + 2) % 100)
    }, 50)

    return () => {
      clearInterval(waveInterval)
      clearInterval(borderInterval)
    }
  }, [])

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Animated wave background */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-32 -z-10 opacity-10"
        style={{
          background: "linear-gradient(to right, #3b82f6, #6366f1)"
        }}
      >
        <svg 
          viewBox="0 0 800 100" 
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d={wavePath}
            fill="currentColor"
            className="text-blue-500"
          />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-8"
        >
          My Skills
        </motion.h2>
        
        <div className="relative overflow-hidden py-4">
          <motion.div 
            className="flex gap-6"
            animate={waveControls}
          >
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                viewport={{ once: true }}
                className="flex-shrink-0 relative"
              >
                {/* Animated border */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <motion.rect
                    x="0" 
                    y="0" 
                    width="100%" 
                    height="100%"
                    rx="12"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    stroke="url(#skillBorderGradient)"
                    fill="transparent"
                    style={{
                      pathLength: borderProgress,
                      pathSpacing: 1,
                      pathOffset: 0
                    }}
                  />
                  <defs>
                    <linearGradient id="skillBorderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </svg>
                
                <div className="glass-card p-6 rounded-lg backdrop-blur-sm flex flex-col items-center justify-center gap-2 w-32 h-32 hover:scale-105 transition-transform">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}