"use client";
import { motion, useAnimation } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const controls = useAnimation();

  const titles = ["Web Developer", "Full Stack Web Developer", "MERN Stack Web Developer"];

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        for (let i = 0; i < titles.length; i++) {
          // Type out the current title
          await controls.start({
            width: "100%",
            transition: { duration: 1, ease: "easeInOut" },
          });

          // Pause
          await new Promise((resolve) => setTimeout(resolve, 2000));

          // Delete current title
          await controls.start({
            width: "0%",
            transition: { duration: 0.5, ease: "easeInOut" },
          });

          // Move to next title
          setCurrentTitle((prev) => (prev + 1) % titles.length);

          // Brief pause before typing next
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }
    };
    sequence();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
            <div className="text-2xl md:text-4xl my-8 font-bold">HI ! My Name Munshi Jobaer Siddique</div>
          <div className="text-xl md:text-4xl font-bold mb-6 h-20 md:h-24 flex justify-center md:justify-start items-center">
             
            <motion.div
              className="relative inline-block text-left overflow-hidden"
              style={{ width: "0%" }}
              animate={controls}
            >
              <span className="inline-block">I am {titles[currentTitle]}</span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  repeatType: "reverse",
                }}
                className="ml-1 inline-block h-8 w-1 bg-primary align-middle"
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            I build exceptional digital experiences with modern technologies. Specializing in
            React, Next.js, Node.js, and MongoDB.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <Button asChild>
              <Link href="/contact">
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#">
                Download CV <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 md:mt-0 relative flex justify-center md:justify-end"
        >
          <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-xl"></div>
          <div className="relative rounded-2xl border bg-card overflow-hidden max-w-sm md:max-w-full">
            <img
              src="/Images/profile.jpg.JPG"
              alt="Project showcase"
              className="w-full h-auto"
              width={800}
              height={450}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}