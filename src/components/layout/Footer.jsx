import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-100 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0052FF] flex items-center justify-center font-bold text-white text-sm">
              S
            </div>
            <span className="font-semibold text-gray-900">SEQR Protocol</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://x.com/SEQR_Protocol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-[#0052FF] transition-colors flex items-center gap-1"
            >
              Twitter <ExternalLink size={12} />
            </a>
            <a 
              href="https://app.uniswap.org/swap?chain=base" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-[#0052FF] transition-colors flex items-center gap-1"
            >
              Uniswap <ExternalLink size={12} />
            </a>
            <a 
              href="https://basescan.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-[#0052FF] transition-colors flex items-center gap-1"
            >
              Basescan <ExternalLink size={12} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2026 SEQR Protocol. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

