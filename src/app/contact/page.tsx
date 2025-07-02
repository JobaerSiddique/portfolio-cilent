"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Mail, MapPin, Phone } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    value: "jobaersiddique28me@gmail.com",
    href: "mailto:jobaersiddique28me@gmail.com",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Phone",
    value: "+8801640-576257",
    href: "tel:+8801640576257", // Fixed phone href
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Location",
    value: "Savar, Ashulia, Dhaka",
    href: "#",
  },
]

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = (data: ContactFormValues) => {
    const { name, email, subject, message } = data
    
    // Create mailto link with form data
    const mailtoLink = `mailto:jobaersiddique28me@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`
    
    // Open user's default email client
    window.open(mailtoLink, '_blank')
    
    // Show success message
    toast.success("Opening your email client...")
    reset()
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Get in touch!
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <SlideUp>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Let's talk</h2>
              <p className="text-muted-foreground">
                Fill out the form and I'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    {...register("name")}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <Input
                    placeholder="Your Email"
                    {...register("email")}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    {...register("subject")}
                    className={errors.subject ? "border-red-500" : ""}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                  )}
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    {...register("message")}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Processing..." : "Open Email to Send"}
                </Button>
              </form>
            </div>
          </SlideUp>

          <div className="space-y-8">
            <SlideUp delay={0.2}>
              <div className="glass-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-full text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{info.title}</h3>
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SlideUp>

            <SlideUp delay={0.4}>
              <div className="glass-card p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Availability</h2>
                <p className="text-muted-foreground mb-4">
                  I'm currently available for freelance work and full-time positions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Saturday to Thursday</span>
                    <span className="text-muted-foreground">9:00 AM - 8:00 PM (BDT Time)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Friday</span>
                    <span className="text-muted-foreground">By appointment</span>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
    </div>
  )
}