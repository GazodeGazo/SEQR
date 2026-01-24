import { useState } from 'react'
import { motion } from 'framer-motion'
import { Wallet, TrendingUp, Clock, ArrowUpRight, ArrowDownLeft, Info, Loader2 } from 'lucide-react'

const Stake = () => {
  const [activeTab, setActiveTab] = useState('stake')
  const [amount, setAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const userPosition = {
    staked: 15420.50,
    rewards: 234.82,
    share: 0.0182,
    stakingTime: '45 days',
  }

  const globalStats = [
    { label: 'Total Staked', value: '8.4M SEQR', icon: Wallet },
    { label: 'Current APY', value: '18.5%', icon: TrendingUp },
    { label: 'Next Distribution', value: '4h 23m', icon: Clock },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate transaction
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <main className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Stake SEQR</h1>
          <p className="text-gray-500">Stake your tokens to earn sequencer revenue</p>
        </motion.div>

        {/* Global Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-4 mb-8"
        >
          {globalStats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-soft flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0052FF]/10 flex items-center justify-center">
                <stat.icon className="text-[#0052FF]" size={24} />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Your Position */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-soft">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Your Position</h2>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Staked Balance</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {userPosition.staked.toLocaleString()} <span className="text-base font-normal text-gray-500">SEQR</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0052FF]/5 border border-[#0052FF]/20">
                  <div className="text-sm text-[#0052FF] mb-1">Pending Rewards</div>
                  <div className="text-2xl font-bold text-[#0052FF]">
                    {userPosition.rewards.toLocaleString()} <span className="text-base font-normal">SEQR</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">Pool Share</div>
                    <div className="text-lg font-bold text-gray-900">{userPosition.share}%</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">Staking Time</div>
                    <div className="text-lg font-bold text-gray-900">{userPosition.stakingTime}</div>
                  </div>
                </div>

                <button className="w-full py-3 rounded-xl bg-[#0052FF] text-white font-semibold hover:bg-[#0041CC] transition-colors">
                  Claim Rewards
                </button>
              </div>
            </div>
          </motion.div>

          {/* Stake/Unstake Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-soft">
              {/* Tabs */}
              <div className="flex gap-2 mb-6 p-1 bg-gray-100 rounded-xl">
                <button
                  onClick={() => setActiveTab('stake')}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'stake'
                      ? 'bg-white text-[#0052FF] shadow-soft'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <ArrowUpRight size={18} />
                  Stake
                </button>
                <button
                  onClick={() => setActiveTab('unstake')}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'unstake'
                      ? 'bg-white text-[#0052FF] shadow-soft'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <ArrowDownLeft size={18} />
                  Unstake
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Amount Input */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Amount</label>
                    <span className="text-sm text-gray-500">
                      Balance: <span className="font-medium text-gray-900">24,580.00 SEQR</span>
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-4 py-4 pr-24 rounded-xl border border-gray-200 text-2xl font-semibold text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#0052FF] focus:ring-2 focus:ring-[#0052FF]/20 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setAmount('24580')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#0052FF]/10 text-[#0052FF] text-sm font-semibold hover:bg-[#0052FF]/20 transition-colors"
                    >
                      MAX
                    </button>
                  </div>
                </div>

                {/* Info Box */}
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 mb-6">
                  <div className="flex items-start gap-3">
                    <Info className="text-gray-400 flex-shrink-0 mt-0.5" size={18} />
                    <div className="text-sm text-gray-600">
                      {activeTab === 'stake' ? (
                        <>
                          Staking has no lockup period. You can unstake at any time. 
                          Rewards are distributed every 24 hours proportionally to your stake.
                        </>
                      ) : (
                        <>
                          Unstaking is instant with no penalties. Any pending rewards 
                          will be automatically claimed when you unstake.
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Estimation */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Estimated APY</span>
                    <span className="font-semibold text-gray-900">18.5%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Daily Earnings</span>
                    <span className="font-semibold text-gray-900">~12.45 SEQR</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Monthly Earnings</span>
                    <span className="font-semibold text-[#0052FF]">~373.50 SEQR</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading || !amount}
                  className="w-full py-4 rounded-xl bg-[#0052FF] text-white font-semibold text-lg hover:bg-[#0041CC] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Processing...
                    </>
                  ) : (
                    <>
                      {activeTab === 'stake' ? 'Stake SEQR' : 'Unstake SEQR'}
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Recent Transactions */}
            <div className="mt-6 p-6 rounded-2xl bg-white border border-gray-200 shadow-soft">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Transactions</h3>
              <div className="space-y-3">
                {[
                  { type: 'Stake', amount: '+5,000 SEQR', time: '2 hours ago', hash: '0x1234...5678' },
                  { type: 'Claim', amount: '+124.5 SEQR', time: '1 day ago', hash: '0x8765...4321' },
                  { type: 'Stake', amount: '+10,000 SEQR', time: '3 days ago', hash: '0xabcd...efgh' },
                ].map((tx, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        tx.type === 'Stake' ? 'bg-green-100' : 'bg-[#0052FF]/10'
                      }`}>
                        {tx.type === 'Stake' ? (
                          <ArrowUpRight className="text-green-600" size={16} />
                        ) : (
                          <TrendingUp className="text-[#0052FF]" size={16} />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{tx.type}</div>
                        <div className="text-xs text-gray-500">{tx.time}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{tx.amount}</div>
                      <div className="text-xs text-gray-400">{tx.hash}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default Stake

