import React, { useState } from "react";
import { Coins, TrendingUp, Lock, Zap, Shield, Rocket } from "lucide-react";

export default function Tokenomics() {
  const [hoveredBar, setHoveredBar] = useState(null);

  const allocations = [
    { label: "Private Sale", percent: 25, icon: Lock, color: "from-gold to-goldLight" },
    { label: "Public Launch", percent: 20, icon: Rocket, color: "from-goldLight to-gold" },
    { label: "Team & Advisors", percent: 15, icon: Shield, color: "from-gold via-goldLight to-gold" },
    { label: "Ecosystem Growth", percent: 25, icon: TrendingUp, color: "from-goldLight to-gold" },
    { label: "Treasury & Reserves", percent: 15, icon: Zap, color: "from-gold to-goldLight" }
  ];

  const priceInfo = [
    { label: "Private Sale Price", value: "$0.05 USD", icon: Coins },
    { label: "Listing Target", value: "$0.20 USD", icon: TrendingUp },
    { label: "Accepted", value: "USDT / USDC / SOL / BNB", icon: Zap }
  ];

  return (
    <>
      <section id="tokenomics" className="section">
        {/* Futuristic top glow line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden">
          <div className="h-full bg-gradient-to-r from-transparent via-gold to-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-goldLight to-transparent animate-scan"></div>
          </div>
        </div>

        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-goldLight/5 rounded-full blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Orbiting ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-10">
          <div className="absolute inset-0 border border-gold/20 rounded-full animate-spin-slow"></div>
        </div>

        <div className="container relative z-10 px-6 mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-6 rounded-full bg-midnight/60 backdrop-blur-xl border border-gold/30 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
              <Coins className="w-4 h-4 text-gold" />
              <span className="text-sm font-bold text-gold uppercase tracking-widest">Token Economics</span>
              <div className="w-1 h-1 bg-gold rounded-full animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
            </div>

            <h3 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-gold via-goldLight to-gold bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                Tokenomics Snapshot
              </span>
            </h3>

            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-gold"></div>
              <div className="w-2 h-2 bg-gold rounded-full shadow-[0_0_12px_rgba(212,175,55,0.8)]"></div>
              <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-gold"></div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Price Info Card */}
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-gold via-goldLight to-gold rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-midnight/80 via-ink/80 to-midnight/80 backdrop-blur-2xl rounded-3xl border-2 border-gold/20 group-hover:border-gold/50 transition-all duration-700 overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                {/* Top scan line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-goldLight to-transparent animate-scan"></div>
                </div>

                {/* Corner glows */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative p-8">
                  <div className="space-y-6">
                    {priceInfo.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div 
                          key={item.label}
                          className="group/item relative flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-r from-gold/5 to-transparent border border-gold/10 hover:border-gold/30 hover:bg-gold/10 transition-all duration-500"
                        >
                          {/* Scan effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                          
                          {/* Icon */}
                          <div className="relative flex-shrink-0">
                            <div className="absolute inset-0 bg-gold/20 blur-xl rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative w-12 h-12 bg-gradient-to-br from-gold/30 to-goldLight/30 backdrop-blur-xl rounded-xl border border-gold/40 flex items-center justify-center group-hover/item:scale-110 group-hover/item:border-gold transition-all duration-500">
                              <Icon className="w-6 h-6 text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">
                              {item.label}
                            </div>
                            <div className="text-xl font-black text-transparent bg-gradient-to-r from-gold to-goldLight bg-clip-text">
                              {item.value}
                            </div>
                          </div>

                          {/* Arrow indicator */}
                          <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-all duration-500">
                            <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Footer note */}
                  <div className="mt-6 pt-6 border-t border-gold/10">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <div className="w-1 h-1 bg-gold/50 rounded-full animate-pulse"></div>
                      <span>Full breakdown will be provided in documentation</span>
                    </div>
                  </div>
                </div>

                {/* Bottom glow */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
              </div>
            </div>

            {/* Allocation Card */}
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-gold via-goldLight to-gold rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
              
              <div className="relative bg-gradient-to-br from-midnight/80 via-ink/80 to-midnight/80 backdrop-blur-2xl rounded-3xl border-2 border-gold/20 group-hover:border-gold/50 transition-all duration-700 overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.1)]">
                {/* Top scan line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-goldLight to-transparent animate-scan"></div>
                </div>

                {/* Corner glows */}
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-goldLight/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold/30 to-goldLight/30 rounded-xl border border-gold/40 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-gold" />
                    </div>
                    <h4 className="text-2xl font-black text-transparent bg-gradient-to-r from-gold to-goldLight bg-clip-text">
                      Allocation Preview
                    </h4>
                  </div>

                  <div className="space-y-5">
                    {allocations.map((item, idx) => {
                      const Icon = item.icon;
                      const isHovered = hoveredBar === idx;
                      
                      return (
                        <div 
                          key={item.label}
                          onMouseEnter={() => setHoveredBar(idx)}
                          onMouseLeave={() => setHoveredBar(null)}
                          className="group/bar relative"
                        >
                          {/* Label row */}
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} p-1.5 transition-all duration-500 ${
                                isHovered ? 'scale-110 shadow-[0_0_20px_rgba(212,175,55,0.5)]' : 'scale-100'
                              }`}>
                                <Icon className="w-full h-full text-black" />
                              </div>
                              <span className={`text-sm font-bold transition-colors duration-300 ${
                                isHovered ? 'text-gold' : 'text-gray-300'
                              }`}>
                                {item.label}
                              </span>
                            </div>
                            <span className={`text-sm font-black transition-all duration-300 ${
                              isHovered ? 'text-gold text-lg scale-110' : 'text-gray-400'
                            }`}>
                              {item.percent}%
                            </span>
                          </div>

                          {/* Progress bar */}
                          <div className="relative h-3 bg-midnight/60 rounded-full overflow-hidden border border-gold/10">
                            {/* Background glow */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-5 transition-opacity duration-500 ${
                              isHovered ? 'opacity-20' : ''
                            }`}></div>
                            
                            {/* Fill */}
                            <div 
                              className={`relative h-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out`}
                              style={{
                                width: `${item.percent}%`,
                                transitionDelay: `${idx * 100}ms`
                              }}
                            >
                              {/* Shine effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-scan"></div>
                              
                              {/* Glow */}
                              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} blur-sm transition-opacity duration-500 ${
                                isHovered ? 'opacity-100' : 'opacity-50'
                              }`}></div>
                            </div>

                            {/* Hover pulse */}
                            {isHovered && (
                              <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-r ${item.color} rounded-full animate-ping`}></div>
                            )}
                          </div>
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

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      </section>

    </>
  );
}
