'use client'

import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'
import TickerBar from '@/components/TickerBar'
import Footer from '@/components/Footer'

const authRoutes = ['/login', '/register', '/onboarding']

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route))
  const isMarketplace = pathname.startsWith('/marketplace')  // ← add this

  if (isAuthRoute) {
    return <main>{children}</main>
  }

  return (
    <>
      {!isMarketplace && <TickerBar />}  {/* ← only show on non-marketplace pages */}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}