import { useState } from 'react'
import { motion } from 'framer-motion'
import { Wallet, TrendingUp, Clock, ArrowUpRight, ArrowDownLeft, Info, ExternalLink } from 'lucide-react'
import { useAccount, useReadContract } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { CONTRACTS, isProtocolLive } from '../config/contracts'

// ABI minimal pour lire le balance ERC20
const erc20Abi = [
  {
    name: 'balanceOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }]
  }
]

// ABI minimal pour lire les données du staking
const stakingAbi = [
  {
    name: 'totalStaked',
    type: 'function',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ name: '', type: 'uint256' }]
  },
  {
    name: 'getUniqueStakers',
    type: 'function', 
    stateMutability: 'view',
    inputs: [],
    outputs: [{ name: '', type: 'uint256' }]
  },
  {
    name: 'totalRewardsDistributed',
    type: 'function',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ name: '', type: 'uint256' }]
  }
]

const Stake = () => {
  const [activeTab, setActiveTab] = useState('stake')
  const [amount, setAmount] = useState('')
  
  const isLive = isProtocolLive()
  const hasStaking = CONTRACTS.STAKING && CONTRACTS.STAKING !== '' && CONTRACTS.STAKING !== null
  
  // Hook wagmi pour récupérer l'adresse du wallet connecté
  const { address, isConnected } = useAccount()

  // Hook wagmi pour lire le balance du token
  const { data: tokenBalance, isLoading: isBalanceLoading } = useReadContract({
    address: CONTRACTS.TOKEN,
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: [address],
    query: {
      enabled: isConnected && isLive && CONTRACTS.TOKEN !== null,
    }
  })

  // Lire les données du contrat de staking
  const { data: totalStaked } = useReadContract({
    address: CONTRACTS.STAKING,
    abi: stakingAbi,
    functionName: 'totalStaked',
    query: {
      enabled: isLive && hasStaking,
    }
  })

  const { data: uniqueStakers } = useReadContract({
    address: CONTRACTS.STAKING,
    abi: stakingAbi,
    functionName: 'getUniqueStakers',
    query: {
      enabled: isLive && hasStaking,
    }
  })

  const { data: totalRewardsDistributed } = useReadContract({
    address: CONTRACTS.STAKING,
    abi: stakingAbi,
    functionName: 'totalRewardsDistributed',
    query: {
      enabled: isLive && hasStaking,
    }
  })

  // Formater le balance
  const formatBalance = (balance) => {
    if (!balance) return '0'
    const formatted = Number(balance) / 1e18
    if (formatted === 0) return '0'
    if (formatted < 0.001) return '<0.001'
    if (formatted < 1) return formatted.toFixed(4)
    if (formatted < 1000) return formatted.toFixed(2)
    return formatted.toLocaleString('en-US', { maximumFractionDigits: 2 })
  }

  const formattedBalance = formatBalance(tokenBalance)

  // Affichage du balance selon l'état
  const getBalanceDisplay = () => {
    if (!isLive) return '—'
    if (!isConnected) return 'Connect wallet'
    if (isBalanceLoading) return '...'
    return `${formattedBalance} ${CONTRACTS.SYMBOL || 'SEQR'}`
  }

  // Formater les valeurs
  const formatTokenAmount = (amount) => {
    if (!amount) return '0'
    const formatted = Number(amount) / 1e18
    if (formatted === 0) return '0'
    if (formatted < 0.001) return '<0.001'
    if (formatted < 1) return formatted.toFixed(4)
    if (formatted < 1000) return formatted.toFixed(2)
    return formatted.toLocaleString('en-US', { maximumFractionDigits: 2 })
  }

  // Stats globales dynamiques selon IS_LIVE
  const globalStats = isLive
    ? [
        { 
          label: 'Total Staked', 
          value: hasStaking && totalStaked ? formatTokenAmount(totalStaked) : '0', 
          icon: Wallet 
        },
        { label: 'Current APY', value: '0%', icon: TrendingUp },
        { label: 'Next Distribution', value: '24h', icon: Clock },
      ]
    : [
        { label: 'Total Staked', value: '—', icon: Wallet },
        { label: 'Current APY', value: '—', icon: TrendingUp },
        { label: 'Next Distribution', value: '—', icon: Clock },
      ]

  const handleStake = (e) => {
    e.preventDefault()
    if (!isConnected) return
    // TODO: Implement actual staking logic with CONTRACTS.STAKING
    console.log('Staking', amount, CONTRACTS.SYMBOL)
  }

  const handleUnstake = (e) => {
    e.preventDefault()
    if (!isConnected) return
    // TODO: Implement actual unstaking logic with CONTRACTS.STAKING
    console.log('Unstaking', amount, CONTRACTS.SYMBOL)
  }

  const handleClaimRewards = () => {
    if (!isConnected) return
    // TODO: Implement actual claim logic with CONTRACTS.STAKING
    console.log('Claiming rewards')
  }

  const handleMaxClick = () => {
    if (tokenBalance) {
      const maxAmount = Number(tokenBalance) / 1e18
      setAmount(maxAmount.toString())
    }
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
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Stake {CONTRACTS.SYMBOL || 'SEQR'}</h1>
              <p className="text-gray-500">Stake your tokens to earn sequencer revenue</p>
            </div>
            {isLive && (
              <div className="flex gap-3">
                <a 
                  href={CONTRACTS.DEXSCREENER} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0052FF]/10 text-[#0052FF] rounded-lg text-sm font-medium hover:bg-[#0052FF]/20 transition-colors"
                >
                  <ExternalLink size={16} />
                  DexScreener
                </a>
                <a 
                  href={CONTRACTS.BASESCAN_TOKEN} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  <ExternalLink size={16} />
                  Basescan
                </a>
              </div>
            )}
          </div>
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
              className="p-6 rounded-2xl bg-white border border-gray-200 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0052FF]/10 flex items-center justify-center">
                <stat.icon className="text-[#0052FF]" size={24} />
              </div>
              <div>
                <div className={`text-2xl font-bold ${stat.value === '—' ? 'text-gray-300' : 'text-gray-900'}`}>
                  {stat.value}
                </div>
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
            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Your Position</h2>
              
              <div className="space-y-4">
                {/* Your Balance - affiche le vrai balance */}
                <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                  <div className="text-sm text-green-700 mb-1">Your Balance</div>
                  <div className={`text-2xl font-bold ${!isLive || !isConnected ? 'text-gray-300' : 'text-green-700'}`}>
                    {getBalanceDisplay()}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Staked Balance</div>
                  <div className={`text-2xl font-bold ${isLive && isConnected ? 'text-gray-900' : 'text-gray-300'}`}>
                    {isLive && isConnected ? '0' : '—'} <span className="text-base font-normal text-gray-400">{CONTRACTS.SYMBOL || 'SEQR'}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0052FF]/5 border border-[#0052FF]/20">
                  <div className="text-sm text-[#0052FF] mb-1">Pending Rewards</div>
                  <div className={`text-2xl font-bold ${isLive && isConnected ? 'text-gray-900' : 'text-gray-300'}`}>
                    {isLive && isConnected ? '0' : '—'} <span className="text-base font-normal text-gray-400">ETH</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">Pool Share</div>
                    <div className={`text-lg font-bold ${isLive && isConnected ? 'text-gray-900' : 'text-gray-300'}`}>
                      {isLive && isConnected ? '0%' : '—'}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">Staking Time</div>
                    <div className={`text-lg font-bold ${isLive && isConnected ? 'text-gray-900' : 'text-gray-300'}`}>
                      {isLive && isConnected ? '0d' : '—'}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleClaimRewards}
                  className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                    isLive && isConnected
                      ? 'bg-[#0052FF] text-white hover:bg-[#0041CC]' 
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!isLive || !isConnected}
                >
                  {isConnected ? 'Claim Rewards' : 'Connect to Claim'}
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
            <div className="p-6 rounded-2xl bg-white border border-gray-200">
              {/* Tabs */}
              <div className="flex gap-2 mb-6 p-1 bg-gray-100 rounded-xl">
                <button
                  onClick={() => setActiveTab('stake')}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'stake'
                      ? 'bg-white text-[#0052FF] shadow-sm'
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
                      ? 'bg-white text-[#0052FF] shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <ArrowDownLeft size={18} />
                  Unstake
                </button>
              </div>

              <form onSubmit={activeTab === 'stake' ? handleStake : handleUnstake}>
                {/* Amount Input */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700">Amount</label>
                    <span className="text-sm text-gray-500">
                      Balance: <span className={`font-medium ${!isLive || !isConnected ? 'text-gray-400' : 'text-gray-700'}`}>
                        {getBalanceDisplay()}
                      </span>
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      disabled={!isLive || !isConnected}
                      className={`w-full px-4 py-4 pr-24 rounded-xl border border-gray-200 text-2xl font-semibold text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#0052FF] focus:ring-2 focus:ring-[#0052FF]/20 transition-all ${
                        !isLive || !isConnected ? 'bg-gray-50 cursor-not-allowed' : ''
                      }`}
                    />
                    <button
                      type="button"
                      onClick={handleMaxClick}
                      disabled={!isLive || !isConnected}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                        isLive && isConnected
                          ? 'bg-[#0052FF]/10 text-[#0052FF] hover:bg-[#0052FF]/20' 
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
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
                    <span className={`font-semibold ${isLive ? 'text-gray-900' : 'text-gray-300'}`}>
                      {isLive ? '0%' : '—'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Daily Earnings</span>
                    <span className={`font-semibold ${isLive ? 'text-gray-900' : 'text-gray-300'}`}>
                      {isLive ? '0 ETH' : '—'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Monthly Earnings</span>
                    <span className={`font-semibold ${isLive ? 'text-gray-900' : 'text-gray-300'}`}>
                      {isLive ? '0 ETH' : '—'}
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                {!isConnected ? (
                  <div className="flex justify-center">
                    <ConnectButton />
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={!isLive}
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-colors ${
                      isLive 
                        ? 'bg-[#0052FF] text-white hover:bg-[#0041CC]' 
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {activeTab === 'stake' 
                      ? `Stake ${CONTRACTS.SYMBOL || 'SEQR'}` 
                      : `Unstake ${CONTRACTS.SYMBOL || 'SEQR'}`
                    }
                  </button>
                )}
              </form>
            </div>

            {/* Token Info - Only show when live */}
            {isLive && (
              <div className="mt-6 p-6 rounded-2xl bg-white border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Token Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Name</span>
                    <span className="font-medium text-gray-900">{CONTRACTS.NAME}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Symbol</span>
                    <span className="font-medium text-gray-900">${CONTRACTS.SYMBOL}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Network</span>
                    <span className="font-medium text-gray-900">{CONTRACTS.CHAIN_NAME}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-500">Contract</span>
                    <a 
                      href={CONTRACTS.BASESCAN_TOKEN} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-[#0052FF] hover:underline"
                    >
                      {CONTRACTS.TOKEN.slice(0, 6)}...{CONTRACTS.TOKEN.slice(-4)}
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Recent Transactions */}
            <div className="mt-6 p-6 rounded-2xl bg-white border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Transactions</h3>
              <div className="text-center py-8 text-gray-400">
                {isConnected ? 'No transactions yet' : 'Connect wallet to view transactions'}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default Stake
