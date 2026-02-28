import { personalInfo, stats, skillCategories, experience, featuredProjects } from "@/data/resume-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-neural-bg)] text-white font-sans selection:bg-cyan-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full glass z-50 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-gradient">{personalInfo.name}</div>
        <ul className="hidden md:flex space-x-8 text-sm font-mono text-gray-300">
          <li><a href="#about" className="hover:text-[var(--color-neural-cyan)] transition-colors">// About</a></li>
          <li><a href="#skills" className="hover:text-[var(--color-neural-cyan)] transition-colors">// Skills</a></li>
          <li><a href="#experience" className="hover:text-[var(--color-neural-cyan)] transition-colors">// Experience</a></li>
          <li><a href="#projects" className="hover:text-[var(--color-neural-cyan)] transition-colors">// Projects</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center relative px-4 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-neural-surface)_0%,_transparent_70%)] opacity-50"></div>
        <div className="z-10 animate-fade-in-up">
          <p className="font-mono text-[var(--color-neural-cyan)] mb-4 tracking-widest uppercase">Hello, World. I am</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {personalInfo.name}
          </h1>
          <h2 className="text-3xl md:text-5xl text-gradient font-bold mb-8">
            {personalInfo.title}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-12">
            {personalInfo.tagline}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#experience" className="px-8 py-3 rounded-full bg-[var(--color-neural-cyan)] text-black font-semibold hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all">
              Initialize Sequence
            </a>
            <a href={personalInfo.linkedin} target="_blank" className="px-8 py-3 rounded-full glass hover:bg-white/10 transition-all cursor-pointer relative z-20">
              Establish Uplink
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-12 w-full max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-neural-cyan)] glow-cyan inline-block">{stat.value}</div>
              <div className="text-sm font-mono text-gray-500 mt-2 uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-[var(--color-neural-surface)] relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-[var(--color-neural-purple)] font-mono text-xl">01.</span>
            System Diagnostics
          </h2>
          <div className="glass-card p-8 md:p-12 text-lg text-gray-300 leading-relaxed">
            <p>{personalInfo.summary}</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-[var(--color-neural-cyan)] font-mono text-xl">02.</span>
            Tech Stack Capabilities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((cat, i) => (
              <div key={i} className="glass-card p-8 hover:-translate-y-2 transition-transform duration-300 group">
                <div className="text-4xl mb-6">{cat.icon}</div>
                <h3 className="text-xl font-bold mb-6 flex items-center" style={{ color: cat.color }}>
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, j) => (
                    <span key={j} className="text-sm font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 bg-[var(--color-neural-surface)] relative transition-all">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
            <span className="text-[var(--color-neural-green)] font-mono text-xl">03.</span>
            Operations History
          </h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--color-neural-border)] before:to-transparent">
            {experience.map((exp, i) => (
              <div key={i} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--color-neural-bg)] bg-[var(--color-neural-surface)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow flex-col items-center z-10" style={{ borderColor: exp.domainColor }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: exp.domainColor }}></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6">
                  <div className="flex flex-col mb-4">
                    <span className="font-mono text-sm mb-2" style={{ color: exp.domainColor }}>[Phase {exp.epoch}: {exp.phase}]</span>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <div className="text-gray-400 mt-1">{exp.company} | {exp.period}</div>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-gray-400 flex items-start">
                        <span className="text-[var(--color-neural-cyan)] mr-2">›</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, j) => (
                      <span key={j} className="text-xs font-mono px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-[var(--color-neural-pink)] font-mono text-xl">04.</span>
            Deployed Architectures
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((proj, i) => (
              <div key={i} className="glass-card p-8 flex flex-col h-full hover:border-[var(--color-neural-cyan)] transition-colors duration-300 group hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]">
                <div className="font-mono text-sm mb-4" style={{ color: proj.domainColor }}>// {proj.domain}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient inline-block">{proj.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{proj.description}</p>
                <div className="bg-[var(--color-neural-bg)] p-4 rounded-lg border border-[var(--color-neural-border)] mb-6">
                  <div className="text-sm font-semibold text-white mb-1">Impact</div>
                  <div className="text-sm text-gray-400">{proj.impact}</div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.tech.map((t, j) => (
                    <span key={j} className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[var(--color-neural-border)] bg-[var(--color-neural-bg)] text-center relative z-20">
        <div className="font-mono hover:text-white transition-colors cursor-pointer text-[var(--color-neural-cyan)] mb-4">{personalInfo.email}</div>
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} {personalInfo.name}. All systems operational.</p>
      </footer>
    </main>
  );
}
