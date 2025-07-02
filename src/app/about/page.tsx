
import Image from "next/image"
import { Briefcase, Code, GraduationCap } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"

const aboutData = {
  bio: "I'm a passionate Full Stack Developer with 5+ years of experience building web applications. I specialize in modern JavaScript frameworks and have a strong background in both frontend and backend development.",
  stats: [
    { value: "15+", label: "Projects Completed" },
    { value: "3+", label: "Years Experience" },
    { value: "100%", label: "Client Satisfaction" },
  ],
  experience: [
    {
      role: " Full Stack Developer (Backend Team Leader",
      company: "Radyan IT",
      period: "2025-2025 ",
      description: "Leading a team of developers to build scalable web applications.",
      icon: <Briefcase className="w-5 h-5" />,
    },
  
  ],
  education: [
    {
      degree: "Bachelor of Science",
      institution: "DIIT",
      period: "2018 - 2021",
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ],
}

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my journey, skills, and experience
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <SlideUp>
            <div className="relative rounded-2xl overflow-hidden border aspect-square max-w-md mx-auto">
              <Image
                src="/Images/profile.png.png"
                alt="About me"
                fill
                className="object-cover"
              />
            </div>
          </SlideUp>

          <div>
            <FadeIn delay={0.2}>
              <h2 className="text-3xl font-bold mb-4 text-orange-400">Who am I?</h2>
              <p className="text-muted-foreground mb-6 text-justify">{aboutData.bio}</p>
            </FadeIn>

            <SlideUp delay={0.4}>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {aboutData.stats.map((stat, index) => (
                  <div key={index} className="glass-card p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </SlideUp>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <FadeIn delay={0.6}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6" />
                Experience
              </h2>
            </FadeIn>

            <div className="space-y-6">
              {aboutData.experience.map((exp, index) => (
                <SlideUp key={index} delay={0.6 + index * 0.1}>
                  <div className="glass-card p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-full text-primary">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{exp.role}</h3>
                        <p className="text-muted-foreground">{exp.company} • {exp.period}</p>
                        <p className="mt-2">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>
          </div>

          <div>
            <FadeIn delay={0.8}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6" />
                Education
              </h2>
            </FadeIn>

            <div className="space-y-6">
              {aboutData.education.map((edu, index) => (
                <SlideUp key={index} delay={0.8 + index * 0.1}>
                  <div className="glass-card p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-full text-primary">
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.institution} • {edu.period}</p>
                      </div>
                    </div>
                  </div>
                </SlideUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}