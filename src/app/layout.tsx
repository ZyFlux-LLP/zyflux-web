import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SharedInteractions from '@/components/SharedInteractions'
import GSAPAnimations from '@/components/GSAPAnimations'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zyflux — Engineering the flow of modern software',
  description:
    'A product engineering studio building ERP, CRM, ecommerce, apps, and digital marketing for teams that care about craft and velocity.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <SharedInteractions />
        <GSAPAnimations />
      </body>
    </html>
  )
}
