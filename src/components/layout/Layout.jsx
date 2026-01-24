import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="pt-16 md:pt-20 flex-1 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}

