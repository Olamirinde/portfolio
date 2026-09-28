export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="inline-flex items-center gap-2 text-sm text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-4 py-1 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Open to opportunities
        </p>

        <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
          Hi, I'm Adekunle Amos.
          <br />
          <span className="text-emerald-400">Backend Developer.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-400">
          I design and build clean, reliable APIs and server-side systems.
          I care about solid fundamentals, readable code, and software that
          works well under the hood.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          
           <a href="#projects"
            className="px-6 py-3 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-colors"
          >
            View my work
          </a>
          
           <a href="#contact"
            className="px-6 py-3 rounded-lg border border-slate-700 text-slate-200 hover:border-emerald-400 hover:text-emerald-400 transition-colors"
          >
            Get in touch
          </a>
  
        < a href="/Adekunle Amos Olarinde CV.pdf"
          download
            className="px-6 py-3 rounded-lg border border-slate-700 text-slate-200 hover:border-emerald-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
        >
        Download CV
        <span aria-hidden="true">↓</span>
        </a>
        </div>

        <div className="mt-10 flex gap-6 text-slate-400">
          
          <a  href="https://github.com/Olamirinde"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            GitHub
          </a>
          
           <a href="https://linkedin.com/in/adekunle-amos-b4b4491a5"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}