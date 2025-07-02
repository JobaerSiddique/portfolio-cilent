"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Github } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

const projects = [
  {
    title: "School Management System",
    description: "Fully Dynamic and well Management with Responsive Web Application",
    tags: ["React js", "Typescript", "Tailwind CSS", "Shadcn UI", "Node js", "express Js", "MongoDB"],
    image: "https://res.cloudinary.com/dut0oeco5/image/upload/v1751396202/guguzr0jjttzngmunj3x.png",
    link: "https://blue-bird-school.netlify.app/",
    github: "https://github.com/JobaerSiddique/blue-bird-client",
  },
  {
    title: "Car Rentals House Management System",
    description: "Fully Dynamic and well Management with Responsive Web Application",
    tags: ["React js", "Typescript", "Tailwind CSS", "Shadcn UI", "Node js", "express Js", "MongoDB"],
    image: "https://res.cloudinary.com/dut0oeco5/image/upload/v1751466772/gpidq05wriq7verc9gtl.png",
    link: "dapper-nasturtium-bce1b7.netlify.app",
    github: "https://github.com/JobaerSiddique/car-rentals-client-assign-5",
  },
  {
    title: "Shop Management system",
    description: "Fully Dynamic and well Management with Responsive Web Application",
    tags: ["React js", "Typescript", "Tailwind CSS", "Shadcn UI", "Node js", "express Js", "MongoDB"],
    image: "https://res.cloudinary.com/dut0oeco5/image/upload/v1751466985/htl84uatnrnvkluiqr9x.png",
    link: "https://camper-shop-44.netlify.app/",
    github: "https://github.com/JobaerSiddique/camper-shop-assign-4-client",
  },
  // ... other projects
]

export function Projects() {
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
          <h2 className="text-3xl font-bold mb-4 g-gradient-to-tr from-primary via-purple-500 to-pink-500 blur-xl opacity-20">Featured Projects</h2>
          <p className="text-muted-foreground">
            Here are some of my recent projects showcasing my skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-xl overflow-hidden"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              {/* Project card */}
              <div className="glass-card bg-background rounded-xl border border-muted group-hover:border-transparent transition-all duration-300 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.05 }}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Buttons with animated hover effects */}
                  <div className="flex gap-2 mt-auto">
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button variant="outline" size="sm" asChild className="w-full">
                        <Link href={project.link} target="_blank" className="flex items-center">
                          Live Demo <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button variant="outline" size="sm" asChild className="w-full">
                        <Link href={project.github} target="_blank" className="flex items-center justify-center">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}