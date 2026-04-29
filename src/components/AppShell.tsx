'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'
import TickerBar from '@/components/TickerBar'
import Footer from '@/components/Footer'

const authRoutes = ['/login', '/register', '/onboarding']

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAuthRoute   = authRoutes.some((route) => pathname.startsWith(route))
  const isMarketplace = pathname.startsWith('/marketplace')
  const isAdvisory    = pathname.startsWith('/advisory')        // ← NEW

  if (isAuthRoute) {
    return <main>{children}</main>
  }

  return (
    <>
      {!isMarketplace && !isAdvisory && <TickerBar />}          {/* ← hide on advisory */}
      <Navbar transparent={isAdvisory} />                       {/* ← pass transparent prop */}
      <main>{children}</main>
      <Footer />
    </>
  )
}
