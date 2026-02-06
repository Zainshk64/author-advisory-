// app/book/page.tsx
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CTAButton } from '@/components/cta-button'

export default function Book() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

    {/* ============================================ */}
{/* HEADER - Exact from docs */}
{/* ============================================ */}
<section className="pt-28 sm:pt-36 lg:pt-44 pb-12 bg-background">
  <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      
      {/* LEFT CONTENT */}
      <div className="flex-1">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          The Book
        </h1>

        {/* Body Copy */}
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            The DSCR Illusion is a practical examination of residential DSCR
            loans—written for investors who already understand leverage, but
            want to understand risk.
          </p>

          <p>This is not a how-to manual.</p>

          <p>
            It's a framework for thinking clearly when debt, yield, and
            assumptions collide.
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex-shrink-0">
        <img
          src="/book.jpeg"
          alt="The DSCR Illusion Book Cover"
          className="w-64 sm:w-72 lg:w-80 h-auto rounded-2xl shadow-xl border border-border"
        />
      </div>

    </div>
  </div>
</section>

      {/* ============================================ */}
      {/* WHAT YOU'LL LEARN - Exact from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            What You'll Learn
          </h2>

          {/* Bullets - Exact from docs */}
          <ul className="space-y-4">
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>What DSCR approval actually represents</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>Why lender incentives and investor outcomes diverge</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>How risk migrates inside DSCR structures</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>Why underwriting strength ≠ deal strength</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>How to stress-test assumptions beyond DSCR ratios</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>When advisory replaces DIY judgment</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================ */}
      {/* BUY THE BOOK - Exact from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            Buy the Book
          </h2>

          {/* Buttons - Exact from docs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton 
              href="https://amazon.com/paperback-link" 
              variant="primary"
              external
            >
              Paperback on Amazon
            </CTAButton>
            <CTAButton 
              href="https://amazon.com/kindle-link" 
              variant="secondary"
              external
            >
              Kindle on Amazon
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ADVISORY BRIDGE - Exact from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="space-y-4 mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you're already operating at scale—or considering it—the book may raise more questions than it answers.
            </p>
            <p className="text-lg text-foreground font-medium">
              That's intentional.
            </p>
          </div>

          <CTAButton 
            href="https://form.typeform.com/to/Cl5ljWMv" 
            variant="primary"
            external
          >
            Apply for Advisory
          </CTAButton>
        </div>
      </section>

      <Footer />
    </div>
  )
}