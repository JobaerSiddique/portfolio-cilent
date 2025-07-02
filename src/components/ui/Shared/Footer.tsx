import { FadeIn } from "@/components/animations/fade-in"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"


export function Footer() {
  const currentYear = new Date().getFullYear()
  const socialLinks = [
    { href: "https://github.com", icon: <FaGithub className="w-5 h-5" /> },
    { href: "https://linkedin.com", icon: <FaLinkedin className="w-5 h-5" /> },
    { href: "https://twitter.com", icon: <FaTwitter className="w-5 h-5" /> },
    { href: "https://youtube.com", icon: <FaYoutube className="w-5 h-5" /> },
  ]

  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <Link href="/" className="text-xl font-bold">
                DevPortfolio
              </Link>
              <p className="text-sm text-muted-foreground">
                © {currentYear} All rights reserved.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Crafted with Next.js and Tailwind CSS
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}