import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroImage from "../assets/movies.png"; // optional hero image if you have one

const Home = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white flex items-center justify-center">
      {/* Dotted background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] 
        [background-size:20px_20px] z-0"
      ></div>

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Build. Innovate. <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Transform Ideas into Reality
            </span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            I craft modern, responsive, and high-performance digital experiences.
            Let's collaborate to turn your creative vision into something
            impactful and professional.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10"
          >
            <button className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all">
              Explore Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mt-16 md:mt-0"
        >
          <img
            src={HeroImage}
            alt="Developer Illustration"
            className="w-[350px] md:w-[450px] drop-shadow-[0_0_40px_rgba(139,92,246,0.4)]"
          />
        </motion.div>
      </div>

      {/* Subtle glow effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-[140px] rounded-full"></div>
    </section>
  );
};

export default Home;
