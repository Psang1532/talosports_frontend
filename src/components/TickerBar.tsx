'use client'

import { tickerItems } from '@/lib/data'

export default function TickerBar() {
  const items = [...tickerItems, ...tickerItems]

  return (
    <div className="ticker-bar">
      <div className="ticker-track" aria-label="Live marketplace activity">
        <div className="ticker-inner">
          {items.map((item, index) => (
            <div key={`${item.text}-${index}`} className="ticker-item">
              <span className={`ticker-dot${item.dot ? ` ${item.dot}` : ''}`} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
