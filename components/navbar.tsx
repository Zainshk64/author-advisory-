'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-foreground hover:text-accent transition-colors">
            Author
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <Link href="/about" className="text-sm text-foreground hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/book" className="text-sm text-foreground hover:text-accent transition-colors">
              The Book
            </Link>
            <Link href="/advisory" className="text-sm text-foreground hover:text-accent transition-colors">
              Advisory
            </Link>
            <Link href="/contact" className="px-6 py-2 bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            <Link href="/about" className="block text-sm text-foreground hover:text-accent transition-colors py-2">
              About
            </Link>
            <Link href="/book" className="block text-sm text-foreground hover:text-accent transition-colors py-2">
              The Book
            </Link>
            <Link href="/advisory" className="block text-sm text-foreground hover:text-accent transition-colors py-2">
              Advisory
            </Link>
            <Link href="/contact" className="block px-6 py-2 bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
