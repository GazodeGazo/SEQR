import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { Wallet, TrendingUp, PieChart, Activity, ExternalLink, ArrowUpRight, ArrowDownRight } from 'lucide-react'

const Treasury = () => {
  const treasuryStats = [
    { label: 'Total Treasury Value', value: 4.2, suffix: 'M', prefix: '$', icon: Wallet, change: '+12.4%' },
    { label: 'Monthly Revenue', value: 284, suffix: 'K', prefix: '$', icon: TrendingUp, change: '+8.2%' },
    { label: 'Distributed to Stakers', value: 1.8, suffix: 'M', prefix: '$', icon: PieChart, change: '+15.6%' },
    { label: 'Active Stakers', value: 4821, suffix: '', prefix: '', icon: Activity, change: '+234' },
  ]

  const holdings = [
    { asset: 'ETH', amount: '1,245.50', value: '$4,152,345', percentage: 65, color: '#627EEA' },
    { asset: 'USDC', amount: '892,450', value: '$892,450', percentage: 22, color: '#2775CA' },
    { asset: 'SEQR', amount: '2,450,000', value: '$342,580', percentage: 8, color: '#0052FF' },
    { asset: 'Other', amount: '-', value: '$198,625', percentage: 5, color: '#9CA3AF' },
  ]

  const sequencerProgress = {
    current: 68.4,
    target: 100,
    dailyRevenue: 9450,
    weeklyGrowth: 12.3,
  }

  const recentActivity = [
    { type: 'Revenue', description: 'Sequencer fees collected', amount: '+$12,450', time: '2 hours ago' },
    { type: 'Distribution', description: 'Rewards distributed to stakers', amount: '-$45,230', time: '24 hours ago' },
    { type: 'Revenue', description: 'Sequencer fees collected', amount: '+$11,890', time: '1 day ago' },
    { type: 'Swap', description: 'ETH → USDC conversion', amount: '$50,000', time: '2 days ago' },
    { type: 'Revenue', description: 'Sequencer fees collected', amount: '+$13,210', time: '2 days ago' },
  ]

  return (
    <main className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Treasury</h1>
          <p className="text-gray-500">Real-time view of protocol treasury and sequencer revenue</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {treasuryStats.map((stat, index) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-soft"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#0052FF]/10 flex items-center justify-center">
                  <stat.icon className="text-[#0052FF]" size={20} />
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-lg">
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.prefix}
                <CountUp end={stat.value} decimals={stat.value % 1 !== 0 ? 1 : 0} duration={2} />
                {stat.suffix}
              </div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Holdings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-soft">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Treasury Holdings</h2>
                <a href="#" className="text-sm text-[#0052FF] font-medium flex items-center gap-1 hover:underline">
                  View on Etherscan <ExternalLink size={14} />
                </a>
              </div>

              <div className="space-y-4">
                {holdings.map((holding) => (
                  <div key={holding.asset} className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-sm"
                      style={{ backgroundColor: holding.color }}
                    >
                      {holding.asset.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-gray-900">{holding.asset}</span>
                        <span className="font-semibold text-gray-900">{holding.value}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{holding.amount}</span>
                        <span className="text-sm text-gray-500">{holding.percentage}%</span>
                      </div>
                      <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${holding.percentage}%`, backgroundColor: holding.color }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-6 p-6 rounded-2xl bg-white border border-gray-200 shadow-soft">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        activity.type === 'Revenue' ? 'bg-green-100' : 
                        activity.type === 'Distribution' ? 'bg-orange-100' : 'bg-gray-100'
                      }`}>
                        {activity.type === 'Revenue' ? (
                          <ArrowUpRight className="text-green-600" size={16} />
                        ) : activity.type === 'Distribution' ? (
                          <ArrowDownRight className="text-orange-600" size={16} />
                        ) : (
                          <Activity className="text-gray-600" size={16} />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{activity.type}</div>
                        <div className="text-sm text-gray-500">{activity.description}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-semibold ${
                        activity.amount.startsWith('+') ? 'text-green-600' : 
                        activity.amount.startsWith('-') ? 'text-orange-600' : 'text-gray-900'
                      }`}>
                        {activity.amount}
                      </div>
                      <div className="text-xs text-gray-400">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sequencer Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-soft">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Sequencer Progress</h2>
              
              {/* Circular Progress */}
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
                    stroke="#0052FF"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${sequencerProgress.current * 2.83} 283`}
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-gray-900">{sequencerProgress.current}%</span>
                  <span className="text-sm text-gray-500">Complete</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Daily Revenue</div>
                  <div className="text-xl font-bold text-gray-900">
                    ${sequencerProgress.dailyRevenue.toLocaleString()}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0052FF]/5 border border-[#0052FF]/20">
                  <div className="text-sm text-[#0052FF] mb-1">Weekly Growth</div>
                  <div className="text-xl font-bold text-[#0052FF]">
                    +{sequencerProgress.weeklyGrowth}%
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Target Revenue</div>
                  <div className="text-xl font-bold text-gray-900">$15,000/day</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-6 p-6 rounded-2xl bg-white border border-gray-200 shadow-soft">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                {[
                  { label: 'Treasury Wallet', href: '#' },
                  { label: 'Staking Contract', href: '#' },
                  { label: 'Token Contract', href: '#' },
                  { label: 'Governance', href: '#' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <span className="text-gray-700 group-hover:text-[#0052FF] font-medium">{link.label}</span>
                    <ExternalLink className="text-gray-400 group-hover:text-[#0052FF]" size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default Treasury

