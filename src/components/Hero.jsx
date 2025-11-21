import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] bg-white text-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-28 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <div className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 rounded-full text-xs tracking-wide mb-4">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Secure. Minimal. Modern.
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Web Design & Cybersecurity Services
          </h1>
          <p className="mt-4 text-base md:text-lg text-neutral-600">
            I craft clean, responsive websites and harden your digital footprint with best‑in‑class security. One partner for design, build, and protection.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#services" className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:opacity-90 transition">Explore Services</a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-black text-black rounded-lg hover:bg-black hover:text-white transition">Start a Project</a>
          </div>
        </div>
        <div className="w-full md:w-1/2" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white" />
    </section>
  )
}

export default Hero
