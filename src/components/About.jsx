export default function About() {
  return (
    <section id="about" className="py-24 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-2">
          About Me
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-10">
          A bit about my journey
        </h3>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-slate-400 text-lg leading-relaxed">
            <p>
              I'm a Computer Science graduate and backend software developer who enjoys building things
              from scratch to really understand how they work under the hood.
              I've spent time writing PHP frameworks by hand, designing
              database schemas, and building CRUD APIs from the ground up
              rather than only relying on off-the-shelf tools.
            </p>
            <p>
              I work primarily with PHP and MySQL and have experience working with OOP,
               MVC architecture, REST APIs and lumen. I care about
              lean code, clear structure, and testing things thoroughly
              before moving forward.
            </p>
            <p>
              Right now I'm focused on deepening my backend engineering
              skills and building a portfolio of projects that show that
              work clearly.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <p className="text-sm text-slate-500 mb-1">Based in</p>
              <p className="text-slate-200 font-medium">Nigeria</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <p className="text-sm text-slate-500 mb-1">Focus</p>
              <p className="text-slate-200 font-medium">Backend Engineering</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <p className="text-sm text-slate-500 mb-1">Currently</p>
              <p className="text-slate-200 font-medium">Open to opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}