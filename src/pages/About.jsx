import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <Helmet>
    <section
      className="py-20 px-6 max-w-6xl mx-auto text-gray-300"
      id="about"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          About Me
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400">
          I’m a passionate Full Stack Developer who enjoys building scalable,
          user-focused, and modern web applications.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#111] border border-gray-800 rounded-2xl p-6
          hover:border-purple-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
          transition-all"
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            Who I Am
          </h3>
          <p className="text-sm leading-relaxed">
            I am a Full Stack Developer with experience in building responsive
            frontends and powerful backends. I enjoy transforming ideas into
            real-world digital products using modern technologies.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#111] border border-gray-800 rounded-2xl p-6
          hover:border-purple-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
          transition-all"
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            What I Do
          </h3>
          <p className="text-sm leading-relaxed">
            I work with technologies like React, Node.js, Express, MongoDB,
            MySQL, and Tailwind to build fast, secure, and scalable web
            applications with clean UI and smooth user experience.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#111] border border-gray-800 rounded-2xl p-6
          hover:border-purple-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
          transition-all"
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            My Approach
          </h3>
          <p className="text-sm leading-relaxed">
            I focus on writing clean, maintainable code and delivering solutions
            that solve real problems. I enjoy learning new tools, improving my
            skills, and building products that make an impact.
          </p>
        </motion.div>
      </div>
    </section>
      <link
          rel="canonical"
          href="https://nikhilrawat.in/about"
        />
    </Helmet>
  );
};

export default About;
