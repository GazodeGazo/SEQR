// SEQR Protocol - Contract Configuration
// Auto-updated by launcher

export const CONTRACTS = {
  TOKEN: "0xB2157aF8AC961926dc11558A4C7991924c86F248",
  SWAP_HELPER: "0x4B1176c9922EE48dad0D59f2078422B829b26Fc0",
  STAKING: "0xcEe072685F9Fa22d9F950cF6D4298F1Ac2E7942A",
  IS_LIVE: true,
  NAME: "SEQR",
  SYMBOL: "SEQR",
  DECIMALS: 18,
  TOTAL_SUPPLY: "1000000000",
  CHAIN_ID: 8453,
  CHAIN_NAME: "Base",
  RPC_URL: "https://mainnet.base.org",
  BLOCK_EXPLORER: "https://basescan.org",
  TWITTER: "https://x.com/seqrbase",
  DEXSCREENER: "https://dexscreener.com/base/0xB2157aF8AC961926dc11558A4C7991924c86F248",
  BASESCAN_TOKEN: "https://basescan.org/token/0xB2157aF8AC961926dc11558A4C7991924c86F248",
};
export const isProtocolLive = () => CONTRACTS.IS_LIVE && CONTRACTS.TOKEN !== null;
