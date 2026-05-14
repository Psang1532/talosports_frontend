'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavbarProps {
  transparent?: boolean   // when true, nav uses glass style
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isHome        = pathname === '/'
  const isMarketplace = pathname.startsWith('/marketplace')
  const isAdvisory    = pathname.startsWith('/advisory')

  return (
    <>
      <nav className={transparent ? 'nav-glass' : ''}>
        <Link href="/" className="logo">TALO</Link>

        <ul className="nav-links">
          <li>
            <Link href="/" className={isHome ? 'nav-active' : ''}>Home</Link>
          </li>
          <li>
            <Link
              href="/marketplace"
              className={isMarketplace ? 'nav-active' : ''}
            >
              Marketplace
            </Link>
          </li>
          <li>
            <Link
              href="/advisory"
              className={isAdvisory ? 'nav-active' : ''}
            >
              Advisory
            </Link>
          </li>
          <li><a href="/#roles">Roles</a></li>
          <li><a href="/#how">How It Works</a></li>
          <li>
            <Link
              href="/register"
              className={`nav-cta${pathname === '/register' ? ' nav-active' : ''}`}
            >
              Join Now 
            </Link>
          </li>
        </ul>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <Link href="/"            onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/marketplace" onClick={() => setMenuOpen(false)}>Marketplace</Link>
        <Link href="/advisory"    onClick={() => setMenuOpen(false)}>Advisory</Link>
        <a href="/#roles"         onClick={() => setMenuOpen(false)}>Ecosystem</a>
        <a href="/#how"           onClick={() => setMenuOpen(false)}>How It Works</a>
        <Link href="/register"    onClick={() => setMenuOpen(false)}>Join Free →</Link>
      </div>
    </>
  )
}
