// SEQR Protocol Contract Configuration
// This file contains all contract addresses and network configuration

export const CONTRACTS = {
  // Token contract (NOT DEPLOYED YET)
  TOKEN: null,
  
  // Staking contract (NOT DEPLOYED YET)
  STAKING: null,
  
  // Treasury wallet (NOT DEPLOYED YET)
  TREASURY: null,
  
  // Network - BASE MAINNET
  CHAIN_ID: 8453,
  CHAIN_NAME: 'Base',
  RPC_URL: 'https://mainnet.base.org',
  BLOCK_EXPLORER: 'https://basescan.org',
  
  // Status
  IS_LIVE: false,  // Set to true after launch
  
  // External links - MINUSCULE
  TWITTER: 'https://x.com/seqrbase',
  DISCORD: '#',
  DOCS: '/docs',
  UNISWAP: 'https://app.uniswap.org/swap?chain=base',
}

// Helper to check if the protocol is live
export const isProtocolLive = () => CONTRACTS.IS_LIVE && CONTRACTS.TOKEN !== null

// Helper to get block explorer URL for address
export const getExplorerUrl = (address) => {
  if (!address) return null
  return `${CONTRACTS.BLOCK_EXPLORER}/address/${address}`
}

// Helper to get block explorer URL for transaction
export const getTxExplorerUrl = (txHash) => {
  if (!txHash) return null
  return `${CONTRACTS.BLOCK_EXPLORER}/tx/${txHash}`
}

export default CONTRACTS
