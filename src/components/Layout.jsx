import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import useTheme from '../hooks/useTheme.js'

export default function Layout() {
  const { theme, toggle } = useTheme()
  const { pathname, state } = useLocation()

  // go back to the top when switching pages (unless a nav link wants a section)
  useEffect(() => {
    if (!state?.scrollTo) window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggle} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
