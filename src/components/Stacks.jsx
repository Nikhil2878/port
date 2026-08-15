

const stacks = [
  {
    name: "Frontend",
    icon: "🎨",
    items: ["React.js", "Next.js", "Tailwind Css", "JavaScript","Typescript", "HTML5", "CSS3","Shadcn UI","Framer Motion","Bootstrap"],
  },  
  {
    name: "Backend",
    icon: "⚙️",
    items: ["Node.js", "Express.js", "Firebase","Supabase", ],
  },
  {
    name: "Database",
    icon: "⚙️",
    items: ["MongoDB", "MySQL", "Mongoose(ODM)","Drizzle(ORM)","Prisma(ORM)","Authentication(JWT)","Concepts : DSA","DBMS","REST APIs","Cloud","CI/CD"],
  },
  {
    name: "Tools & Platforms",
    icon: "🛠️",
    items: ["Git", "Github", "Docker","AWS","Vercel","Netlify","Render","Railway","Postman","Cloudinary","Uploadthings", ],
  },
  {
    name: "Languages",
    icon: "🛠️",
    items: ["Javascript", "Typescript", "Python","Java","C"],
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
