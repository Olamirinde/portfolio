const skillGroups = [
  {
    category: 'Languages',
    items: ['PHP', 'SQL'],
  },
  {
    category: 'Backend',
    items: ['Lumen', 'Custom PHP frameworks', 'REST APIs'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'Database design', 'Relationships'],
  },
  {
    category: 'Tools',
    items: ['Postman', 'Git', 'GitHub', 'Composer', 'Apache','Apache'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-2">
          Skills
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-10">
          What I work with
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-6"
            >
              <h4 className="text-emerald-400 font-semibold mb-4">
                {group.category}
              </h4>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-slate-300 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}