import { Link } from 'react-router-dom'
import { AlertTriangle, Sparkles, Check } from 'lucide-react'

const Home = () => {
  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 bg-transparent">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-8 border border-gray-200">
            <span className="w-2 h-2 bg-[#0052FF] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700">Built on Base</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Own a piece of the{' '}
            <span className="text-[#0052FF]">Base sequencer</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            SEQR enables fractional ownership of Base L2 sequencer infrastructure. 
            Stake $SEQR, earn rewards from transaction fees.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/stake">
              <button className="min-w-[180px] px-8 py-4 bg-[#0052FF] text-white font-semibold rounded-xl text-lg hover:bg-[#0041CC] transition-colors shadow-lg">
                Launch App
              </button>
            </Link>
            <Link to="/docs">
              <button className="min-w-[180px] px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-900 font-semibold rounded-xl border border-gray-200 hover:border-gray-300 text-lg shadow-sm">
                Read Docs
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/90 backdrop-blur-sm border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052FF] mb-1">$12.4M</div>
              <div className="text-gray-500 text-sm">Total Value Locked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052FF] mb-1">847K</div>
              <div className="text-gray-500 text-sm">SEQR Staked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052FF] mb-1">18.5%</div>
              <div className="text-gray-500 text-sm">Current APY</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0052FF] mb-1">4,821+</div>
              <div className="text-gray-500 text-sm">Token Holders</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-500 text-center mb-12">Start earning sequencer revenue in four simple steps</p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Buy $SEQR', desc: 'Purchase tokens on Uniswap. 3% tax funds the ecosystem.' },
              { step: '02', title: 'Stake', desc: 'Stake your $SEQR to earn ETH rewards.' },
              { step: '03', title: 'Treasury Grows', desc: '1% of each trade accumulates for $BASE.' },
              { step: '04', title: 'Earn Revenue', desc: 'SEQR operates sequencer, rewards flow to stakers.' },
            ].map((item) => (
              <div key={item.step} className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#0052FF]/30 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#0052FF] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Problem */}
            <div className="p-8 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <AlertTriangle className="text-red-600" size={20} />
                </div>
                The Problem
              </h3>
              <ul className="space-y-3">
                {[
                  'Sequencer revenue is highly centralized',
                  'Regular users cannot participate in profits',
                  'No transparent way to share in success',
                  'High barrier to entry for operation',
                ].map((problem, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold flex-shrink-0">{i+1}</span>
                    {problem}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="p-8 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0052FF]/10 flex items-center justify-center">
                  <Sparkles className="text-[#0052FF]" size={20} />
                </div>
                Our Solution
              </h3>
              <ul className="space-y-3">
                {[
                  'Democratized access through tokenization',
                  'Proportional rewards based on stake',
                  'Fully transparent treasury management',
                  'No minimum stake - anyone can participate',
                ].map((solution, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <Check className="text-[#0052FF] flex-shrink-0 mt-0.5" size={18} />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Tokenomics</h2>
          <p className="text-gray-500 text-center mb-12">Fair launch, no team allocation, 100% community driven</p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 text-center">
              <div className="text-lg font-bold text-gray-900 mb-1">1B</div>
              <div className="text-gray-500 text-xs">Total Supply</div>
            </div>
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 text-center">
              <div className="text-lg font-bold text-[#0052FF] mb-1">2%</div>
              <div className="text-gray-500 text-xs">Staking Rewards</div>
            </div>
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 text-center">
              <div className="text-lg font-bold text-[#0052FF] mb-1">1%</div>
              <div className="text-gray-500 text-xs">Treasury</div>
            </div>
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 text-center">
              <div className="text-lg font-bold text-orange-600 mb-1">Burned</div>
              <div className="text-gray-500 text-xs">LP Tokens</div>
            </div>
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 text-center">
              <div className="text-lg font-bold text-green-600 flex items-center justify-center gap-1 mb-1">
                Renounced <Check size={14} />
              </div>
              <div className="text-gray-500 text-xs">Ownership</div>
            </div>
            <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 text-center">
              <div className="text-lg font-bold text-[#0052FF] mb-1">100%</div>
              <div className="text-gray-500 text-xs">Fair Launch</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-12 rounded-3xl bg-[#0052FF] text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Earning?</h2>
            <p className="text-white/80 mb-8">Join the community and earn your share of Base sequencer revenue.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/stake">
                <button className="px-8 py-4 bg-white text-[#0052FF] font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                  Launch App
                </button>
              </Link>
              <a href="https://app.uniswap.org/swap?chain=base" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                  Buy on Uniswap
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
