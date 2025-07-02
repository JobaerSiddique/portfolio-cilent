
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"
import { Button } from "@/components/ui/button"
import { Code, Database, LayoutTemplate, Smartphone } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies like Next.js, React, and TypeScript.",
    icon: <Code className="w-8 h-8" />,
    features: [
      "Responsive Design",
      "Performance Optimization",
      "SEO Friendly",
      "Progressive Web Apps",
    ],
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that enhance user experience and engagement.",
    icon: <LayoutTemplate className="w-8 h-8" />,
    features: [
      "Wireframing & Prototyping",
      "User Research",
      "Interaction Design",
      "Design Systems",
    ],
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile applications for iOS and Android using React Native.",
    icon: <Smartphone className="w-8 h-8" />,
    features: [
      "iOS & Android Apps",
      "Offline Capabilities",
      "Push Notifications",
      "App Store Deployment",
    ],
  },
  {
    title: "Backend Development",
    description: "Robust server-side solutions with Node.js, Express, and MongoDB.",
    icon: <Database className="w-8 h-8" />,
    features: [
      "RESTful APIs",
      "Authentication Systems",
      "Database Design",
      "Cloud Integration",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">My Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <SlideUp key={index} delay={index * 0.1}>
              <div className="glass-card p-8 rounded-lg border h-full hover:border-primary transition-colors">
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="glass-card p-8 rounded-lg border mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Custom Solutions</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Have a unique project requirement? I can create custom solutions tailored
              specifically to your business needs.
            </p>
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}