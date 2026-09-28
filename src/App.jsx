import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-200">
      <Navbar />
      <main>
        <section id="home" className="min-h-screen pt-16 p-6">Hero</section>
        <section id="about" className="min-h-screen pt-16 p-6">About</section>
        <section id="skills" className="min-h-screen pt-16 p-6">Skills</section>
        <section id="projects" className="min-h-screen pt-16 p-6">Projects</section>
        <section id="experience" className="min-h-screen pt-16 p-6">Experience</section>
        <section id="contact" className="min-h-screen pt-16 p-6">Contact</section>
      </main>
    </div>
  )
}