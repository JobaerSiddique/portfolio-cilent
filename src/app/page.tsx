import { Education } from "@/components/education";
import { HeroSection } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Testimonials } from "@/components/testimonials";


export default function Home() {
  return (
   <>
    <HeroSection/>
    <Skills/>
    <Education/>
    <Projects/>
    <Testimonials/>
    <Newsletter/>
   </>
  );
}
