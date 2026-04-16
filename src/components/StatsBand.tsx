'use client'

import { useRef, useEffect } from 'react'
import { statsData } from '@/lib/data'
import { useCountUp } from '@/hooks/useCountUp'

function StatItem({ num, label }: { num: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useCountUp(ref, num)
  return (
    <div className="stat-item">
      <div className="stat-num" ref={ref}>{num}</div>
      <div className="stat-lbl">{label}</div>
    </div>
  )
}

export default function StatsBand() {
  return (
    <div className="stats-band">
      {statsData.map((s) => (
        <StatItem key={s.label} num={s.num} label={s.label} />
      ))}
    </div>
  )
}
