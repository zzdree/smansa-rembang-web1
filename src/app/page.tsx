import Hero from "@/components/sections/Hero";
import Trusted from "@/components/sections/Trusted";
import About from "@/components/sections/About";
import Categories from "@/components/sections/Categories";
import Courses from "@/components/sections/Courses";
import Testimonials from "@/components/sections/Testimonials";
import Teachers from "@/components/sections/Teachers";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <About />
      <Categories />
      <Courses />
      <Testimonials />
      <Teachers />
      <FAQ />
      <Blog />
    </>
  );
}
