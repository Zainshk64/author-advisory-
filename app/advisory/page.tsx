// app/advisory/page.tsx
import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'

import { Footer } from '@/components/footer'
import { CTAButton } from '@/components/cta-button'

// ============================================
// ADVISORY PAGE METADATA
// ============================================
export const metadata: Metadata = {
  title: 'Advisory / Next Steps',
  description: 'Portfolio-level clarity for investors with significant DSCR exposure. Invite-only advisory for those who need structured thinking around exposure, leverage, and downside.',
  keywords: [
    'DSCR advisory',
    'investor advisory',
    'portfolio risk analysis',
    'DSCR loan consulting',
    'real estate investment advisor',
    'Jeff Trevarthen advisory',
    'leverage risk consulting',
  ],
  openGraph: {
    title: 'Advisory / Next Steps | The DSCR Illusion',
    description: 'For investors who need portfolio-level clarity—not transactional advice. Invite-only engagement.',
    url: 'https://thedscrillusion.com/advisory',
    type: 'website',
    images: [
      {
        url: '/og-advisory.jpg',
        width: 1200,
        height: 630,
        alt: 'DSCR Illusion Advisory Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advisory / Next Steps | The DSCR Illusion',
    description: 'For investors who need portfolio-level clarity—not transactional advice.',
    images: ['/og-advisory.jpg'],
  },
  alternates: {
    canonical: 'https://thedscrillusion.com/advisory',
  },
}

// ============================================
// JSON-LD STRUCTURED DATA FOR ADVISORY PAGE
// ============================================
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'DSCR Investment Advisory',
  description: 'Portfolio-level advisory for investors using residential DSCR loans who want to understand how financing decisions affect risk across an entire portfolio.',
  provider: {
    '@type': 'Person',
    name: 'Jeff Trevarthen',
    jobTitle: 'Mortgage Professional & Investor Advisor',
    url: 'https://thedscrillusion.com/about',
  },
  serviceType: 'Investment Advisory',
  areaServed: 'United States',
  url: 'https://thedscrillusion.com/advisory',
}


export default function Advisory() {
  return (
    <>
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* ============================================ */}
      {/* HEADER - Exact from docs */}
      {/* ============================================ */}
      <section className="pt-28 sm:pt-36 lg:pt-44 pb-8 sm:pb-12 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Advisory / Next Steps
          </h1>
          
          {/* Subheadline - Exact */}
          <p className="text-xl text-muted-foreground">
            For investors who need portfolio-level clarity—not transactional advice.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHAT ADVISORY IS - Exact from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Advisory is designed for investors using residential DSCR loans who want to understand how financing decisions affect risk across an entire portfolio.
            </p>
            <p>
              This is not rate shopping.
            </p>
            <p>
              This is not deal-by-deal approval help.
            </p>
            <p className="text-foreground font-medium">
              It is structured thinking around exposure, leverage, and downside.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* GOOD FIT / NOT A FIT - Exact from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Good Fit - Exact */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                Advisory Is a Good Fit If You:
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-foreground">
                  <span className="text-muted-foreground">•</span>
                  <span>Have significant DSCR exposure or are about to</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-muted-foreground">•</span>
                  <span>Are operating in the $1M+ loan range</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-muted-foreground">•</span>
                  <span>Want clarity beyond lender metrics</span>
                </li>
                <li className="flex gap-3 text-foreground">
                  <span className="text-muted-foreground">•</span>
                  <span>Care about long-term portfolio survivability</span>
                </li>
              </ul>
            </div>

            {/* Not a Fit - Exact */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                Advisory Is Not a Fit If You:
              </h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-muted-foreground">
                  <span>•</span>
                  <span>Only want the lowest rate</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span>•</span>
                  <span>Want deal guarantees</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span>•</span>
                  <span>Are looking for transactional loan help</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span>•</span>
                  <span>Want quick opinions without analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PROCESS / HOW IT WORKS - Exact from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-10">
            How It Works
          </h2>

          {/* Steps - Exact from docs */}
          <div className="space-y-8 mb-10">
            <div className="flex gap-6">
              <span className="text-3xl font-bold text-muted-foreground flex-shrink-0 w-8">1.</span>
              <p className="text-lg text-foreground">Submit an application</p>
            </div>
            <div className="flex gap-6">
              <span className="text-3xl font-bold text-muted-foreground flex-shrink-0 w-8">2.</span>
              <p className="text-lg text-foreground">Your situation is reviewed</p>
            </div>
            <div className="flex gap-6">
              <span className="text-3xl font-bold text-muted-foreground flex-shrink-0 w-8">3.</span>
              <p className="text-lg text-foreground">Next steps are determined if there's alignment</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-10">
            Not every applicant is accepted.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA - Exact from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <CTAButton 
            href="https://form.typeform.com/to/Cl5ljWMv" 
            variant="primary"
            external
            className="bg-background text-foreground hover:bg-background/90"
          >
            Apply for Advisory
          </CTAButton>
          
          {/* Microcopy - Exact */}
          <p className="mt-4 text-sm text-background/70">
            Application required. Invite-only engagement.
          </p>
        </div>
      </section>

      <Footer />
    </div>
    </>

  )
}