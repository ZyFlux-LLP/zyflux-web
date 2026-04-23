'use client'

import { useEffect } from 'react'

const CAL_LINK = 'zyflux/30min'
const NAMESPACE = '30min'

declare global {
  interface Window { Cal?: any }
}

interface CalButtonProps {
  className?: string
  children: React.ReactNode
}

export default function CalButton({ className, children }: CalButtonProps) {
  useEffect(() => {
    // Only inject once across all instances
    if (window.Cal) return

    // Exact snippet from Cal.com's embed code generator
    ;(function (C: any, A: string, L: string) {
      const p = (a: any, ar: any) => a.q.push(ar)
      C.Cal = C.Cal || function () {
        const cal = C.Cal, ar = arguments as any
        if (!cal.loaded) {
          cal.ns = {}; cal.q = cal.q || []
          C.document.head.appendChild(C.document.createElement('script')).src = A
          cal.loaded = true
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments) }
          const ns = ar[1]; api.q = []
          if (typeof ns === 'string') {
            cal.ns[ns] = cal.ns[ns] || api
            p(cal.ns[ns], ar)
            p(cal, ['initNamespace', ns])
          } else p(cal, ar)
          return
        }
        p(cal, ar)
      }
    })(window, 'https://app.cal.com/embed/embed.js', 'init')

    window.Cal('init', NAMESPACE, { origin: 'https://cal.com' })
    window.Cal.ns[NAMESPACE]('ui', {
      hideEventTypeDetails: false,
      layout: 'week_view',
    })
  }, [])

  return (
    <button
      type="button"
      className={className}
      data-cal-link={CAL_LINK}
      data-cal-namespace={NAMESPACE}
      data-cal-config='{"layout":"week_view"}'
    >
      {children}
    </button>
  )
}
