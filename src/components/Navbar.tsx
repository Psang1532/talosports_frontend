'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === '/'

  return (
    <>
      <nav>
        <Link href="/" className="logo">TALO</Link>

        <ul className="nav-links">
          <li>
            <Link href="/" className={isHome ? 'nav-active' : ''}>Home</Link>
          </li>
          <li><a href="/#marketplace">Marketplace</a></li>
          <li><a href="/#roles">Ecosystem</a></li>
          <li><a href="/#how">How It Works</a></li>
          <li>
            <Link href="/login" className={pathname === '/login' ? 'nav-active' : ''}>
              Log In
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className={`nav-cta${pathname === '/register' ? ' nav-active' : ''}`}
            >
              Join Free
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
        <Link href="/"           onClick={() => setMenuOpen(false)}>Home</Link>
        <a href="/#marketplace"  onClick={() => setMenuOpen(false)}>Marketplace</a>
        <a href="/#roles"        onClick={() => setMenuOpen(false)}>Ecosystem</a>
        <a href="/#how"          onClick={() => setMenuOpen(false)}>How It Works</a>
        <Link href="/login"      onClick={() => setMenuOpen(false)}>Log In</Link>
        <Link href="/register"   onClick={() => setMenuOpen(false)}>Join Free →</Link>
      </div>
    </>
  )
}
