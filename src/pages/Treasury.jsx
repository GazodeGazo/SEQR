import { motion } from 'framer-motion'
import { Wallet, TrendingUp, PieChart, Activity, ExternalLink, Clock } from 'lucide-react'

// Composant placeholder pour les stats pré-launch
const StatPlaceholder = ({ label, icon: Icon }) => (
  <div className="p-6 rounded-2xl bg-white border border-gray-200">
    <div className="flex items-center justify-between mb-4">
      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
        <Icon className="text-gray-400" size={20} />
      </div>
      <span className="text-sm font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-lg">
        —
      </span>
    </div>
    <div className="text-2xl font-bold text-gray-300 mb-1">—</div>
    <div className="text-gray-500 text-sm">{label}</div>
  </div>
)

const Treasury = () => {
  return (
    <main className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold text-gray-900">Treasury</h1>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#0052FF]/10 text-[#0052FF] text-sm font-medium rounded-full">
              Coming Soon
            </span>
          </div>
          <p className="text-gray-500">Real-time view of protocol treasury and sequencer progress</p>
        </motion.div>

        {/* Stats Grid - Placeholders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          <StatPlaceholder label="Total Treasury Value" icon={Wallet} />
          <StatPlaceholder label="Monthly Revenue" icon={TrendingUp} />
          <StatPlaceholder label="Distributed to Stakers" icon={PieChart} />
          <StatPlaceholder label="Active Stakers" icon={Activity} />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="p-8 rounded-2xl bg-white border border-gray-200 text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-[#0052FF]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-[#0052FF]" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Treasury Tracking Coming Soon</h2>
              <p className="text-gray-500 mb-8 max-w-md mx-auto">
                Once SEQR launches, this page will display real-time treasury holdings, 
                revenue streams, and distribution history.
              </p>

              {/* What to expect */}
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="bg-gray-50 rounded-xl p-4 text-left">
                  <h4 className="font-semibold text-gray-900 mb-2">Treasury Holdings</h4>
                  <p className="text-sm text-gray-500">Track ETH, USDC, and other assets accumulated from the 1% tax</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-left">
                  <h4 className="font-semibold text-gray-900 mb-2">Revenue Distribution</h4>
                  <p className="text-sm text-gray-500">See how rewards are distributed to stakers in real-time</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-left">
                  <h4 className="font-semibold text-gray-900 mb-2">$BASE Progress</h4>
                  <p className="text-sm text-gray-500">Monitor progress towards acquiring $BASE for sequencer staking</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-left">
                  <h4 className="font-semibold text-gray-900 mb-2">Transaction History</h4>
                  <p className="text-sm text-gray-500">Full transparency with on-chain transaction records</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sequencer Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Sequencer Progress</h2>
              
              {/* Circular Progress - Placeholder */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#D1D5DB"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="0 283"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-gray-300">—</span>
                  <span className="text-sm text-gray-400">At Launch</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-sm text-gray-400 mb-1">Daily Revenue</div>
                  <div className="text-xl font-bold text-gray-300">—</div>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-sm text-gray-400 mb-1">Weekly Growth</div>
                  <div className="text-xl font-bold text-gray-300">—</div>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-sm text-gray-400 mb-1">Target</div>
                  <div className="text-xl font-bold text-gray-900">Sequencer Node</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-6 p-6 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Resources</h3>
              <div className="space-y-2">
                <a
                  href="/docs"
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-gray-700 group-hover:text-[#0052FF] font-medium">Documentation</span>
                  <ExternalLink className="text-gray-400 group-hover:text-[#0052FF]" size={16} />
                </a>
                <a
                  href="https://x.com/seqrbase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-gray-700 group-hover:text-[#0052FF] font-medium">Twitter</span>
                  <ExternalLink className="text-gray-400 group-hover:text-[#0052FF]" size={16} />
                </a>
                <a
                  href="https://basescan.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <span className="text-gray-700 group-hover:text-[#0052FF] font-medium">Basescan</span>
                  <ExternalLink className="text-gray-400 group-hover:text-[#0052FF]" size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default Treasury
