import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "Tailwind",
  "MongoDB",
  "Git",
  "GitHub",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-20 bg-[#0d0d0d] overflow-hidden text-white"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14">
        Skills
      </h2>

      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10" />

      {/* Row 1 → */}
      <div className="overflow-hidden mb-8">
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <SkillBadge key={`row1-${i}`} skill={skill} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 ← */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-10 whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 26,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].reverse().map((skill, i) => (
            <SkillBadge key={`row2-${i}`} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SkillBadge = ({ skill }) => (
  <div
    className="px-4 py-2 sm:px-6 sm:py-3
    text-sm sm:text-base md:text-lg
    uppercase tracking-wider font-semibold
    rounded-full bg-[#111]
    text-gray-300 border border-gray-700
    hover:border-purple-500 hover:text-white
    hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]
    transition-all duration-300"
  >
    {skill}
  </div>
);

export default Skills;
