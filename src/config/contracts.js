// SEQR Protocol - Contract Configuration
// Auto-updated by launcher

export const CONTRACTS = {
  TOKEN: "0x8373bB24Db3dce813d4fC6BD29B95cCfD96793FB",
  SWAP_HELPER: "0x6368da28Ed8e45c43DA897cd6930fA8a2B0A13B0",
  IS_LIVE: true,
  NAME: "polo",
  SYMBOL: "POLO",
  DECIMALS: 18,
  TOTAL_SUPPLY: "1000000000",
  CHAIN_ID: 8453,
  CHAIN_NAME: "Base",
  RPC_URL: "https://mainnet.base.org",
  BLOCK_EXPLORER: "https://basescan.org",
  TWITTER: "https://x.com/seqrbase",
  DEXSCREENER: "https://dexscreener.com/base/0x8373bB24Db3dce813d4fC6BD29B95cCfD96793FB",
  BASESCAN_TOKEN: "https://basescan.org/token/0x8373bB24Db3dce813d4fC6BD29B95cCfD96793FB",
};
export const isProtocolLive = () => CONTRACTS.IS_LIVE && CONTRACTS.TOKEN !== null;
