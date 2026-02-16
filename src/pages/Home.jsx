import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Stacks from "../components/Stacks";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen relative overflow-hidden">
      {/* dotted background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff11_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      <Hero />
      <Experience />
      <Skills />
      <Stacks />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
