
import Link from "next/link"
import { CalendarDays, Clock, Tag } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { SlideUp } from "@/components/animations/slide-up"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 14",
    excerpt: "Learn how to build modern web applications with Next.js 14 and its new features.",
    date: "2023-11-15",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"],
    slug: "getting-started-with-nextjs-14",
  },
  {
    id: 2,
    title: "Mastering TypeScript for React",
    excerpt: "A comprehensive guide to using TypeScript effectively in React applications.",
    date: "2023-10-28",
    readTime: "8 min read",
    tags: ["TypeScript", "React"],
    slug: "mastering-typescript-for-react",
  },
  {
    id: 3,
    title: "Building Scalable APIs with Node.js",
    excerpt: "Best practices for creating robust and scalable APIs using Node.js and Express.",
    date: "2023-09-12",
    readTime: "10 min read",
    tags: ["Node.js", "Express", "Backend"],
    slug: "building-scalable-apis-with-nodejs",
  },
  {
    id: 4,
    title: "Building Scalable APIs with Node.js",
    excerpt: "Best practices for creating robust and scalable APIs using Node.js and Express.",
    date: "2023-09-12",
    readTime: "10 min read",
    tags: ["Node.js", "Express", "Backend"],
    slug: "building-scalable-apis-with-nodejs",
  },
  {
    id: 5,
    title: "Building Scalable APIs with Node.js",
    excerpt: "Best practices for creating robust and scalable APIs using Node.js and Express.",
    date: "2023-09-12",
    readTime: "10 min read",
    tags: ["Node.js", "Express", "Backend"],
    slug: "building-scalable-apis-with-nodejs",
  },
  {
    id: 6,
    title: "Building Scalable APIs with Node.js",
    excerpt: "Best practices for creating robust and scalable APIs using Node.js and Express.",
    date: "2023-09-12",
    readTime: "10 min read",
    tags: ["Node.js", "Express", "Backend"],
    slug: "building-scalable-apis-with-nodejs",
  },
]

export default function BlogPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Articles and tutorials about web development, programming, and more
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <SlideUp key={post.id} delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`}>
                <article className="group glass-card rounded-lg overflow-hidden border hover:border-primary transition-colors h-full flex flex-col">
                  <div className="p-6 flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full flex items-center gap-1"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-auto">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </SlideUp>
          ))}
        </div>
      </div>
    </div>
  )
}