import { useState } from 'react'

const initial = {
  name: '',
  email: '',
  phone: '',
  service: 'UI/UX Web Design',
  budget_range: '',
  timeline: '',
  requirements: '',
  addons: []
}

function OrderForm() {
  const [form, setForm] = useState(initial)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setForm(prev => ({
        ...prev,
        addons: checked ? [...prev.addons, value] : prev.addons.filter(v => v !== value)
      }))
    } else {
      setForm(prev => ({ ...prev, [name]: value }))
    }
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${backend}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Request failed')
      setStatus({ ok: true, id: data.id })
      setForm(initial)
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-white text-black py-20" id="order">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold">Start an Order</h2>
        <p className="mt-2 text-neutral-600">Tell me about your project and I’ll follow up shortly.</p>

        <form onSubmit={submit} className="mt-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="w-full border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
            </div>
            <div>
              <label className="block text-sm mb-1">Service</label>
              <select name="service" value={form.service} onChange={handleChange} className="w-full border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black">
                <option>UI/UX Web Design</option>
                <option>Full‑Stack Websites</option>
                <option>Cybersecurity Hardening</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Budget Range</label>
              <input name="budget_range" value={form.budget_range} onChange={handleChange} className="w-full border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="$2k–$8k" />
            </div>
            <div>
              <label className="block text-sm mb-1">Timeline</label>
              <input name="timeline" value={form.timeline} onChange={handleChange} className="w-full border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="2–6 weeks" />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Requirements</label>
            <textarea name="requirements" value={form.requirements} onChange={handleChange} required rows="5" className="w-full border border-black/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Briefly describe goals, pages, and any integrations" />
          </div>

          <fieldset>
            <legend className="block text-sm mb-2">Add‑ons</legend>
            <div className="grid sm:grid-cols-3 gap-2 text-sm">
              {['Logo Design','Copywriting','Maintenance'].map(opt => (
                <label key={opt} className="flex items-center gap-2 border border-black/10 rounded-lg px-3 py-2">
                  <input type="checkbox" value={opt} checked={form.addons.includes(opt)} onChange={handleChange} />
                  {opt}
                </label>
              ))}
            </div>
          </fieldset>

          {status && (
            <div className={`rounded-lg px-4 py-3 text-sm ${status.ok ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
              {status.ok ? (
                <>Thanks! Your request was received. Ref: <span className="font-mono">{status.id}</span></>
              ) : (
                <>Something went wrong: {status.msg}</>
              )}
            </div>
          )}

          <button disabled={loading} className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg hover:opacity-90 transition disabled:opacity-50">
            {loading ? 'Sending…' : 'Submit Order'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default OrderForm
