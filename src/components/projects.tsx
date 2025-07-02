"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Github } from "lucide-react"
import { Button } from "./ui/button"
import { AllProjects } from "@/service/projects/project"

// const projects = [
//   {
//     title: "E-commerce Platform",
//     description: "Full-featured online store with product management and checkout",
//     tags: ["Next.js", "Node.js", "MongoDB"],
//     link: "#",
//     github: "#",
//   },
//   {
//     title: "Task Management App",
//     description: "Productivity app with drag-and-drop functionality",
//     tags: ["React", "Firebase", "Tailwind CSS"],
//     link: "#",
//     github: "#",
//   },
//   {
//     title: "Social Media Dashboard",
//     description: "Analytics dashboard for tracking engagement metrics",
//     tags: ["TypeScript", "Express", "PostgreSQL"],
//     link: "#",
//     github: "#",
//   },
// ]

export async function Projects() {
    const projectInfo = await AllProjects()
  return (
    <section className="py-12 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            Here are some of my recent projects showcasing my skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectInfo.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-lg overflow-hidden border hover:border-primary transition-colors"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.link} target="_blank">
                      Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={project.github} target="_blank">
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}