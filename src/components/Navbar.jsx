import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'
import Icon from './Icon.jsx'
import { navItems } from './navItems.js'
import useActiveSection from '../hooks/useActiveSection.js'
import useScrollToSection from '../hooks/useScrollToSection.js'

const ids = navItems.map((item) => item.id)

export default function Navbar({ theme, toggleTheme }) {
  const { pathname } = useLocation()
  const active = useActiveSection(ids, pathname === '/')
  const scrollTo = useScrollToSection()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // add a shadow to the navbar once you scroll down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    scrollTo(id)
  }

  const linkClass = (isActive) =>
    `relative py-1 font-medium transition hover:text-sky-500 ${isActive ? 'text-sky-500' : 'text-gray-600 dark:text-gray-300'}
     after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:bg-sky-500 after:transition-all ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`

  return (
    <header className={`fixed top-0 z-50 w-full bg-white/90 backdrop-blur transition-shadow dark:bg-[#0f1115]/90 ${scrolled ? 'shadow-md dark:shadow-black/40' : ''}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="font-code text-xl font-medium">
          <span className="text-sky-500">&lt;</span>Allie<span className="text-sky-500"> /&gt;</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={(e) => handleClick(e, item.id)} className={linkClass(active === item.id)}>
              {item.label}
            </a>
          ))}
          <Link to="/research" className={linkClass(pathname === '/research')}>Research</Link>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        {/* mobile */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen} className="p-2">
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-[#0f1115] md:hidden">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={(e) => handleClick(e, item.id)}
              className="block py-2.5 font-medium text-gray-700 hover:text-sky-500 dark:text-gray-300">
              {item.label}
            </a>
          ))}
          <Link to="/research" onClick={() => setMenuOpen(false)} className="block py-2.5 font-medium text-gray-700 hover:text-sky-500 dark:text-gray-300">Research</Link>
        </div>
      )}
    </header>
  )
}
