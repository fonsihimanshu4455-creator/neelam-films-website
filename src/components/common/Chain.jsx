/**
 * Decorative interlocking chain — a subtle premium ornament.
 *
 * Usage:
 *   <Chain className="absolute left-8 top-0" links={7} />         // hanging vertical chain (sways)
 *   <Chain orientation="horizontal" links={14} />                 // divider chain
 *
 * The vertical variant hangs from its top anchor and gently sways;
 * the horizontal variant reads as a delicate divider line of links.
 */
export default function Chain({
  orientation = 'vertical',
  links = 6,
  swayAlt = false,
  className = '',
}) {
  const horizontal = orientation === 'horizontal'

  // Metallic brand-blue gradient shared by every link
  const gradId = `chain-grad-${horizontal ? 'h' : 'v'}-${swayAlt ? 'a' : 'b'}`

  // Each "unit" = one upright link + one flat link, so they interlock.
  const unit = 26 // px of chain covered by a link pair
  const count = Math.max(2, links)

  const linkEls = []
  for (let i = 0; i < count; i++) {
    const flat = i % 2 === 1
    const pos = i * (unit / 2)
    linkEls.push(
      <g key={i} transform={horizontal ? `translate(${pos}, 0)` : `translate(0, ${pos})`}>
        <ellipse
          cx={horizontal ? unit / 2 : 0}
          cy={horizontal ? 0 : unit / 2}
          rx={flat ? 10 : 5.5}
          ry={flat ? 5.5 : 10}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="2.4"
        />
      </g>
    )
  }

  const span = (count + 1) * (unit / 2)
  const viewW = horizontal ? span : 22
  const viewH = horizontal ? 22 : span
  const tx = horizontal ? 0 : 11
  const ty = horizontal ? 11 : 0

  return (
    <div
      className={`pointer-events-none select-none ${
        !horizontal ? `origin-top ${swayAlt ? 'animate-chain-sway-alt' : 'animate-chain-sway'}` : ''
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        width={viewW}
        height={viewH}
        viewBox={`0 0 ${viewW} ${viewH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8ecdff" />
            <stop offset="45%" stopColor="#2b90e8" />
            <stop offset="100%" stopColor="#195ca8" />
          </linearGradient>
        </defs>
        <g transform={`translate(${tx}, ${ty})`}>{linkEls}</g>
      </svg>
    </div>
  )
}
