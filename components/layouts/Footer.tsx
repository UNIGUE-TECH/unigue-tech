'use client'

import { useState, FormEvent } from 'react'

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Industry", href: "#industries" },
  { label: "What We Do", href: "#services" },
  { label: "Our Work", href: "#features" },
];

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setStatusMessage(data.message)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => {
          setStatus('idle')
          setStatusMessage('')
        }, 30000)
      } else {
        setStatus('error')
        setStatusMessage(data.error || 'Something went wrong')
        setTimeout(() => {
          setStatus('idle')
          setStatusMessage('')
        }, 30000)
      }
    } catch (error) {
      setStatus('error')
      setStatusMessage('Failed to send message. Please try again.')
      setTimeout(() => {
        setStatus('idle')
        setStatusMessage('')
      }, 30000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <footer id="contact" className="relative bg-footer text-white px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="absolute inset-0" />
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 bg-black">
        <div className="flex flex-col items-center md:flex-row md:items-center justify-between gap-6 sm:gap-8 lg:gap-16 py-4 sm:py-6 md:py-8">
          <aside className="w-full lg:w-1/2 px-0 sm:px-2 md:px-5 ">
            <div className="max-w-md mx-auto lg:mx-0">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                UNIGUE <br /> TECHNOLOGIES
              </h3>

              <p className="text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg md:text-xl">
                Building Tomorrow, Today
              </p>

              <div className="mt-6 sm:mt-8">
                <ul className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-lg">
                  {footerLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="hover:text-gray-300 transition underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
          <aside className="w-full lg:w-auto py-3 sm:py-4 md:py-5">
            <div className="bg-[#2a2a2a] rounded-xl p-4 sm:p-6 md:p-8 w-full max-w-md mx-auto lg:mx-0">
              <h4 className="text-lg sm:text-xl font-medium mb-4 sm:mb-5 md:mb-6 text-center">
                Reach out to us
              </h4>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full bg-[#3a3a3a] text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3 rounded-md outline-none placeholder:text-gray-500 disabled:opacity-50"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full bg-[#3a3a3a] text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3 rounded-md outline-none placeholder:text-gray-500 disabled:opacity-50"
                />

                <textarea
                  name="message"
                  placeholder="Subject description"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full bg-[#3a3a3a] text-sm sm:text-base px-3 sm:px-4 py-2.5 sm:py-3 rounded-md outline-none resize-none placeholder:text-gray-500 disabled:opacity-50"
                />

                {statusMessage && (
                  <div className={`text-sm text-center ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {statusMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-white text-black text-sm sm:text-base py-2.5 sm:py-3 rounded-md font-medium hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Contact us'}
                </button>
              </form>
            </div>
          </aside>
        </div>
        <div className="py-4 sm:py-5 md:py-6 border-t border-white/10 text-center text-xs sm:text-sm text-gray-400">
          © {new Date().getFullYear()} unigue. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 
