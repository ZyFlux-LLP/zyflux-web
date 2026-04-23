import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import FAQSection from './FAQSection'

function SocialArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7" /><path d="M10 7h7v7" />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Contact — Zyflux',
  description: 'Tell us about the product. We\'ll send back a plan.',
}

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow page-hero-eyebrow" style={{ marginBottom: 28 }}>Contact</div>
          <h1>
            <span className="line"><span>Tell us about the product.</span></span>
            <span className="line"><span>We&apos;ll send back a plan.</span></span>
          </h1>
          <p className="page-hero-sub">We reply to every serious inquiry within one business day. Typical engagements start within two weeks of first call.</p>
        </div>
      </section>

      <section style={{ padding: 0 }}>
        <div className="container">
          <div className="contact-grid">
            <aside className="reveal">
              <div className="info-block">
                <h4>Email</h4>
                <div className="big"><a href="mailto:hello@zyflux.com">hello@zyflux.com</a></div>
                <div className="sub">New projects, press, hiring.</div>
              </div>
              <div className="info-block">
                <h4>Already a client?</h4>
                <div className="big"><a href="mailto:ops@zyflux.com">ops@zyflux.com</a></div>
                <div className="sub">24/7 for production issues.</div>
              </div>
              <div className="info-block">
                <div className="info-row">
                  <div>
                    <h4>Response time</h4>
                    <div className="big" style={{ fontSize: 18 }}>&lt; 24 hours</div>
                    <div className="sub">Business days, IST/CET.</div>
                  </div>
                  <div>
                    <h4>Availability</h4>
                    <div className="big" style={{ fontSize: 18 }}>Q3 2026</div>
                    <div className="sub">Small slots in June.</div>
                  </div>
                </div>
              </div>
              <div className="info-block">
                <h4>Socials</h4>
                <div className="big" style={{ fontSize: 17, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>LinkedIn <SocialArrow /></a>
                  <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>GitHub <SocialArrow /></a>
                  <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>Twitter <SocialArrow /></a>
                  <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>Dribbble <SocialArrow /></a>
                </div>
              </div>
            </aside>
            <div className="reveal">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal" style={{ marginBottom: 36 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 22 }}>Studios</div>
              <h2>Three time zones,<br />one team.</h2>
            </div>
            <p>We cover IST and CET business hours natively, and overlap with US Eastern late morning through afternoon.</p>
          </div>
          <div className="locations reveal">
            <div className="loc">
              <div className="city">Bengaluru</div>
              <div className="tz">IST · UTC+5:30</div>
              <div className="addr">HSR Layout, Sector 6<br />Bengaluru, Karnataka 560102<br />India</div>
            </div>
            <div className="loc">
              <div className="city">Pune</div>
              <div className="tz">IST · UTC+5:30</div>
              <div className="addr">Koregaon Park Annexe<br />Pune, Maharashtra 411001<br />India</div>
            </div>
            <div className="loc">
              <div className="city">Berlin</div>
              <div className="tz">CET · UTC+1</div>
              <div className="addr">Mitte, near Rosenthaler Platz<br />10119 Berlin<br />Germany</div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  )
}
