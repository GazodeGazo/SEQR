import { useState, useEffect } from 'react'
import { 
  BookOpen, Target, Lightbulb, Coins, Lock, Landmark, 
  TrendingUp, Shield, AlertTriangle, HelpCircle,
  ChevronRight, ExternalLink, Check, Layers
} from 'lucide-react'

const sections = [
  { id: 'abstract', title: 'Abstract', icon: BookOpen },
  { id: 'problem', title: 'The Problem', icon: Target },
  { id: 'solution', title: 'The Solution', icon: Lightbulb },
  { id: 'how-it-works', title: 'How It Works', icon: Layers },
  { id: 'tokenomics', title: 'Tokenomics', icon: Coins },
  { id: 'staking', title: 'Staking Mechanism', icon: Lock },
  { id: 'treasury', title: 'Treasury Management', icon: Landmark },
  { id: 'roadmap', title: 'Roadmap', icon: TrendingUp },
  { id: 'security', title: 'Security & Audits', icon: Shield },
  { id: 'risks', title: 'Risks & Disclaimers', icon: AlertTriangle },
  { id: 'faq', title: 'FAQ', icon: HelpCircle },
]

export default function Docs() {
  const [activeSection, setActiveSection] = useState('abstract')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120
      
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-12">
          
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Documentation
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                        activeSection === section.id
                          ? 'bg-[#0052FF]/10 text-[#0052FF] font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon size={16} />
                      <span className="text-sm">{section.title}</span>
                    </button>
                  )
                })}
              </nav>
              
              {/* Quick Links */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Resources</h4>
                <div className="space-y-2">
                  <a href="https://x.com/seqrbase" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#0052FF]">
                    <ExternalLink size={14} /> Twitter
                  </a>
                  <a href="https://basescan.org" target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#0052FF]">
                    <ExternalLink size={14} /> Basescan
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                SEQR Protocol Documentation
              </h1>
              <p className="text-lg text-gray-500">
                Technical documentation for Sequencer Equity Quota Rewards
              </p>
            </div>

            {/* Abstract */}
            <section id="abstract" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-[#0052FF]/10 rounded-lg">
                  <BookOpen className="text-[#0052FF]" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Abstract</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  <strong>SEQR (Sequencer Equity Quota Rewards)</strong> is a decentralized protocol enabling fractional ownership of Base L2 sequencer infrastructure. Through community-driven resource pooling and transparent governance, SEQR democratizes access to sequencer operation rewards.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  The protocol addresses a fundamental challenge in Layer 2 economics: while sequencers generate substantial revenue from transaction ordering and fees, participation has historically been limited to well-capitalized entities. SEQR changes this paradigm by allowing any token holder to stake and earn proportional rewards.
                </p>
                <div className="bg-[#0052FF]/5 border border-[#0052FF]/10 rounded-xl p-6 mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Innovation</h4>
                  <p className="text-gray-600 text-sm">
                    SEQR transforms sequencer operation from a capital-intensive endeavor accessible only to large entities into a community-driven opportunity where everyone can participate and benefit from Base's growth.
                  </p>
                </div>
              </div>
            </section>

            {/* The Problem */}
            <section id="problem" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-red-100 rounded-lg">
                  <Target className="text-red-600" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">The Problem</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sequencer Centralization</h3>
                <p className="text-gray-600 leading-relaxed">
                  Base L2, like most optimistic rollups, currently operates with a centralized sequencer controlled by Coinbase. This architecture, while efficient, creates several challenges:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mt-6 not-prose">
                  {[
                    { title: 'Revenue Concentration', desc: 'All transaction fees and MEV flow to a single entity. Users who generate network activity receive no direct economic benefit.' },
                    { title: 'Barrier to Entry', desc: 'Future sequencer operation will require staking significant amounts of $BASE tokens. Individual participants lack the capital.' },
                    { title: 'Limited Transparency', desc: 'Revenue distribution and operational decisions remain opaque to the community that drives network adoption.' },
                    { title: 'Centralization Risk', desc: 'Single point of control for transaction ordering and network operations.' },
                  ].map((item, i) => (
                    <div key={i} className="bg-red-50 border border-red-100 rounded-xl p-4">
                      <h4 className="font-semibold text-red-900 mb-1 text-sm">{item.title}</h4>
                      <p className="text-red-800 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-8">
                  <p className="text-gray-600 text-sm italic">
                    "The sequencer is only a fast lane to get into Base. At any point, a user can also transact on Base through Ethereum directly. This brings the full decentralization and censorship resistance of the Ethereum validator set to transaction inclusion on Base."
                  </p>
                  <p className="text-gray-500 text-sm mt-2">— Jesse Pollak, Base Creator</p>
                </div>
              </div>
            </section>

            {/* The Solution */}
            <section id="solution" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-green-100 rounded-lg">
                  <Lightbulb className="text-green-600" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">The Solution</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  SEQR Protocol introduces three key mechanisms to democratize sequencer participation:
                </p>

                <div className="space-y-4 mt-6 not-prose">
                  {[
                    { num: '1', title: 'Community Treasury', desc: '1% of all $SEQR transactions accumulate in a transparent, on-chain treasury. These funds are designated for $BASE acquisition when sequencer staking becomes available.' },
                    { num: '2', title: 'Staking Rewards', desc: '2% of all transactions are distributed to $SEQR stakers as ETH rewards. Rewards are proportional to stake size and distributed continuously.' },
                    { num: '3', title: 'Collective Operation', desc: 'Once sufficient $BASE is accumulated, the treasury will stake tokens to operate a sequencer node. All generated revenue flows back to $SEQR stakers.' },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-4 p-4 bg-green-50 border border-green-100 rounded-xl">
                      <div className="w-8 h-8 bg-[#0052FF] rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-sm">{item.num}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-[#0052FF]/10 rounded-lg">
                  <Layers className="text-[#0052FF]" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">How It Works</h2>
              </div>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Acquire $SEQR', desc: 'Purchase tokens on Uniswap (Base). A 3% transaction tax funds the ecosystem.' },
                  { step: '2', title: 'Stake Tokens', desc: 'Deposit $SEQR into the staking contract. No minimum stake required.' },
                  { step: '3', title: 'Earn ETH Rewards', desc: 'Receive proportional ETH rewards from the 2% staking allocation. Claim after 7-day cooldown.' },
                  { step: '4', title: 'Treasury Growth', desc: '1% of transactions accumulate in treasury, building toward sequencer participation.' },
                  { step: '5', title: 'Sequencer Revenue', desc: 'When operational, sequencer fees are distributed to all $SEQR stakers.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start p-4 border border-gray-200 rounded-xl hover:border-[#0052FF]/30 transition-colors">
                    <div className="w-10 h-10 bg-[#0052FF] rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tokenomics */}
            <section id="tokenomics" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-yellow-100 rounded-lg">
                  <Coins className="text-yellow-600" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Tokenomics</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4">Token Details</h3>
                  <div className="space-y-3 text-sm">
                    {[
                      ['Token Name', 'SEQR Protocol'],
                      ['Symbol', '$SEQR'],
                      ['Network', 'Base (Chain ID: 8453)'],
                      ['Total Supply', '1,000,000,000'],
                      ['Decimals', '18'],
                    ].map(([label, value]) => (
                      <div key={label} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                        <span className="text-gray-500">{label}</span>
                        <span className="font-medium text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4">Tax Structure (3%)</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2 text-sm">
                        <span className="text-gray-600">Staking Rewards</span>
                        <span className="font-medium text-[#0052FF]">2%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-[#0052FF] rounded-full" style={{ width: '66.7%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2 text-sm">
                        <span className="text-gray-600">Treasury</span>
                        <span className="font-medium text-green-600">1%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '33.3%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {[
                  { label: 'LP Tokens', value: 'Burned', color: 'text-orange-600' },
                  { label: 'Ownership', value: 'Renounced', color: 'text-green-600', hasCheck: true },
                  { label: 'Team Allocation', value: '0%', color: 'text-gray-900' },
                  { label: 'Launch Type', value: '100% Fair', color: 'text-[#0052FF]' },
                ].map((item) => (
                  <div key={item.label} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                    <div className={`font-bold flex items-center justify-center gap-1 ${item.color}`}>
                      {item.value}
                      {item.hasCheck && <Check size={14} />}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Staking Mechanism */}
            <section id="staking" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-purple-100 rounded-lg">
                  <Lock className="text-purple-600" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Staking Mechanism</h2>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'Minimum Stake', value: 'None' },
                  { label: 'Lock Period', value: 'None' },
                  { label: 'Reward Cooldown', value: '7 days' },
                  { label: 'Reward Token', value: 'ETH' },
                ].map((item) => (
                  <div key={item.label} className="bg-purple-50 border border-purple-100 rounded-xl p-4 text-center">
                    <div className="text-xl font-bold text-purple-700">{item.value}</div>
                    <div className="text-xs text-purple-600 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Reward Calculation</h4>
                <div className="bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm text-center">
                  Your Rewards = (Your Staked Amount / Total Staked) × Rewards Pool
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Process</h4>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[#0052FF] font-medium">1.</span> Approve $SEQR spending</li>
                  <li className="flex items-start gap-2"><span className="text-[#0052FF] font-medium">2.</span> Call stake() with desired amount</li>
                  <li className="flex items-start gap-2"><span className="text-[#0052FF] font-medium">3.</span> Rewards accrue in real-time</li>
                  <li className="flex items-start gap-2"><span className="text-[#0052FF] font-medium">4.</span> Call claimRewards() after cooldown</li>
                  <li className="flex items-start gap-2"><span className="text-[#0052FF] font-medium">5.</span> Call unstake() anytime to withdraw principal</li>
                </ol>
              </div>
            </section>

            {/* Treasury Management */}
            <section id="treasury" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-emerald-100 rounded-lg">
                  <Landmark className="text-emerald-600" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Treasury Management</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                The treasury is the core mechanism for accumulating funds to acquire $BASE tokens for sequencer staking.
              </p>

              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
                <h4 className="font-semibold text-emerald-900 mb-4">Strategy</h4>
                <ol className="space-y-2 text-sm text-emerald-800">
                  <li className="flex items-start gap-2"><span className="font-medium">1.</span> Collect 1% of all $SEQR transactions</li>
                  <li className="flex items-start gap-2"><span className="font-medium">2.</span> Hold as ETH/stablecoins for stability</li>
                  <li className="flex items-start gap-2"><span className="font-medium">3.</span> Convert to $BASE when token launches</li>
                  <li className="flex items-start gap-2"><span className="font-medium">4.</span> Stake $BASE for sequencer operation rights</li>
                  <li className="flex items-start gap-2"><span className="font-medium">5.</span> Distribute sequencer revenue to $SEQR stakers</li>
                </ol>
              </div>

              <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Transparency</h4>
                <p className="text-gray-600 text-sm">
                  All treasury holdings are publicly viewable on-chain. Treasury address is published and trackable on Basescan.
                </p>
              </div>
            </section>

            {/* Roadmap */}
            <section id="roadmap" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-blue-100 rounded-lg">
                  <TrendingUp className="text-blue-600" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Roadmap</h2>
              </div>
              
              <div className="space-y-4">
                {[
                  { phase: 1, title: 'Launch & Accumulation', status: 'Current', items: ['Token deployment on Base', 'Staking contract activation', 'Treasury accumulation begins', 'Community building'] },
                  { phase: 2, title: '$BASE Acquisition', status: 'Upcoming', items: ['Monitor $BASE token launch', 'Execute strategic purchases', 'Optimize treasury allocation', 'Expand partnerships'] },
                  { phase: 3, title: 'Sequencer Activation', status: 'Future', items: ['Meet staking threshold', 'Deploy sequencer node', 'Begin operations', 'Initiate revenue distribution'] },
                  { phase: 4, title: 'Scaling & Governance', status: 'Vision', items: ['Multiple sequencer nodes', 'Cross-chain expansion', 'Community governance', 'Protocol optimization'] },
                ].map((phase) => (
                  <div key={phase.phase} className={`border rounded-xl p-6 ${phase.status === 'Current' ? 'border-[#0052FF] bg-[#0052FF]/5' : 'border-gray-200'}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${phase.status === 'Current' ? 'bg-[#0052FF] text-white' : 'bg-gray-200 text-gray-600'}`}>
                        <span className="font-bold">{phase.phase}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{phase.title}</h3>
                        <span className={`text-sm ${phase.status === 'Current' ? 'text-[#0052FF] font-medium' : 'text-gray-500'}`}>{phase.status}</span>
                      </div>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <ChevronRight size={14} className="text-[#0052FF]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Security */}
            <section id="security" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-green-100 rounded-lg">
                  <Shield className="text-green-600" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Security & Audits</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                  <h3 className="font-semibold text-green-900 mb-4">Contract Security</h3>
                  <ul className="space-y-2 text-sm text-green-800">
                    {['Ownership permanently renounced', 'No admin functions or backdoors', 'Fixed supply (no mint function)', 'LP tokens burned forever'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check size={14} className="text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                  <h3 className="font-semibold text-green-900 mb-4">Verification</h3>
                  <ul className="space-y-2 text-sm text-green-800">
                    {['Source code verified on Basescan', 'Open source and auditable', 'Standard ERC-20 implementation', 'Publicly accessible contracts'].map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check size={14} className="text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Risks */}
            <section id="risks" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-yellow-100 rounded-lg">
                  <AlertTriangle className="text-yellow-600" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Risks & Disclaimers</h2>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <div className="space-y-4 text-sm text-yellow-800">
                  <div>
                    <h4 className="font-semibold text-yellow-900">Investment Risks</h4>
                    <p className="mt-1">Cryptocurrency investments are highly volatile. Past performance does not guarantee future results. Only invest what you can afford to lose.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-900">Protocol Risks</h4>
                    <p className="mt-1">Smart contract risk exists despite security measures. The protocol depends on Base network development. $BASE token launch timing is uncertain.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-900">Regulatory Risks</h4>
                    <p className="mt-1">The regulatory landscape is evolving. Future regulations may impact protocol operations.</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-yellow-200">
                  <p className="text-yellow-800 text-xs">
                    This documentation is for informational purposes only and does not constitute financial advice. Always conduct your own research before making investment decisions.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-16 scroll-mt-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-indigo-100 rounded-lg">
                  <HelpCircle className="text-indigo-600" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
              </div>
              
              <div className="space-y-4">
                {[
                  { q: 'What is SEQR?', a: 'SEQR (Sequencer Equity Quota Rewards) is a protocol that enables fractional ownership of Base L2 sequencer infrastructure through community pooling.' },
                  { q: 'How do I earn rewards?', a: 'Buy $SEQR on Uniswap, stake your tokens in the staking contract, and earn ETH rewards proportional to your stake from the 2% trading tax.' },
                  { q: 'When will SEQR operate a sequencer?', a: 'This depends on Base\'s sequencer decentralization timeline and $BASE token availability. The treasury is actively accumulating funds.' },
                  { q: 'Is there a minimum stake?', a: 'No. You can stake any amount of $SEQR.' },
                  { q: 'How often can I claim rewards?', a: 'You can claim rewards every 7 days after your last stake or claim action.' },
                  { q: 'Can I unstake anytime?', a: 'Yes. Your principal is never locked. Only reward claims have a cooldown.' },
                  { q: 'What happens to the 3% tax?', a: '2% goes to staking rewards (ETH) and 1% goes to the treasury for $BASE acquisition.' },
                  { q: 'Is the contract safe?', a: 'The contract has ownership renounced, LP burned, and no mint function. However, all DeFi carries inherent smart contract risk.' },
                ].map((faq, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                    <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
                    <p className="text-gray-600 text-sm">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  )
}

