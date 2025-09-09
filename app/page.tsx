import Hero from "./hero/page";
import About from "./about/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Footer from "@/components/Footer";
import ScrollReset from "@/components/ScrollReset";

export default function Home() {
  return (
    <>
      <ScrollReset />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
