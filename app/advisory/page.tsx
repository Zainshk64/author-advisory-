import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CTAButton } from '@/components/cta-button'

export default function Advisory() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 lg:pt-48 pb-8 sm:pb-12 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Advisory & Strategy
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Exclusive advisory access for select organizations.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* Overview */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Invite-Only Advisory Program</h2>
            <p className="text-base sm:text-lg text-foreground leading-relaxed mb-6">
              Beyond the book, an exclusive advisory program provides direct access to strategic consulting for financial institutions and advisory firms. This engagement model is reserved for organizations committed to substantive improvement in their strategic posture and market understanding.
            </p>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              The program combines deep-dive analysis, regulatory strategy development, and competitive positioning workshops tailored to your organization's specific challenges and opportunities.
            </p>
          </div>

          {/* Program Components */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Program Components</h2>
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  title: 'Strategic Assessments',
                  description: 'Comprehensive review of your current advisory model, competitive positioning, and regulatory alignment. Includes benchmarking against industry standards and identification of strategic gaps.'
                },
                {
                  title: 'Market Analysis & Research',
                  description: 'Customized research on market trends, regulatory changes, and competitive dynamics relevant to your specific business segments and client base.'
                },
                {
                  title: 'Advisory Workshops',
                  description: 'Executive-level workshops focused on strategy development, risk management frameworks, and implementation planning for identified opportunities.'
                },
                {
                  title: 'Ongoing Consultation',
                  description: 'Quarterly strategy sessions providing guidance on execution, market evolution, and adjustments to your strategic roadmap.'
                },
              ].map((component, idx) => (
                <div key={idx} className="p-6 sm:p-8 bg-card border border-border">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">{component.title}</h3>
                  <p className="text-foreground">{component.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal Fit */}
          <div className="mb-12 sm:mb-16 p-6 sm:p-8 bg-card border border-border">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Ideal Client Profile</h2>
            <ul className="space-y-3 text-foreground">
              <li className="flex gap-3">
                <span className="font-bold text-accent">✓</span>
                <span>Mid-to-large advisory firms seeking to differentiate through strategy</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent">✓</span>
                <span>Financial institutions navigating regulatory or market transitions</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent">✓</span>
                <span>Organizations with decision-making authority and commitment to implementation</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-accent">✓</span>
                <span>Leaders seeking external expertise to validate or challenge internal strategy</span>
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">How It Works</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Initial Conversation', desc: 'Brief exploratory call to understand your organization, challenges, and strategic priorities.' },
                { step: '2', title: 'Scoping & Proposal', desc: 'Detailed proposal outlining the advisory program structure, timeline, and deliverables customized to your needs.' },
                { step: '3', title: 'Engagement & Analysis', desc: 'Begin the strategic assessment and deep-dive research phase, with regular check-ins and stakeholder interviews.' },
                { step: '4', title: 'Recommendations & Implementation', desc: 'Present findings with actionable recommendations and collaborate on execution strategy and timeline.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 sm:gap-8">
                  <div className="text-4xl font-bold text-accent flex-shrink-0">{item.step}</div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 sm:p-10 bg-secondary text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Ready to Explore Strategic Opportunities?</h2>
            <p className="text-foreground mb-6 max-w-2xl mx-auto">
              Submit an inquiry form to discuss how the advisory program can support your organization's strategic objectives.
            </p>
            <CTAButton href="https://typeform.com" external>Request Advisory Access</CTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
