type Project = {
  title: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with Next.js and Tailwind CSS.",
    link: "#",
  },
  {
    title: "Task Manager App",
    description:
      "A full-stack task manager with authentication and CRUD features.",
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "A markdown-powered blog with dynamic routing using Next.js.",
    link: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-base-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-8">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" rounded-lg bg-base-200 shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl  font-bold text-secondary ">
                {project.title}
              </h3>
              <p className="text-base-400 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 link link-accent "
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
