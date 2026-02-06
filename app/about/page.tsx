// app/about/page.tsx
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CTAButton } from '@/components/cta-button'

export default function About() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ============================================ */}
      {/* HEADER - Exact from docs */}
      {/* ============================================ */}
      <section className="pt-28 sm:pt-36 lg:pt-44 pb-8 sm:pb-12 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            About the Author
          </h1>
        </div>
      </section>

      {/* ============================================ */}
      {/* BIO - Exact from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Jeff Trevarthen is a mortgage professional and investor advisor focused on residential DSCR loans and portfolio-level risk.
            </p>
            <p>
              He works with investors who are scaling exposure and want clarity beyond lender approval metrics.
            </p>
            <p className="text-foreground font-medium">
              Jeff's work centers on a simple idea:
            </p>
            <p className="text-xl text-foreground font-semibold">
              Risk doesn't disappear—it moves.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* APPROACH & PHILOSOPHY - Exact from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            Approach & Philosophy
          </h2>

          {/* Bullets - Exact from docs */}
          <ul className="space-y-4">
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>Approval is not validation</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>Cash flow is contextual</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>Leverage amplifies both outcomes and mistakes</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>Clarity compounds over time</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA - Exact from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <p className="text-lg text-muted-foreground mb-6">
            If you've read the book and want to explore next steps:
          </p>
          
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