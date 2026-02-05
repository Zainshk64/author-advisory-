export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20 sm:mt-24 lg:mt-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-8">
          <div>
            <h3 className="font-bold text-foreground mb-4">Author</h3>
            <p className="text-sm text-muted-foreground">Credible insights on finance and advisory.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
              <li><a href="/book" className="text-muted-foreground hover:text-foreground transition-colors">The Book</a></li>
              <li><a href="/advisory" className="text-muted-foreground hover:text-foreground transition-colors">Advisory</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <p className="text-xs text-muted-foreground text-center">
            © 2025 Author. All rights reserved. This site is for informational purposes only and does not constitute financial advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
