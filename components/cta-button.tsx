// components/cta-button.tsx
import Link from 'next/link'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  external?: boolean
  className?: string
}

export function CTAButton({ 
  href, 
  children, 
  variant = 'primary',
  external = false,
  className = ''
}: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors"
  
  const variants = {
    primary: "bg-foreground text-background hover:bg-foreground/90",
    secondary: "bg-transparent text-foreground border border-foreground hover:bg-foreground hover:text-background"
  }

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedStyles}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={combinedStyles}>
      {children}
    </Link>
  )
}