// app/media/page.tsx
import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'


// ============================================
// MEDIA PAGE METADATA
// ============================================
export const metadata: Metadata = {
  title: 'Media & Speaking',
  description: 'Jeff Trevarthen is available for podcasts, panels, and investor-focused events. Topics include residential DSCR loans, investor risk, and portfolio-level thinking.',
  keywords: [
    'Jeff Trevarthen speaking',
    'DSCR podcast guest',
    'real estate investing speaker',
    'investor conference speaker',
    'DSCR loan expert speaker',
    'finance podcast guest',
    'real estate panel speaker',
  ],
  openGraph: {
    title: 'Media & Speaking | The DSCR Illusion',
    description: 'Available for podcasts, panels, and investor-focused events on residential DSCR loans, investor risk, and portfolio-level thinking.',
    url: 'https://thedscrillusion.com/media',
    type: 'website',
    images: [
      {
        url: '/og-media.jpg',
        width: 1200,
        height: 630,
        alt: 'Jeff Trevarthen - Media & Speaking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media & Speaking | The DSCR Illusion',
    description: 'Available for podcasts, panels, and investor-focused events.',
    images: ['/og-media.jpg'],
  },
  alternates: {
    canonical: 'https://thedscrillusion.com/media',
  },
}

// ============================================
// JSON-LD STRUCTURED DATA FOR MEDIA PAGE
// ============================================
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jeff Trevarthen',
  jobTitle: 'Mortgage Professional & Investor Advisor',
  description: 'Available for podcasts, panels, and investor-focused events.',
  url: 'https://thedscrillusion.com/media',
  knowsAbout: [
    'Residential DSCR loans: what investors misunderstand',
    'Lender approval vs investment risk',
    'How risk shifts inside leverage structures',
    'Portfolio-level thinking for real estate investors',
    'Financing mistakes that compound over time',
  ],
}



export default function Media() {
  return (
    <>      <script
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
            Media & Speaking
          </h1>
          
          {/* Subheadline - Exact */}
          <p className="text-xl text-muted-foreground">
            Available for podcasts, panels, and investor-focused events.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* TOPICS I SPEAK ON - Exact from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            Topics I Speak On
          </h2>

          {/* Bullets - Exact from docs */}
          <ul className="space-y-4">
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>Residential DSCR loans: what investors misunderstand</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>Lender approval vs investment risk</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>How risk shifts inside leverage structures</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>Portfolio-level thinking for real estate investors</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>Financing mistakes that compound over time</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================ */}
      {/* IDEAL AUDIENCES - Exact from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            Ideal Audiences
          </h2>

          {/* Bullets - Exact from docs */}
          <ul className="space-y-4">
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>Real estate investor conferences</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>Podcasts (real estate, investing, finance)</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>Professional groups (CPAs, attorneys, advisors)</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>Industry panels and roundtables</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================ */}
      {/* MEDIA ASSETS - Exact from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Media Assets
          </h2>

          <p className="text-lg text-muted-foreground mb-6">
            Media assets available upon request:
          </p>

          <ul className="space-y-3">
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>Book cover</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>Author headshot</span>
            </li>
            <li className="flex gap-3 text-foreground">
              <span className="text-muted-foreground">•</span>
              <span>Short and long bios</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ============================================ */}
      {/* MEDIA CONTACT CTA - Exact from docs */}
      {/* ============================================ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <a
            href="mailto:media@thedscrillusion.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground text-base font-medium hover:bg-background/90 transition-colors"
          >
            Media & Speaking Inquiries
          </a>
          
          {/* Note - Exact from docs */}
          <p className="mt-4 text-sm text-background/70">
            (For advisory, please use the application.)
          </p>
        </div>
      </section>

      <Footer />
    </div>
    </>
  )
}