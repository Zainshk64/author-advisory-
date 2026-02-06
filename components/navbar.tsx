// components/navbar.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo / Site Name */}
          <Link
            href="/"
            className="text-lg sm:text-xl font-semibold text-foreground tracking-tight"
          >
            The DSCR Illusion
          </Link>

          {/* Desktop Navigation - Exact order from docs */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/book" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              The Book
            </Link>
            <Link 
              href="/advisory" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Advisory
            </Link>
            <Link 
              href="/media" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Media
            </Link>
            <Link 
              href="/about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>

            {/* Primary CTA - Sticky in header per docs */}
            <Link
              href="https://form.typeform.com/to/Cl5ljWMv"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Apply for Advisory
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6 text-foreground" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={
                  isOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border py-4 space-y-1">
            <Link 
              href="/" 
              className="block py-3 text-sm text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/book" 
              className="block py-3 text-sm text-muted-foreground"
              onClick={() => setIsOpen(false)}
            >
              The Book
            </Link>
            <Link 
              href="/advisory" 
              className="block py-3 text-sm text-muted-foreground"
              onClick={() => setIsOpen(false)}
            >
              Advisory
            </Link>
            <Link 
              href="/media" 
              className="block py-3 text-sm text-muted-foreground"
              onClick={() => setIsOpen(false)}
            >
              Media
            </Link>
            <Link 
              href="/about" 
              className="block py-3 text-sm text-muted-foreground"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block py-3 text-sm text-muted-foreground"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4 mt-4 border-t border-border">
              <Link
                href="https://form.typeform.com/to/Cl5ljWMv"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-5 py-3 bg-foreground text-background text-sm font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Apply for Advisory
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}