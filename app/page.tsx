import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CTAButton } from '@/components/cta-button'

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-28 lg:pb-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Book Positioning Badge */}
          <div className="mb-8 sm:mb-10">
            <span className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wide">NEW PUBLICATION</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 sm:mb-8 font-serif">
            Rethinking Financial Strategy
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 sm:mb-12 leading-relaxed">
            Data-driven insights for the discerning advisor. A comprehensive guide to modern financial strategy built on credibility, not hype.
          </p>

          {/* Core Premise */}
          <div className="mb-12 sm:mb-16 p-6 sm:p-8 bg-card border border-border">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">The Core Premise</h2>
            <p className="text-lg sm:text-xl text-foreground leading-relaxed">
              Today's financial landscape demands a fundamental shift. This book synthesizes decades of market data, regulatory evolution, and behavioral economics into actionable frameworks for advisors and decision-makers.
            </p>
          </div>

          {/* Who It's For / Not For */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">Who This Is For</h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span>Financial advisors seeking deeper context</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span>C-suite executives in financial services</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span>Policy influencers and regulators</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span>High-net-worth individuals</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">This Is Not For</h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span>Casual investors seeking quick tips</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span>Get-rich-quick enthusiasts</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span>Those seeking entertainment over substance</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">•</span>
                  <span>Readers avoiding data-driven analysis</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <CTAButton href="/book">Explore the Book</CTAButton>
            <CTAButton href="/advisory">Request Advisory Access</CTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
