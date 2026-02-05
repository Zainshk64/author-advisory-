import React from "react"
import Link from 'next/link'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  external?: boolean
  className?: string
}

export function CTAButton({ href, children, external = false, className = '' }: CTAButtonProps) {
  const baseClasses = 'px-8 py-3 bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity inline-block'

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${className}`}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={`${baseClasses} ${className}`}>
      {children}
    </Link>
  )
}
