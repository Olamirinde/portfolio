const experience = [
  {
    period: 'Jan 2026 — Sep 2026',
    title: 'Backend Engineer Intern',
    place: 'NQLB',
    description:
      'Worked on PHP backend projects, applying OOP and MVC architecture. Built simple REST APIs and worked with the Lumen framework.',
  },
  {
    period: '2025',
    title: 'Started learning PHP',
    place: 'Self-taught',
    description:
      'Began learning backend development with plain PHP, focusing on understanding fundamentals before relying on frameworks.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-2">
          Experience
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-10">
          Where I've been
        </h3>

        <div className="space-y-8">
          {experience.map((item) => (
            <div
              key={item.title}
              className="grid sm:grid-cols-4 gap-4 border-l-2 border-slate-800 pl-6 relative"
            >
              <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-emerald-400"></span>

              <p className="text-sm text-slate-500 sm:col-span-1">
                {item.period}
              </p>

              <div className="sm:col-span-3">
                <h4 className="text-lg font-semibold text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-emerald-400 mb-2">{item.place}</p>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}