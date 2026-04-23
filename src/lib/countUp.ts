export function runCountUp(el: HTMLElement) {
  const target = parseFloat(el.dataset.count || '0')
  const decimals = parseInt(el.dataset.decimals || '0', 10)
  const suffix = el.dataset.suffix || ''
  const dur = 1400
  const start = performance.now()
  const step = (now: number) => {
    const p = Math.min(1, (now - start) / dur)
    const eased = 1 - Math.pow(1 - p, 3)
    const v = target * eased
    el.textContent = (decimals ? v.toFixed(decimals) : Math.round(v)) + suffix
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}
