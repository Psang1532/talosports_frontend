// src/app/layout.tsx
import type { Metadata } from 'next'
import './global.css'
import AppShell from '@/components/AppShell'

export const metadata: Metadata = {
  title: 'TALO — Central Exchange for African Sports',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}