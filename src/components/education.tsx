"use client"
import { motion } from "framer-motion"
import { GraduationCap, School } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Science",
    institution: "Daffodil Institute of IT",
    year: "2018-2021",
    description: "Specialized in Web Technologies and Software Computing",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    degree: "Higher Secondary (School) Certificate",
    institution: "Amin Model Town School and College",
    year: "2014-2016",
    description: "As Science ",
    icon: <School className="w-5 h-5" />
  },
   {
    degree: "Secondary School Certificate (SSC)",
    institution: "Savar Cantonment Board High Schhol",
    year: "2012 - 2014",
    description: "As Science",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    degree: "Junior School Certificate",
    institution: "Savar Cantonment Board High Schhol",
    year: "2011",
    description: "Junior Exam",
    icon: <School className="w-5 h-5" />
  }
]

export function Education() {
  return (
    <section className="py-12 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground">
            My academic journey and qualifications that shaped my expertise.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute left-1/2 h-full w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block"
          />

          <div className="space-y-8 md:space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full bg-primary shadow-lg">
                  <div className="h-3 w-3 rounded-full bg-background" />
                </div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 rounded-lg border border-border/50 relative overflow-hidden"
                  >
                    {/* Decorative element */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-20" />
                    
                    <div className="flex items-start gap-4 relative z-10">
                      <div className="p-3 bg-primary/10 rounded-full text-primary">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{item.degree}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <span>{item.institution}</span>
                          <span>•</span>
                          <span className="text-sm text-primary">{item.year}</span>
                        </div>
                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}