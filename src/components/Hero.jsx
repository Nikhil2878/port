import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroImage from "../assets/photo.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nikhil Rawat",
    url: "https://nikhilrawat.in/",
    jobTitle: "Full Stack Developer",
    description:
      "Nikhil Rawat is a Full Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB and MySQL.",
    knowsAbout: [
      "React",
      "Next.js",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
      "MySQL",
      "Tailwind CSS",
      "Web Development",
    ],
    sameAs: [
      "https://github.com/Nikhil2878",
      "https://in.linkedin.com/in/nikhil-rawat-47232a350",
    ],
  };

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Nikhil Rawat | Full Stack Developer</title>

        <meta
          name="description"
          content="Nikhil Rawat is a Full Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB and MySQL."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://nikhilrawat.in/"
        />

        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>

      {/* Page */}
      <section className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden flex items-center">

        {/* Dotted Background */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.06)_1px,_transparent_1px)]
          [background-size:22px_22px]"
        />

        {/* Glow Effects */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 blur-[150px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-[150px] rounded-full" />

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Hi, I'm Nikhil Rawat.
              <br />

              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h1>

            <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
              I build modern, responsive and scalable web applications using
              React, Next.js, Node.js, Express, MongoDB and MySQL.
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex justify-center md:justify-start"
            >
              <Link to="/projects">
                <button
                  className="group flex items-center gap-2 px-7 py-3 rounded-full font-medium
                  bg-gradient-to-r from-blue-600 to-purple-600
                  hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]
                  transition-all duration-300"
                >
                  Explore Projects

                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <img
              src={HeroImage}
              alt="Nikhil Rawat - Full Stack Developer"
              loading="eager"
              className="w-[260px] sm:w-[320px] md:w-[420px]
              drop-shadow-[0_0_50px_rgba(139,92,246,0.45)]"
            />
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Home;