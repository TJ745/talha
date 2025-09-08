import Footer from "@/components/Footer";
import About from "./about/page";
import Contact from "./contact/page";
import Hero from "./hero/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
