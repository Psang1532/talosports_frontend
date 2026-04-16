'use client'

import { useState, useEffect, useRef } from 'react'
import { feedMessages } from '@/lib/data'
import type { FeedMessage } from '@/types'

export default function LiveFeed() {
  const [cards, setCards] = useState<FeedMessage[]>([
    feedMessages[0],
    feedMessages[1],
    feedMessages[2],
  ])
  const [fading, setFading] = useState<number | null>(null)
  const idxRef = useRef(3)

  useEffect(() => {
    const interval = setInterval(() => {
      const cardIdx = idxRef.current % 3
      const msgIdx = idxRef.current % feedMessages.length
      setFading(cardIdx)
      setTimeout(() => {
        setCards((prev) => {
          const next = [...prev]
          next[cardIdx] = feedMessages[msgIdx]
          return next
        })
        setFading(null)
      }, 280)
      idxRef.current++
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="activity-feed-wrap">
      <div className="feed-header">
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4CAF50', display: 'inline-block' }} />
        Live Activity
      </div>
      {cards.map((msg, i) => (
        <div
          key={i}
          className="feed-card"
          style={{
            opacity: fading === i ? 0 : 1,
            transform: fading === i ? 'translateX(12px)' : 'translateX(0)',
          }}
        >
          <div className={`feed-type ${msg.type}`}>{msg.label}</div>
          <div className="feed-body" dangerouslySetInnerHTML={{ __html: msg.body.replace('\n', '<br />') }} />
          <div className="feed-meta">{msg.meta}</div>
        </div>
      ))}
    </div>
  )
}
