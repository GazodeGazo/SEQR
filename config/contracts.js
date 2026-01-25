// SEQR Protocol - Contract Configuration
// This file is auto-updated by the launcher

export const CONTRACTS = {
  // Token contract (null = not deployed yet)
  TOKEN: null,
  
  // SwapHelper contract for buying/selling
  SWAP_HELPER: null,
  
  // Protocol status
  IS_LIVE: false,
  
  // Token info
  NAME: "SEQR",
  SYMBOL: "SEQR",
  DECIMALS: 18,
  TOTAL_SUPPLY: "1000000000",
  
  // Network - BASE MAINNET
  CHAIN_ID: 8453,
  CHAIN_NAME: "Base",
  RPC_URL: "https://mainnet.base.org",
  BLOCK_EXPLORER: "https://basescan.org",
  
  // External links
  TWITTER: "https://x.com/seqrbase",
  DEXSCREENER: null,
  BASESCAN_TOKEN: null,
};

// Helper functions
export const isProtocolLive = () => CONTRACTS.IS_LIVE && CONTRACTS.TOKEN !== null;

export const getTokenAddress = () => CONTRACTS.TOKEN;

export const getExplorerUrl = (address) => `${CONTRACTS.BLOCK_EXPLORER}/address/${address}`;

export const getDexScreenerUrl = () => {
  if (CONTRACTS.TOKEN) {
    return `https://dexscreener.com/base/${CONTRACTS.TOKEN}`;
  }
  return null;
};
