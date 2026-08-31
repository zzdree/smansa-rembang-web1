import Hero from "@/components/sections/Hero";
import Trusted from "@/components/sections/Trusted";
import StatsAchieve from "@/components/sections/StatsAchieve";
import About from "@/components/sections/About";
import Facilities from "@/components/sections/Facilities";
import Categories from "@/components/sections/Categories";
import Courses from "@/components/sections/Courses";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Teachers from "@/components/sections/Teachers";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <StatsAchieve />
      <About />
      <Facilities />
      <Categories />
      <Courses />
      <Gallery />
      <Testimonials />
      <Teachers />
      <FAQ />
      <Blog />
      <CTA />
    </>
  );
}
