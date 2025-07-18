"use client"
import { motion } from "framer-motion"
import { ReactNode } from "react"

export function SlideUp({
  children,
  delay = 0,
  duration = 0.5,
}: {
  children: ReactNode
  delay?: number
  duration?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}