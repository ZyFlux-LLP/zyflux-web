'use client'

import { useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const faqs = [
  {
    q: 'How do engagements typically start?',
    a: 'A 30-minute intro call, then a fixed-price one-week discovery sprint where we align on scope, constraints, and success metrics. From there, most clients move into a 12-week build engagement.',
  },
  {
    q: "What's a typical team look like?",
    a: 'A pod of 3–5 people embedded with your team: one product lead, one designer, two to three engineers. No separate account manager — the pod lead is your primary contact.',
  },
  {
    q: 'Do you work with early-stage startups?',
    a: 'Yes — roughly a third of our work is with pre-Series-A startups. We offer a reduced-rate MVP engagement for well-funded early teams.',
  },
  {
    q: 'Can you join an existing codebase?',
    a: 'Absolutely. About half of our engagements are embedded work inside an existing repo. We do a one-week audit first and propose where to plug in.',
  },
  {
    q: 'What do you not do?',
    a: 'No pure creative branding, no printed collateral, no staff augmentation (we only ship as a full pod), and no unpaid pitch work.',
  },
]

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const answerRefs = useRef<(HTMLDivElement | null)[]>([])

  // Entrance animations
  useGSAP(() => {
    const heading = headingRef.current
    const items = itemsRef.current
    if (!heading || !items) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 78%',
        once: true,
      },
    })

    // Eyebrow + heading slide from left
    tl.fromTo(
      heading.querySelectorAll('.faq-eyebrow, .faq-heading'),
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.15 },
      0
    )

    // Items stagger up from right side
    tl.fromTo(
      Array.from(items.children),
      { y: 32, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.65, ease: 'power3.out', stagger: 0.1 },
      0.2
    )
  }, { scope: sectionRef })

  const toggle = useCallback((i: number) => {
    const isOpen = openIndex === i
    const closing = answerRefs.current[openIndex ?? -1]
    const opening = answerRefs.current[i]

    // Close currently open item
    if (closing && openIndex !== null) {
      gsap.to(closing, { height: 0, opacity: 0, duration: 0.32, ease: 'power2.inOut' })
    }

    if (isOpen) {
      setOpenIndex(null)
    } else {
      // Open new item
      if (opening) {
        gsap.fromTo(
          opening,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }
        )
      }
      setOpenIndex(i)
    }
  }, [openIndex])

  return (
    <section className="faq" ref={sectionRef}>
      <div className="container">
        <div className="faq-grid">
          <div ref={headingRef}>
            <div className="eyebrow faq-eyebrow" style={{ marginBottom: 22 }}>FAQ</div>
            <h2 className="faq-heading">Quick answers<br />before you write.</h2>
          </div>

          <div ref={itemsRef}>
            {faqs.map((item, i) => (
              <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
                <button
                  className="faq-summary"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span>{item.q}</span>
                  <span className="plus">+</span>
                </button>
                <div
                  className="faq-answer"
                  ref={(el) => { answerRefs.current[i] = el }}
                  style={{ height: i === 0 ? 'auto' : 0, opacity: i === 0 ? 1 : 0, overflow: 'hidden' }}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
