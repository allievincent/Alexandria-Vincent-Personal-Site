import { useState } from 'react'
import Button from './Button.jsx'
import { profile } from '../data/profile.js'

// no backend for this, so it just opens your email app with everything filled in
export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Hello from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n- ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const inputClass = 'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-gray-700 dark:bg-[#16191f]'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Name</span>
          <input name="name" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Email</span>
          <input name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="you@email.com" />
        </label>
      </div>
      <label className="block">
        <span className="mb-1 block text-sm font-medium">Message</span>
        <textarea name="message" rows="5" required value={form.message} onChange={handleChange} className={inputClass} placeholder="Hi Allie, ..." />
      </label>
      <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
    </form>
  )
}
