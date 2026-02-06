// components/footer.tsx
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              The DSCR Illusion
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              A clear, risk-first look at residential DSCR loans—and where investors get hurt.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-medium text-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  The Book
                </Link>
              </li>
              <li>
                <Link href="/advisory" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Advisory
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Media
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-medium text-foreground mb-4">
              Next Steps
            </h4>
            <div className="space-y-3">
              <Link
                href="https://form.typeform.com/to/Cl5ljWMv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                Apply for Advisory
              </Link>
              <p className="text-sm text-muted-foreground">
                <Link 
                  href="https://amazon.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors underline underline-offset-4"
                >
                  Buy the Book
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer - EXACT from docs */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-6">
          <p className="text-xs text-muted-foreground leading-relaxed">
            This site is for educational and informational purposes only. Nothing on this website constitutes investment, legal, or financial advice.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} The DSCR Illusion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}