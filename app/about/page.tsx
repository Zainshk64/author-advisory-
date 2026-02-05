import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function About() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 lg:pt-48 pb-8 sm:pb-12 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            About the Author
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            A career grounded in financial markets, regulatory expertise, and advisory excellence.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="prose prose-sm sm:prose max-w-none space-y-8 sm:space-y-10">
            {/* Professional Bio */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Professional Background</h2>
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                With over twenty years in financial advisory and regulatory strategy, the author has built a reputation for clarity in complex markets. Beginning as an analyst in fixed income markets, the career evolved through roles at leading financial institutions, where deep market understanding combined with regulatory acumen shaped a unique perspective.
              </p>
            </div>

            {/* Key Expertise */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Areas of Expertise</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Fixed income strategy and market structure</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Regulatory evolution and compliance frameworks</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Advisor compensation and business models</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Risk management and portfolio construction</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Market structure and institutional dynamics</span>
                </li>
              </ul>
            </div>

            {/* Philosophy */}
            <div className="p-6 sm:p-8 bg-card border border-border">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Writing Philosophy</h3>
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                This book is rooted in a simple belief: financial markets are too important for shallow analysis. The intent is to cut through noise, present primary evidence, and provide the context necessary for informed decision-making. No hype. No oversimplification. Just rigorous thinking grounded in decades of market experience.
              </p>
            </div>

            {/* Credentials */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Recognition</h3>
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                The author's work has been cited in industry publications, regulatory filings, and advisory firm research. Speaking engagements at industry conferences and contributions to financial education underscore a commitment to elevating the conversation around financial advisory.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
