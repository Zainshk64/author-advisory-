// app/page.tsx
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CTAButton } from '@/components/cta-button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ============================================ */}
      {/* HERO SECTION - Exact copy from docs */}
      {/* ============================================ */}
      <section className="pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* H1 - Exact */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            The DSCR Illusion
          </h1>

          {/* Subheadline - Exact */}
          <p className="text-xl sm:text-2xl text-foreground font-medium mb-4">
            Approved does not mean it's a good investment.
          </p>

          {/* Body text - Exact */}
          <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            A clear, risk-first look at residential DSCR loans—and where investors get hurt.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <CTAButton 
              href="https://form.typeform.com/to/Cl5ljWMv" 
              variant="primary"
              external
            >
              Apply for Advisory
            </CTAButton>
            <CTAButton 
              href="https://amazon.com" 
              variant="secondary"
              external
            >
              Buy the Book
            </CTAButton>
          </div>

          {/* Micro-trust line - Exact */}
          <p className="text-sm text-muted-foreground">
            Residential DSCR loans • Investor risk • Portfolio-level decisions
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHAT THIS BOOK IS - Exact copy from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            What This Book Is
          </h2>

          <div className="space-y-4 mb-8">
            <p className="text-muted-foreground leading-relaxed">
              The DSCR Illusion is not a guide to getting approved.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              It's a guide to understanding what approval actually means—and what it doesn't.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This book breaks down how residential DSCR loans really work, where risk is hiding, and why many investors mistake lender approval for deal quality.
            </p>
          </div>

          {/* Bullet points - Exact */}
          <ul className="space-y-3">
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>How DSCR lenders evaluate risk (and what they ignore)</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>Why "cash flow on paper" can be misleading</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>Where risk shifts instead of disappearing</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>How the same property can produce very different outcomes</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>When DIY decision-making breaks down</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHO THIS IS FOR / NOT FOR - Exact copy from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10">
            Who This Book Is For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* For - Exact bullets */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                For
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-foreground">
                  <span className="text-muted-foreground">•</span>
                  <span>Investors using or considering residential DSCR loans</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-muted-foreground">•</span>
                  <span>Buyers in the $1M–$3.5M loan range</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-muted-foreground">•</span>
                  <span>Short-term or long-term rental investors</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-muted-foreground">•</span>
                  <span>Experienced investors scaling portfolios</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-muted-foreground">•</span>
                  <span>Readers who want clarity, not hype</span>
                </li>
              </ul>
            </div>

            {/* Not For - Exact bullets */}
            <div>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                Not For
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-muted-foreground">
                  <span>•</span>
                  <span>First-time buyers looking for step-by-step approval guides</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span>•</span>
                  <span>Commercial real estate investors</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span>•</span>
                  <span>Rate shoppers only focused on the lowest payment</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span>•</span>
                  <span>Anyone looking for guarantees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CORE PREMISE - Exact copy from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Approved ≠ Safe
          </h2>

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              DSCR approval is a lender decision—not an investment verdict.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The metrics that allow a loan to close are often very different from the factors that determine whether a deal performs, survives volatility, or compounds long-term.
            </p>
            <p className="text-foreground leading-relaxed font-medium">
              This book exists to close that gap.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ADVISORY BRIDGE - Exact copy from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            When Reading Isn't Enough
          </h2>

          <div className="space-y-4 mb-8">
            <p className="text-muted-foreground leading-relaxed">
              For some investors, clarity from a book is sufficient.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For others—especially those with significant exposure—decisions require a deeper, portfolio-level lens.
            </p>
            <p className="text-foreground leading-relaxed font-medium">
              That's where advisory begins.
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

      {/* ============================================ */}
      {/* ABOUT THE AUTHOR (Snapshot) - Exact copy from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            About the Author
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Jeff Trevarthen is a mortgage professional and investor advisor specializing in residential DSCR lending and investor risk analysis.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            His work focuses on helping investors understand how leverage behaves across portfolios—not just how loans get approved.
          </p>

          <Link 
            href="/about"
            className="text-foreground font-medium hover:underline underline-offset-4 transition-colors inline-flex items-center gap-1"
          >
            Read More 
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA - Exact copy from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            If You're Carrying Real Exposure, Decisions Matter
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://form.typeform.com/to/Cl5ljWMv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground text-sm font-medium hover:bg-background/90 transition-colors"
            >
              Apply for Advisory
            </a>
            <a
              href="https://amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-background border border-background text-sm font-medium hover:bg-background hover:text-foreground transition-colors"
            >
              Buy the Book
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}