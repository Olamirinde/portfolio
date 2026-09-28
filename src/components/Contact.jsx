const contactLinks = [
  {
    label: 'Email',
    value: 'adekunleamosolarinde@gmail.com',
    href: 'mailto:adekunleamosolarinde@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/Olamirinde',
    href: 'https://github.com/Olamirinde',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/adekunle-amos-b4b4491a5',
    href: 'https://linkedin.com/in/adekunle-amos-b4b4491a5',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-2">
          Contact
        </h2>

        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Let's work together
        </h3>

        <p className="text-slate-400 max-w-xl mx-auto mb-10">
          I'm open to backend development opportunities and interesting
          projects. Feel free to reach out through any of these.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-3xl mx-auto">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex-1 rounded-xl border border-slate-800 bg-slate-900/50 p-6 hover:border-emerald-400/50 transition-colors"
            >
              <p className="text-sm text-slate-500 mb-1">{link.label}</p>
              <p className="text-slate-200 font-medium break-all">
                {link.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}