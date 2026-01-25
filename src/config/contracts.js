// SEQR Protocol - Contract Configuration
// Auto-updated by launcher

export const CONTRACTS = {
  TOKEN: "0x85D9B9bDe17C0dFB13084E4B64ee40526161F8c5",
  SWAP_HELPER: "0xF9a00A73E471925998D6Bd7F6e9100a170AcC14B",
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
  DEXSCREENER: "https://dexscreener.com/base/0x85D9B9bDe17C0dFB13084E4B64ee40526161F8c5",
  BASESCAN_TOKEN: "https://basescan.org/token/0x85D9B9bDe17C0dFB13084E4B64ee40526161F8c5",
};
export const isProtocolLive = () => CONTRACTS.IS_LIVE && CONTRACTS.TOKEN !== null;
