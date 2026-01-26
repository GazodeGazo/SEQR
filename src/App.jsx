import { Suspense, lazy } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Home from './pages/Home'
import Stake from './pages/Stake'
import Treasury from './pages/Treasury'
import Docs from './pages/Docs'
import PrelaunchBanner from './components/ui/PrelaunchBanner'
import { CONTRACTS, isProtocolLive } from './config/contracts'

const FloatingCubes = lazy(() => import('./components/three/FloatingCubes'))

function App() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isLive = isProtocolLive()

  return (
    <div className="min-h-screen bg-transparent">
      {/* Pre-launch Banner */}
      <PrelaunchBanner />

      {/* Cubes 3D uniquement sur Home */}
      {isHomePage && (
        <Suspense fallback={null}>
          <FloatingCubes />
        </Suspense>
      )}

      {/* Navbar */}
      <nav className="fixed top-8 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="SEQR" className="w-10 h-10" />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className={`text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-[#0052FF]' : 'text-gray-600 hover:text-gray-900'}`}>Home</Link>
            <Link to="/stake" className={`text-sm font-medium transition-colors ${location.pathname === '/stake' ? 'text-[#0052FF]' : 'text-gray-600 hover:text-gray-900'}`}>Stake</Link>
            <Link to="/treasury" className={`text-sm font-medium transition-colors ${location.pathname === '/treasury' ? 'text-[#0052FF]' : 'text-gray-600 hover:text-gray-900'}`}>Treasury</Link>
            <Link to="/docs" className={`text-sm font-medium transition-colors ${location.pathname === '/docs' ? 'text-[#0052FF]' : 'text-gray-600 hover:text-gray-900'}`}>Docs</Link>
            <ConnectButton 
              chainStatus="icon"
              showBalance={false}
              accountStatus="address"
            />
          </div>
        </div>
      </nav>
      
      {/* Content - adjusted for banner */}
      <main className="pt-28 relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/treasury" element={<Treasury />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="SEQR" className="w-8 h-8" />
            {isLive ? (
              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">Live on Base</span>
            ) : (
              <span className="bg-[#0052FF]/10 text-[#0052FF] text-xs px-2 py-1 rounded-full font-medium">Coming Soon</span>
            )}
          </div>
          <div className="flex items-center gap-6">
            <a href={CONTRACTS.TWITTER} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-[#0052FF] transition-colors">Twitter</a>
            {isLive && (
              <a href={CONTRACTS.DEXSCREENER} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-[#0052FF] transition-colors">DexScreener</a>
            )}
            <a href={CONTRACTS.BASESCAN_TOKEN} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-[#0052FF] transition-colors">Basescan</a>
            <Link to="/docs" className="text-sm text-gray-500 hover:text-[#0052FF] transition-colors">Docs</Link>
          </div>
          <div className="text-gray-400 text-sm">© 2026 SEQR Protocol</div>
        </div>
      </footer>
    </div>
  )
}

export default App
