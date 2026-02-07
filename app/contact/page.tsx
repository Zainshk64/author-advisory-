// app/contact/page.tsx
'use client'

import React, { useState } from "react"
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CTAButton } from '@/components/cta-button'

 const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact | The DSCR Illusion',
    description: 'Contact Jeff Trevarthen for general inquiries, media requests, or speaking engagements.',
    url: 'https://thedscrillusion.com/contact',
    mainEntity: {
      '@type': 'Person',
      name: 'Jeff Trevarthen',
      email: 'info@thedscrillusion.com',
    },
  }

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <>     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ============================================ */}
      {/* HEADER - Exact from docs */}
      {/* ============================================ */}
      <section className="pt-28 sm:pt-36 lg:pt-44 pb-8 sm:pb-12 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Contact
          </h1>
        </div>
      </section>

      {/* ============================================ */}
      {/* BODY COPY - Exact from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-12">
            <p>
              For general inquiries, media requests, or speaking engagements, use the contact method below.
            </p>
            <p>
              For advisory consideration, please submit an application.
            </p>
          </div>

          {/* ============================================ */}
          {/* CONTACT FORM - Option A from docs */}
          {/* ============================================ */}
          {submitted ? (
            <div className="p-6 sm:p-8 bg-secondary border border-border mb-12">
              <p className="text-foreground font-medium">
                Thank you for your message. I'll respond shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 mb-12">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}

          {/* ============================================ */}
          {/* ADVISORY REDIRECT - Exact from docs */}
          {/* ============================================ */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Advisory inquiries are handled through the application process.
            </p>
            
            <CTAButton 
              href="https://form.typeform.com/to/Cl5ljWMv" 
              variant="primary"
              external
            >
              Apply for Advisory
            </CTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  )
}