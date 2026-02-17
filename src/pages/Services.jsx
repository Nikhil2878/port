import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Full Stack Development",
      desc: "Modern, scalable, and high-performance web applications using React, Node.js, MongoDB, and MySQL.",
    },
    {
      title: "UI / UX Design",
      desc: "Beautiful, intuitive, and user-focused interfaces designed for better engagement and conversion.",
    },
    {
      title: "API Development",
      desc: "Secure and optimized REST APIs with authentication, database integration, and scalable architecture.",
    },
  ];

  return (
    <section
      className="py-24 px-6 max-w-6xl mx-auto text-white"
      id="services"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Services
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I provide high-quality development solutions tailored to your
          business needs.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((srv, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-[#111] p-8 rounded-2xl border border-gray-800
            hover:border-purple-500
            hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]
            transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4 group-hover:text-purple-400 transition">
              {srv.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              {srv.desc}
            </p>

            {/* Bottom Accent Line */}
            <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
