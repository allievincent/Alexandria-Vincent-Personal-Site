import { useLocation, useNavigate } from 'react-router-dom'

// lets the nav links work from the research page too
export default function useScrollToSection() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (id) => {
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }
}
