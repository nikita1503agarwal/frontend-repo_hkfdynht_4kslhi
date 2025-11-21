import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-extrabold tracking-tight text-xl">YourBrand</a>
        <button onClick={() => setOpen(o => !o)} className="md:hidden p-2 border rounded-lg" aria-label="Toggle menu">
          <span className="block w-5 h-[2px] bg-black mb-1" />
          <span className="block w-5 h-[2px] bg-black mb-1" />
          <span className="block w-5 h-[2px] bg-black" />
        </button>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:opacity-70">Services</a>
          <a href="#order" className="hover:opacity-70">Order</a>
          <a href="#contact" className="hover:opacity-70">Contact</a>
          <a href="#contact" className="px-4 py-2 bg-black text-white rounded-lg hover:opacity-90">Get a Quote</a>
        </nav>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5">
          <nav className="px-6 py-3 flex flex-col gap-3 bg-white">
            <a onClick={() => setOpen(false)} href="#services" className="py-2">Services</a>
            <a onClick={() => setOpen(false)} href="#order" className="py-2">Order</a>
            <a onClick={() => setOpen(false)} href="#contact" className="py-2">Contact</a>
            <a onClick={() => setOpen(false)} href="#contact" className="py-2 px-4 bg-black text-white rounded-lg w-max">Get a Quote</a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
