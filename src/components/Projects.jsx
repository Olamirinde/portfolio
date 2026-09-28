const projects = [
  {
    title: 'Inventory Management API',
    description:
      'A backend API for managing inventory: products, stock levels, and roles, built on a custom PHP framework from scratch.',
    stack: ['PHP', 'MySQL', 'Custom Framework'],
    github: 'https://github.com/Olamirinde/inventory-service',
    live: '',
  },
  {
    title: 'Authors Management System',
    description:
      'Built an API service for managing Authors by performing CRUD operations, built with Lumen.',
    stack: ['Lumen', 'PHP', 'MySQL'],
    github: 'https://github.com/Olamirinde/Authors-app',
    live: '',
  },
  {
    title: 'Ecommerce Backend',
    description:
      'A backend for an ecommerce platform covering products, orders, and customers, built with Lumen.',
    stack: ['Lumen', 'PHP', 'MySQL'],
    github: 'https://github.com/Olamirinde/ecommerce-app',
    live: '',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-2">
          Projects
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-10">
          Things I've built
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-emerald-400/50 transition-colors"
            >
              <h4 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h4>
              <p className="text-slate-400 text-sm flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4 mb-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-emerald-400 bg-emerald-400/10 rounded-full px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm">
                
                <a  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  GitHub →
                </a>
                {project.live && (
                  
                 <a   href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    Live demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}