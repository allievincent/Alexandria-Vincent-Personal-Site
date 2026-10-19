import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home/Home.jsx'
import Research from './pages/Research/Research.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="research" element={<Research />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
