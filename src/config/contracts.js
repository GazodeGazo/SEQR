// SEQR Protocol - Contract Configuration
// Pre-launch mode

export const CONTRACTS = {
  TOKEN: null,
  SWAP_HELPER: null,
  IS_LIVE: false,
  NAME: "SEQR",
  SYMBOL: "SEQR",
  DECIMALS: 18,
  TOTAL_SUPPLY: "1000000000",
  CHAIN_ID: 8453,
  CHAIN_NAME: "Base",
  RPC_URL: "https://mainnet.base.org",
  BLOCK_EXPLORER: "https://basescan.org",
  TWITTER: "https://x.com/seqrbase",
  DEXSCREENER: null,
  BASESCAN_TOKEN: null,
};
export const isProtocolLive = () => CONTRACTS.IS_LIVE && CONTRACTS.TOKEN !== null;
