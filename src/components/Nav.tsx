'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ZyfluxLogo from './ZyfluxLogo'
import CalButton from './CalButton'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

export default function Nav() {
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const lastY = useRef(0)
  const isDesktop = useRef(false)

  useEffect(() => {
    isDesktop.current = window.innerWidth > 860
    const onResize = () => {
      isDesktop.current = window.innerWidth > 860
      if (isDesktop.current && linksRef.current) {
        gsap.set(linksRef.current, { clearProps: 'all' })
        setOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      if (navRef.current) {
        if (y > lastY.current && y > 200) setHidden(true)
        else setHidden(false)
      }
      lastY.current = y
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  // Animate dropdown open/close (mobile only)
  useGSAP(() => {
    const el = linksRef.current
    if (!el) return

    // On desktop, clear any inline styles GSAP may have set and bail
    if (window.innerWidth > 860) {
      gsap.set(el, { clearProps: 'all' })
      return
    }

    if (open) {
      gsap.set(el, { pointerEvents: 'auto' })
      gsap.fromTo(el,
        { opacity: 0, y: -10, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: 'power3.out' }
      )
      gsap.fromTo(el.querySelectorAll('a, button'),
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.22, ease: 'power3.out', stagger: 0.05, delay: 0.06 }
      )
    } else {
      gsap.to(el, {
        opacity: 0, y: -6, scale: 0.97, duration: 0.2, ease: 'power2.in',
        onComplete: () => gsap.set(el, { pointerEvents: 'none' }),
      })
    }
  }, { dependencies: [open], scope: navRef })

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav
      ref={navRef}
      className={`nav${hidden ? ' nav-hidden' : ''}`}
    >
      <Link href="/" className="nav-brand">
        <ZyfluxLogo size={24} />
        <span>Zyflux</span>
      </Link>
      <div ref={linksRef} className="nav-links">
        <Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link>
        <Link href="/projects" className={isActive('/projects') ? 'active' : ''}>Projects</Link>
        <Link href="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
        <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
        <CalButton className="nav-cta nav-cta-mobile">Schedule a call</CalButton>
      </div>
      <CalButton className="nav-cta">Schedule a call</CalButton>
      <button
        className="nav-burger"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen(o => !o)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {open
            ? <path d="M6 6l12 12M18 6l-12 12" />
            : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
    </nav>
  )
}
