// SEQR Protocol - Contract Configuration
// Auto-updated by launcher

export const CONTRACTS = {
  TOKEN: "0x80411c8De40b8Bfd9d0aA6D9684D79CB41Ae588f",
  SWAP_HELPER: "0x2f12297424eA68f22e7774eBC8E60B58a32aE78f",
  STAKING: "0x6e899682333E2BC9908677925d4e1Bb998636a6C",
  IS_LIVE: true,
  NAME: "max",
  SYMBOL: "MAX",
  DECIMALS: 18,
  TOTAL_SUPPLY: "1000000000",
  CHAIN_ID: 8453,
  CHAIN_NAME: "Base",
  RPC_URL: "https://mainnet.base.org",
  BLOCK_EXPLORER: "https://basescan.org",
  TWITTER: "https://x.com/seqrbase",
  DEXSCREENER: "https://dexscreener.com/base/0x80411c8De40b8Bfd9d0aA6D9684D79CB41Ae588f",
  BASESCAN_TOKEN: "https://basescan.org/token/0x80411c8De40b8Bfd9d0aA6D9684D79CB41Ae588f",
};
export const isProtocolLive = () => CONTRACTS.IS_LIVE && CONTRACTS.TOKEN !== null;
