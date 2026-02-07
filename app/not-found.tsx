// app/not-found.tsx
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function NotFound() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      
      <section className="pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 lg:pb-32">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-foreground mb-6">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}