function Services() {
  const services = [
    {
      title: 'UI/UX Web Design',
      desc: 'Clean, accessible interfaces with a mobile‑first approach. Wireframes, design systems, and responsive builds.',
      items: ['Wireframing', 'Design Systems', 'Responsive Design', 'Accessibility']
    },
    {
      title: 'Full‑Stack Websites',
      desc: 'High‑performance sites with modern stacks. SEO‑friendly, fast, and easy to maintain.',
      items: ['React Frontends', 'FastAPI Backends', 'SEO Basics', 'Performance']
    },
    {
      title: 'Cybersecurity Hardening',
      desc: 'Assess, monitor, and protect. Practical recommendations that reduce real‑world risk.',
      items: ['Vulnerability Review', 'Security Headers', 'Auth & RBAC', 'Backup & Recovery']
    }
  ]

  return (
    <section id="services" className="bg-white text-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">Services</h2>
          <p className="mt-2 text-neutral-600">Everything you need to ship a polished, secure presence.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="border border-black/10 rounded-xl p-6 hover:-translate-y-1 transition will-change-transform bg-white">
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-neutral-600">{s.desc}</p>
              <ul className="mt-4 text-sm text-neutral-700 space-y-1 list-disc pl-5">
                {s.items.map(it => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
