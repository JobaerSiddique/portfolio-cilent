"use client"
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useState } from "react"
import { 
  SiNextdotjs, SiReact, SiJavascript, SiTypescript, 
  SiTailwindcss, SiBootstrap, SiFirebase, SiAmazon, 
  SiHtml5, SiCss3, SiNodedotjs, SiExpress, 
  SiMongodb, SiPrisma, SiPostgresql 
} from "react-icons/si"

const skills = [
  { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "React", icon: <SiReact className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "Firebase", icon: <SiFirebase className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "AWS", icon: <SiAmazon className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "HTML5", icon: <SiHtml5 className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "CSS3", icon: <SiCss3 className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "Node.js", icon: <SiNodedotjs className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "Express", icon: <SiExpress className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "Prisma", icon: <SiPrisma className="w-6 h-6 md:w-8 md:h-8" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 md:w-8 md:h-8" /> },
]

export function Skills() {
  const [isMobile, setIsMobile] = useState(false)
  const waveControls = useAnimation()
  const waveOffset = useMotionValue(0)
  const wavePath = useTransform(waveOffset, [0, 100], [
    "M0,40 C150,80 250,0 400,40 C550,80 650,0 800,40 L800,100 L0,100 Z",
    "M0,40 C150,0 250,80 400,40 C550,0 650,80 800,40 L800,100 L0,100 Z"
  ])

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const cardsAnimation = async () => {
      while (true) {
        await waveControls.start({
          x: [0, isMobile ? -100 : -20, 0],
          transition: { 
            duration: isMobile ? 3 : 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }
        })
      }
    }
    cardsAnimation()

    const waveInterval = setInterval(() => {
      waveOffset.set(Math.random() * 100)
    }, 2000)

    return () => clearInterval(waveInterval)
  }, [isMobile])

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Mobile: Single column layout */}
      {isMobile ? (
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-8"
          >
            My Skills
          </motion.h2>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
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
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill.icon}
                </motion.div>
                <span className="text-xs sm:text-sm text-center mt-2">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Desktop: Animated horizontal scroll */}
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
                    className="flex-shrink-0 relative w-24 h-24 md:w-32 md:h-32"
                  >
                    <div className="glass-card p-4 md:p-6 rounded-lg backdrop-blur-sm flex flex-col items-center justify-center gap-2 w-full h-full hover:scale-105 transition-transform">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <span className="text-xs md:text-sm font-medium text-center">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}