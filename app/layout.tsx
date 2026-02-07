// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import './globals.css'

// ============================================
// GLOBAL SITE CONFIGURATION - Easy to update
// ============================================
const siteConfig = {
  name: 'The DSCR Illusion',
  description: 'A clear, risk-first look at residential DSCR loans—and where investors get hurt. By Jeff Trevarthen.',
  url: 'https://thedscrillusion.com',
  author: 'Jeff Trevarthen',
  twitterHandle: '@dscrillusion', // Update if you have one
  locale: 'en_US',
}

// ============================================
// GLOBAL METADATA - Applies to all pages
// ============================================
export const metadata: Metadata = {
  // Base metadata
  metadataBase: new URL(siteConfig.url),
  
  // Title template - All pages will follow this pattern
  title: {
    default: 'The DSCR Illusion | Residential DSCR Loan Risk Analysis',
    template: '%s | The DSCR Illusion',
  },
  
  // Default description (overridden by individual pages)
  description: siteConfig.description,
  
  // Keywords (global)
  keywords: [
    'DSCR loans',
    'residential DSCR',
    'real estate investing',
    'investor risk',
    'DSCR loan risk',
    'portfolio-level thinking',
    'Jeff Trevarthen',
    'real estate leverage',
    'investment property loans',
    'DSCR underwriting',
  ],
  
  // Author information
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  
  // Robots directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'The DSCR Illusion | Residential DSCR Loan Risk Analysis',
    description: siteConfig.description,
    images: [
      {
        url: '/og-image.jpg', // Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'The DSCR Illusion - Book by Jeff Trevarthen',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'The DSCR Illusion | Residential DSCR Loan Risk Analysis',
    description: siteConfig.description,
    images: ['/og-image.jpg'],
    creator: siteConfig.twitterHandle,
  },
  
  // Verification (add your codes when ready)
  verification: {
    google: 'your-google-verification-code', // From Google Search Console
    // yandex: 'your-yandex-code',
    // bing: 'your-bing-code',
  },
  
  // App-specific
  applicationName: siteConfig.name,
  
  // Alternate languages (if needed in future)
  alternates: {
    canonical: siteConfig.url,
  },
  
  // Category
  category: 'Finance',
}

// ============================================
// VIEWPORT CONFIGURATION
// ============================================
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

// ============================================
// ROOT LAYOUT COMPONENT
// ============================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}