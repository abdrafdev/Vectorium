import React, { useState } from "react";
import {
  Wallet,
  ArrowRightLeft,
  Settings,
  Gift,
  ExternalLink,
  Sparkles,
  Zap,
  Shield,
  Copy,
  CheckCircle
} from "lucide-react";
import { EXPLORER_LINKS, TOKEN_MINT_ADDRESS } from "../config/constants";

export default function BuyWidget() {
  const [activeChain, setActiveChain] = useState("jupiter");
  const [copied, setCopied] = useState(false);

  const steps = [
    {
      icon: Wallet,
      title: "Connect Wallet",
      description: "Phantom / Solflare (Solana)"
    },
    {
      icon: ArrowRightLeft,
      title: "Select Token Pair",
      description: "USDT → VECT.AI"
    },
    {
      icon: Settings,
      title: "Set Slippage",
      description: "3–5% and confirm transaction"
    },
    {
      icon: Gift,
      title: "Claim Tokens",
      description: "Via Streamflow.finance vesting"
    }
  ];

  const chains = [
    {
      id: "jupiter",
      name: "Jupiter",
      network: "Solana",
      color: "from-gold to-goldLight",
      url: "https://jup.ag",
      icon: "🪐"
    },
    {
      id: "raydium",
      name: "Raydium",
      network: "Solana",
      color: "from-goldLight to-gold",
      url: "https://raydium.io/swap/",
      icon: "🌊"
    }
  ];

  const onCopyMint = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN_MINT_ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <>
      <section id="buy" className="section">
        {/* Top scan line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden">
          <div className="h-full bg-gradient-to-r from-transparent via-gold to-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-goldLight to-transparent animate-scan"></div>
          </div>
        </div>

        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-goldLight/5 rounded-full blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Orbiting rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none opacity-10">
          <div className="absolute inset-0 border border-gold/10 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-12 border border-goldLight/10 rounded-full animate-spin-reverse"></div>
        </div>

        <div className="container relative z-10 px-6 mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-6 rounded-full bg-midnight/60 backdrop-blur-xl border border-gold/30 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
              <Zap className="w-4 h-4 text-gold" />
              <span className="text-sm font-bold text-gold uppercase tracking-widest">Token Purchase</span>
              <div className="w-1 h-1 bg-gold rounded-full animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-gold via-goldLight to-gold bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                Buy VECT.AI
              </span>
            </h2>

            {/* Trust mini-strip */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-gray-400">
              <a
                href={EXPLORER_LINKS.solscanToken}
                target="_blank"
                rel="noopener noreferrer"
                className="badge border-gold/20 bg-black/20 hover:border-gold/50 transition-colors"
              >
                <Shield className="w-3.5 h-3.5 text-gold" />
                View on Solscan
              </a>

              <span className="badge font-mono border-white/10 bg-black/10">
                Mint: {TOKEN_MINT_ADDRESS.slice(0, 4)}…{TOKEN_MINT_ADDRESS.slice(-4)}
              </span>

              <button
                type="button"
                onClick={onCopyMint}
                className="badge border-white/10 bg-black/10 hover:border-gold/50 transition-colors"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-gold" />
                    Copy mint
                  </>
                )}
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-gold"></div>
              <div className="w-2 h-2 bg-gold rounded-full shadow-[0_0_12px_rgba(212,175,55,0.8)]"></div>
              <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-gold"></div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* How to Buy Card */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-gold via-goldLight to-gold rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
              
              <div className="relative h-full bg-gradient-to-br from-midnight/80 via-ink/80 to-midnight/80 backdrop-blur-2xl rounded-3xl border-2 border-gold/20 group-hover:border-gold/50 transition-all duration-700 overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                {/* Top scan line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-goldLight to-transparent animate-scan"></div>
                </div>

                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold/30 to-goldLight/30 rounded-xl border border-gold/40 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="text-3xl font-black text-transparent bg-gradient-to-r from-gold to-goldLight bg-clip-text">
                      How to Buy
                    </h3>
                  </div>

                  {/* Steps */}
                  <div className="space-y-6 mb-8">
                    {steps.map((step, idx) => {
                      const Icon = step.icon;
                      return (
                        <div key={idx} className="group/step relative flex gap-4">
                          {/* Step number line */}
                          {idx < steps.length - 1 && (
                            <div className="absolute left-5 top-12 bottom-0 w-[2px] bg-gradient-to-b from-gold/30 to-transparent"></div>
                          )}

                          {/* Icon */}
                          <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-gold/20 blur-xl rounded-xl opacity-0 group-hover/step:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative w-10 h-10 bg-gradient-to-br from-gold/30 to-goldLight/30 backdrop-blur-xl rounded-xl border border-gold/40 flex items-center justify-center group-hover/step:scale-110 group-hover/step:border-gold transition-all duration-500">
                              <Icon className="w-5 h-5 text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                            </div>
                            {/* Step number badge */}
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-gold to-goldLight rounded-full flex items-center justify-center text-[10px] font-black text-black border border-gold shadow-[0_0_12px_rgba(212,175,55,0.8)]">
                              {idx + 1}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 pt-1">
                            <h4 className="text-lg font-bold text-gold group-hover/step:text-goldLight transition-colors duration-300 mb-1">
                              {step.title}
                            </h4>
                            <p className="text-sm text-gray-400 group-hover/step:text-gray-300 transition-colors duration-300">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    {chains.map((chain) => (
                      <a
                        key={chain.id}
                        href={chain.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/cta relative block"
                      >
                        <div className={`absolute -inset-1 bg-gradient-to-r ${chain.color} rounded-xl blur-lg opacity-50 group-hover/cta:opacity-100 transition-opacity duration-500`}></div>
                        
                        <div className={`relative flex items-center justify-between px-6 py-4 bg-gradient-to-r ${chain.color} rounded-xl font-bold text-black transition-all duration-500 overflow-hidden group-hover/cta:scale-[1.02]`}>
                          <div className="absolute inset-0 bg-gradient-to-r from-goldLight via-white to-gold opacity-0 group-hover/cta:opacity-100 transition-opacity duration-700"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000"></div>
                          
                          <div className="relative flex items-center gap-3">
                            <span className="text-2xl">{chain.icon}</span>
                            <div>
                              <div className="text-sm font-bold">Open {chain.name}</div>
                              <div className="text-xs opacity-80">{chain.network} Network</div>
                            </div>
                          </div>
                          
                          <ExternalLink className="relative w-5 h-5 group-hover/cta:translate-x-1 transition-transform duration-300" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
              </div>
            </div>

            {/* Swap Widget Card */}
            <div className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-gold via-goldLight to-gold rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
              
              <div className="relative h-full bg-gradient-to-br from-midnight/80 via-ink/80 to-midnight/80 backdrop-blur-2xl rounded-3xl border-2 border-gold/20 group-hover:border-gold/50 transition-all duration-700 overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                {/* Top scan line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-goldLight to-transparent animate-scan"></div>
                </div>

                {/* Corner glow */}
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-goldLight/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative p-8 text-center">
                  {/* Header */}
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold/30 to-goldLight/30 rounded-xl border border-gold/40 flex items-center justify-center">
                      <ArrowRightLeft className="w-6 h-6 text-gold" />
                    </div>
                    <h4 className="text-3xl font-black text-transparent bg-gradient-to-r from-gold to-goldLight bg-clip-text">
                      Web3 Swap
                    </h4>
                  </div>

                  {/* Chain Selector */}
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 p-1.5 rounded-xl bg-midnight/60 backdrop-blur-xl border border-gold/30">
                      {chains.map((chain) => (
                        <button
                          key={chain.id}
                          onClick={() => setActiveChain(chain.id)}
                          className={`relative px-6 py-3 rounded-lg font-bold text-sm transition-all duration-500 ${
                            activeChain === chain.id
                              ? 'text-black'
                              : 'text-gray-400 hover:text-gold'
                          }`}
                        >
                          {activeChain === chain.id && (
                            <div className={`absolute inset-0 bg-gradient-to-r ${chain.color} rounded-lg`}></div>
                          )}
                          <span className="relative flex items-center gap-2">
                            <span>{chain.icon}</span>
                            {chain.network}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Swap Widget Area */}
                  <div className="relative p-8 bg-midnight/60 backdrop-blur-xl rounded-2xl border border-gold/20 mb-6">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
                    
                    <div className="space-y-4">
                      {/* Active chain button */}
                      {chains.filter(c => c.id === activeChain).map((chain) => (
                        <a
                          key={chain.id}
                          href={chain.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/launch relative block"
                        >
                          <div className={`absolute -inset-1 bg-gradient-to-r ${chain.color} rounded-xl blur-lg opacity-75 group-hover/launch:opacity-100 transition-opacity duration-500`}></div>
                          
                          <div className={`relative px-8 py-6 bg-gradient-to-r ${chain.color} rounded-xl font-black text-lg text-black transition-all duration-500 overflow-hidden group-hover/launch:scale-105`}>
                            <div className="absolute inset-0 bg-gradient-to-r from-goldLight via-white to-gold opacity-0 group-hover/launch:opacity-100 transition-opacity duration-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover/launch:translate-x-full transition-transform duration-1000"></div>
                            
                            <div className="relative flex items-center justify-center gap-3">
                              <span className="text-2xl">{chain.icon}</span>
                              <span>Launch {chain.name}</span>
                              <Zap className="w-5 h-5 group-hover/launch:rotate-12 transition-transform duration-300" />
                            </div>
                          </div>
                        </a>
                      ))}

                      {/* Info */}
                      <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-4">
                        <Shield className="w-3 h-3 text-gold" />
                        <span>Connect your wallet in the DEX to proceed</span>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: Shield, label: 'Secure' },
                      { icon: Zap, label: 'Fast' },
                      { icon: Sparkles, label: 'Easy' }
                    ].map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <div key={idx} className="p-3 bg-gold/5 rounded-xl border border-gold/20 hover:border-gold/40 hover:bg-gold/10 transition-all duration-500">
                          <Icon className="w-5 h-5 text-gold mx-auto mb-1" />
                          <div className="text-xs font-bold text-gray-400">{feature.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
