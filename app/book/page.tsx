import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CTAButton } from '@/components/cta-button'

export default function Book() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 lg:pt-48 pb-8 sm:pb-12 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Book
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            A comprehensive resource for financial advisors and decision-makers.
          </p>
        </div>
      </section>

      {/* Book Overview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Book Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="p-6 bg-card border border-border">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-2">Title</h3>
              <p className="text-lg sm:text-xl font-semibold text-foreground">Rethinking Financial Strategy</p>
            </div>
            <div className="p-6 bg-card border border-border">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-2">Publication</h3>
              <p className="text-lg sm:text-xl font-semibold text-foreground">2024</p>
            </div>
            <div className="p-6 bg-card border border-border">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-2">Format</h3>
              <p className="text-lg sm:text-xl font-semibold text-foreground">Hardcover, eBook</p>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Overview</h2>
            <div className="space-y-4 text-base sm:text-lg text-foreground leading-relaxed">
              <p>
                This book addresses the critical gaps in modern financial advisory. Through extensive market research, regulatory analysis, and real-world case studies, it provides a structured framework for advisors operating in an increasingly complex landscape.
              </p>
              <p>
                Rather than prescribing one-size-fits-all solutions, the work empowers readers to think critically about strategy, risk, and value creation. It combines historical context with forward-looking analysis to ensure relevance in evolving markets.
              </p>
            </div>
          </div>

          {/* Key Ideas */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Key Ideas</h2>
            <div className="space-y-4">
              {[
                { num: '1', title: 'Market Structure Matters', desc: 'Understanding how markets function at a structural level reveals opportunities and risks hidden from surface-level analysis.' },
                { num: '2', title: 'Regulatory Context is Strategic', desc: 'Regulations shape incentives. Advisors who understand this dynamic gain competitive and structural advantage.' },
                { num: '3', title: 'Data-Driven Decision Making', desc: 'In finance, conviction without data is speculation. Evidence-based thinking separates sustainable strategies from fads.' },
                { num: '4', title: 'Client Alignment is Paramount', desc: 'The best strategies fail without clear alignment between advisor incentives and client outcomes.' },
                { num: '5', title: 'Adaptability as Resilience', desc: 'Markets evolve. Systems designed for flexibility withstand disruption; rigid approaches fragment.' },
              ].map((idea) => (
                <div key={idea.num} className="p-6 sm:p-8 bg-card border border-border">
                  <div className="flex gap-4">
                    <div className="text-3xl font-bold text-accent flex-shrink-0">{idea.num}</div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{idea.title}</h3>
                      <p className="text-foreground">{idea.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Table of Contents</h2>
            <div className="bg-card border border-border p-6 sm:p-8">
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent flex-shrink-0">I.</span>
                  <span>Market Foundations: Understanding Structure and Dynamics</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent flex-shrink-0">II.</span>
                  <span>Regulatory Evolution and Strategic Implications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent flex-shrink-0">III.</span>
                  <span>Building Resilient Advisory Models</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent flex-shrink-0">IV.</span>
                  <span>Risk Management in Practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-accent flex-shrink-0">V.</span>
                  <span>Future Outlook and Strategic Positioning</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <CTAButton href="https://amazon.com" external>Purchase on Amazon</CTAButton>
            <CTAButton href="/contact">Inquire About Speaking</CTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
