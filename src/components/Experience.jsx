import { Helmet } from "react-helmet-async";

const Experience = () => {
  //Comment commented
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Fragron Infotech",
      year: "2019",
      desc: "Worked on real-world projects and collaborated with teams to build scalable web solutions.",
    },
    {
      role: "Freelancer",
      company: "Fiverr",
      year: "2025",
      desc: "Delivered client projects with a focus on performance, responsiveness, and clean UI.",
    },
    {
      role: "Frontend Developer",
      company: "Cognifyz Technologies",
      year: "2025 – 2026",
      desc: "Built modern interfaces using React and Tailwind with real-world project exposure.",
    },
    {
      role: "Full Stack Developer",
      company: "Codec Technologies",
      year: "2026",
      desc: "Worked on full-stack applications, handling both frontend and backend responsibilities.",
    },
  ];

  return (
    <Helmet>
    <section
      id="experience"
      className="py-20 px-6 max-w-6xl mx-auto text-white"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-14 text-center">
        Experience
      </h2>

      {/* Experience Grid */}
      <div className="grid gap-10 md:grid-cols-2">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-[#111] border border-gray-800 rounded-2xl p-6
            hover:border-purple-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]
            transition-all duration-300"
          >
            {/* Role */}
            <h3 className="text-xl font-semibold text-blue-400 mb-1">
              {exp.role}
            </h3>

            {/* Company + Year */}
            <p className="text-gray-400 text-sm mb-3">
              {exp.company} <span className="text-gray-500">• {exp.year}</span>
            </p>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              {exp.desc}
            </p>
          </div>
        ))}
      </div>
        
    </section>
    <link
          rel="canonical"
          href="https://nikhilrawat.in/experience"
        />
      </Helmet>
  );
};

export default Experience;
