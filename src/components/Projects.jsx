const projects = [
    {
    title: "Job Portal",
    desc: "Job Portal – Full Stack Web Application Built a modern and scalable Job Portal using Next.js, TypeScript, Shadcn UI, MySQL, and Drizzle ORM. The platform enables job seekers to search and apply for jobs while allowing employers to post and manage job listings through a secure and user-friendly interface.",
    tech: ["Nextjs","Typescript","Tailwind CSS", "Shadcn UI", "Next.js Server Actions / API Routes", , " Authentication & Authorization", "Tiptap Text Editor","React Hook Form","Zod Validation"],
    github: "https://github.com/Nikhil2878/jportal",
    live: "https://yejobs.vercel.app/",
  },
    {
    title: "UrlSimple",
    desc: "Full-Stack URL Shortener using Express.js & MySQL I recently completed a URL Shortener project where I focused on writing clean, secure, and scalable backend code while following real-world architecture patterns.",
    tech: ["Nodejs", "Expressjs", "Zod Validation","DrizzleORM","oAuth", "HTML", "CSS", "MVC Architecture", "JavaScript","JWT Authentication","Argon2",],
    github: "https://github.com/Nikhil2878/urleasy",
    live: "https://urlsimple.vercel.app/",
  },
  {
    title: "MoviePrapti",
    desc: "A movie discovery app using React, OMDB API and TMDB API with search, filters, and recommendation features.",
    tech: ["Reactjs","React Router Dom", "Tailwind CSS", "APIs","OMDB","TMDB","JavaScript"],
    github: "https://github.com/Nikhil2878/MovieRecommend",
    live: "https://movieprapti.netlify.app",
  },
{
    title: "GymWeb",
    desc: "This is description for GymWeb",
    tech: ["Reactjs", "Tailwind CSS","Framer Motion","React Router Dom"],
    github: "https://github.com/Nikhil2878/gymsite",
    live: "https://bahubalinext.netlify.app/",
  },

   {
    title: "Task Tracker",
    desc: "full-stack Task Tracker built on the MERN stack I wanted a hands-on project to demonstrate end-to-end full-stack skills — not just CRUD, but the details that separate a demo from something production-ready",
    tech: ["Reactjs", "Tailwind CSS", "API","Mongoose(ODM)","Nodejs","JavaScript","Expressjs",],
    github: "https://github.com/Nikhil2878/task_tracker",
    live: "https://tasktrackerisdone.vercel.app/",
  },

];

import { ExternalLink} from "lucide-react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 max-w-6xl mx-auto text-white"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Work Projects
      </h2>

      {/* Project Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="group bg-[#111] border border-gray-800 rounded-2xl p-6
            hover:border-purple-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]
            transition-all duration-300"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              {proj.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {proj.desc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {proj.tech.map((tech, j) => (
                <span
                  key={j}
                  className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <a
  href={proj.github}
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm px-4 py-2 rounded-full
  border border-gray-700 hover:border-purple-500
  hover:text-purple-400 transition-all"
>
  GitHub
</a>


              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-full
                bg-gradient-to-r from-blue-600 to-purple-600
                hover:scale-105 transition-all"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
