function Footer() {
  return (
    <footer className="bg-white text-black border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} YourBrand — Web Design & Cybersecurity</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#services" className="hover:opacity-70">Services</a>
          <a href="#order" className="hover:opacity-70">Order</a>
          <a href="#contact" className="hover:opacity-70">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
