"use client"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { toast } from "sonner"

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

type NewsletterFormValues = z.infer<typeof newsletterSchema>

export function Newsletter() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  })

  const onSubmit = async (data: NewsletterFormValues) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success("Thank you for subscribing!")
      reset()
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    }
  }

  return (
    <section className="py-12 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to my newsletter for the latest updates on my projects and articles
          </p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1 relative">
              <Input
                type="email"
                placeholder="Your email address"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500 text-left">
                  {errors.email.message}
                </p>
              )}
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}