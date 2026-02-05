'use client'

import React from "react"

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In production, send to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 lg:pt-48 pb-8 sm:pb-12 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Contact
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Questions? Let's talk.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div>
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-3">Email</h3>
              <p className="text-lg text-foreground hover:text-accent transition-colors">
                <a href="mailto:hello@example.com">hello@example.com</a>
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-3">Location</h3>
              <p className="text-lg text-foreground">United States</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Send a Message</h2>
            
            {submitted && (
              <div className="mb-6 p-6 sm:p-8 bg-accent text-accent-foreground border border-accent">
                <p className="font-medium">Thank you for reaching out. I'll respond shortly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
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
                  className="w-full px-4 py-3 border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
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
                  className="w-full px-4 py-3 border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border bg-card text-foreground focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="book">Book Inquiry</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="advisory">Advisory Program</option>
                  <option value="media">Media Inquiry</option>
                  <option value="other">Other</option>
                </select>
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
                  className="w-full px-4 py-3 border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="p-6 sm:p-8 bg-card border border-border">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">Response Time</h3>
            <p className="text-foreground">
              I aim to respond to all inquiries within 2-3 business days. For urgent matters, please mark the subject line as such.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
