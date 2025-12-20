// Single source of truth for all public-facing constants

// Solana token mint (used for explorers + DEX discovery)
export const TOKEN_MINT_ADDRESS = "J7gr5uPExeRmTc6GdVNyXj4zmYdXmYLYFC5TkkDngm4x";

// Backwards-compat alias (avoid breaking older imports)
export const CONTRACT_ADDRESS = TOKEN_MINT_ADDRESS;

export const EXPLORER_LINKS = {
  solscanToken: `https://solscan.io/token/${TOKEN_MINT_ADDRESS}`,
  solscanAccount: (address) => `https://solscan.io/account/${address}`
};

export const COMMUNITY_LINKS = {
  telegram: "https://t.me/VectoriumProject",
  discord: "https://discord.gg/jy6P6wp4h",
  twitter: "https://x.com/vectorium_co",
  linkedin: "https://www.linkedin.com/company/vectorium/",
  instagram: "https://www.instagram.com/vectorium.co?igsh=cnVvcHJiYTdyem1o",
  facebook: "https://www.facebook.com/share/1FmhXR6FWW/?mibextid=wwXIfr"
};

// Public documents (served from CRA public/)
export const DOCS = {
  whitepaper: "/whitepaper.pdf",
  technicalPaper: "/techdoc.pdf",
  tokenomics: "/tokenomics.pdf"
};
