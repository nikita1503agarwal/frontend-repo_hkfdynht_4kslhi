import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '', service_interest: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${backend}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Request failed')
      setStatus({ ok: true })
      setForm({ name: '', email: '', phone: '', subject: '', message: '', service_interest: '' })
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-white text-black py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold">Contact</h2>
        <p className="mt-2 text-neutral-600">Have a question or want to collaborate? Reach out below.</p>

        <form onSubmit={submit} className="mt-8 grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input name="name" value={form.name} onChange={onChange} required className="w-full border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" name="email" value={form.email} onChange={onChange} required className="w-full border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
          </div>
          <div>
            <label className="block text-sm mb-1">Phone</label>
            <input name="phone" value={form.phone} onChange={onChange} className="w-full border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
          </div>
          <div>
            <label className="block text-sm mb-1">Subject</label>
            <input name="subject" value={form.subject} onChange={onChange} required className="w-full border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Message</label>
            <textarea name="message" value={form.message} onChange={onChange} required rows="5" className="w-full border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Tell me more about what you need" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Service of Interest (optional)</label>
            <input name="service_interest" value={form.service_interest} onChange={onChange} className="w-full border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="e.g., UI/UX, Website build, Security audit" />
          </div>
          {status && (
            <div className={`md:col-span-2 rounded-lg px-4 py-3 text-sm ${status.ok ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
              {status.ok ? 'Thanks! Your message has been sent.' : `Something went wrong: ${status.msg}`}
            </div>
          )}
          <div className="md:col-span-2">
            <button disabled={loading} className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:opacity-90 transition disabled:opacity-50">
              {loading ? 'Sending…' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
