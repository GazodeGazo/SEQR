import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { base } from 'wagmi/chains'
import { CONTRACTS } from './contracts'

export const config = getDefaultConfig({
  appName: 'SEQR Protocol',
  projectId: 'seqr-protocol', // WalletConnect project ID (optionnel pour test local)
  chains: [base],
  ssr: false,
})

// Configuration de la chain Base
export const baseChain = {
  id: CONTRACTS.CHAIN_ID,
  name: CONTRACTS.CHAIN_NAME,
  nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: [CONTRACTS.RPC_URL] },
  },
  blockExplorers: {
    default: { name: 'Basescan', url: CONTRACTS.BLOCK_EXPLORER },
  },
}
