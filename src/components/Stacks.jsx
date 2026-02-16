const stacks = [
  {
    name: "Frontend",
    icon: "🎨",
    items: ["React", "Tailwind", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Next.js"],
  },
  {
    name: "Backend",
    icon: "⚙️",
    items: ["Node.js", "Express", "MongoDB", "MySQL", "Supabase", "Prisma", "Drizzle"],
  },
  {
    name: "Tools",
    icon: "🛠️",
    items: ["Git", "GitHub", "Vercel", "VS Code", "Sublime"],
  },
];

const Stacks = () => {
  return (
    <section
      id="stacks"
      className="py-20 px-6 max-w-6xl mx-auto text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Essential Stacks
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {stacks.map((stack, i) => (
          <div
            key={i}
            className="bg-[#111] border border-gray-800 rounded-2xl p-6
            hover:border-purple-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
            transition-all"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-6 flex items-center gap-2">
              <span className="text-2xl">{stack.icon}</span>
              {stack.name}
            </h3>

            <div className="flex flex-wrap gap-3">
              {stack.items.map((item, j) => (
                <span
                  key={j}
                  className="text-sm px-3 py-1.5 rounded-full
                  bg-[#0d0d0d] border border-gray-700
                  hover:border-purple-500 hover:text-purple-400
                  transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stacks;
