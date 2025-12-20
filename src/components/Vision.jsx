import React, { useState } from "react";
import { Brain, Layers, ShieldCheck, Sparkles, Zap, Lock } from "lucide-react";

export default function Vision() {
  const [activeCard, setActiveCard] = useState(null);

  const items = [
    {
      title: "AI-Powered Decentralization",
      desc: "Bridging human and machine intelligence through distributed neural networks and collective consciousness.",
      icon: Brain,
      accentIcon: Sparkles,
      features: ["Autonomous Decision Making", "Collective Intelligence", "Neural Consensus"]
    },
    {
      title: "Real-World Tokenization",
      desc: "Connecting AI output with verifiable blockchain assets and tangible economic value streams.",
      icon: Layers,
      accentIcon: Zap,
      features: ["Asset-Backed Tokens", "Smart Verification", "On-Chain Proof"]
    },
    {
      title: "Ethical, Scalable, Sustainable",
      desc: "European-led innovation championing global longevity, trust, and accountability in decentralized systems.",
      icon: ShieldCheck,
      accentIcon: Lock,
      features: ["Carbon Neutral", "Privacy First", "Community Governed"]
    },
  ];

  return (
    <>
      <section id="vision" className="section">
        {/* Futuristic top glow line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden">
          <div className="h-full bg-gradient-to-r from-transparent via-gold to-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-goldLight to-transparent animate-scan"></div>
          </div>
        </div>

        {/* Glassmorphic background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-goldLight/5 rounded-full blur-[120px] animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[150px]"></div>
        </div>

        {/* Orbiting rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-20">
          <div className="absolute inset-0 border border-gold/10 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-12 border border-goldLight/10 rounded-full animate-spin-reverse"></div>
        </div>

        <div className="container relative z-10 px-6 mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-6 rounded-full bg-midnight/60 backdrop-blur-xl border border-gold/30 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-bold text-gold uppercase tracking-widest">Core Principles</span>
              <div className="w-1 h-1 bg-gold rounded-full animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
            </div>

            {/* Title with gold gradient */}
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-gold via-goldLight to-gold bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                Why It Matters
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
              Three revolutionary pillars defining the Vectorium approach to decentralized intelligence and the future of autonomous systems.
            </p>

            {/* Decorative line */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-gold"></div>
              <div className="w-2 h-2 bg-gold rounded-full shadow-[0_0_12px_rgba(212,175,55,0.8)]"></div>
              <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-gold"></div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {items.map((item, idx) => {
              const Icon = item.icon;
              const AccentIcon = item.accentIcon;
              const isActive = activeCard === idx;
              
              return (
                <div
                  key={item.title}
                  onMouseEnter={() => setActiveCard(idx)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`group relative transition-all duration-700 cursor-pointer ${
                    isActive ? '-translate-y-3 scale-[1.02]' : ''
                  }`}
                  style={{
                    transitionDelay: `${idx * 60}ms`
                  }}
                >
                  {/* Outer glow ring */}
                  <div className={`absolute -inset-2 bg-gradient-to-br from-gold via-goldLight to-gold rounded-3xl blur-xl transition-opacity duration-700 ${
                    isActive ? 'opacity-40' : 'opacity-0'
                  }`}></div>

                  {/* Card container */}
                  <div className={`relative h-full bg-gradient-to-br from-midnight/80 via-ink/80 to-midnight/80 backdrop-blur-2xl rounded-3xl border-2 transition-all duration-700 overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.1)] ${
                    isActive 
                      ? 'border-gold/50 shadow-[0_0_80px_rgba(212,175,55,0.3)]' 
                      : 'border-gold/20 group-hover:border-gold/40'
                  }`}>
                    {/* Top scan line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent">
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-goldLight to-transparent transition-all duration-1000 ${
                        isActive ? 'animate-scan' : ''
                      }`}></div>
                    </div>

                   
                    {/* Corner glow effects */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-goldLight/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative p-8">
                      {/* Icon section */}
                      <div className="relative mb-6">
                        {/* Orbiting ring around icon */}
                        <div className={`absolute inset-0 -m-2 border border-gold/20 rounded-2xl transition-all duration-700 ${
                          isActive ? 'animate-spin-slow scale-110' : 'scale-100'
                        }`}></div>
                        
                        {/* Glow layers */}
                        <div className={`absolute inset-0 bg-gold/20 blur-2xl rounded-2xl transition-all duration-700 ${
                          isActive ? 'scale-150 opacity-40' : 'scale-100 opacity-20'
                        }`}></div>
                        
                        {/* Icon container */}
                        <div className="relative w-16 h-16 bg-gradient-to-br from-gold/30 via-goldLight/30 to-gold/30 backdrop-blur-xl rounded-2xl border-2 border-gold/40 flex items-center justify-center group-hover:border-gold transition-all duration-700 shadow-[0_0_30px_rgba(212,175,55,0.3)] group-hover:scale-110">
                          <Icon className="w-8 h-8 text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
                          
                          {/* Corner accents */}
                          <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gold rounded-tl-lg transition-opacity duration-500 ${
                            isActive ? 'opacity-100' : 'opacity-0'
                          }`}></div>
                          <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gold rounded-br-lg transition-opacity duration-500 ${
                            isActive ? 'opacity-100' : 'opacity-0'
                          }`}></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative space-y-4">
                        <div className="flex items-start justify-between">
                          <h3 className="text-2xl font-black text-transparent bg-gradient-to-r from-gold via-goldLight to-white bg-clip-text group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300">
                            {item.title}
                          </h3>
                          <AccentIcon className={`w-5 h-5 text-gold/50 group-hover:text-gold transition-all duration-500 ${
                            isActive ? 'rotate-180 scale-110' : 'scale-90'
                          }`} />
                        </div>
                        
                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {item.desc}
                        </p>

                        {/* Feature tags */}
                        <div className={`space-y-2 pt-2 overflow-hidden transition-all duration-700 ${
                          isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          {item.features.map((feature, i) => (
                            <div 
                              key={feature}
                              className="flex items-center gap-2.5 text-sm"
                              style={{
                                transitionDelay: `${i * 60}ms`
                              }}
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
                              <span className="text-gray-300 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                   
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom section */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-gray-500 text-sm font-medium">
              <div className="w-1 h-1 bg-gold/50 rounded-full animate-pulse"></div>
              <span>Built for the next generation of decentralized systems</span>
              <div className="w-1 h-1 bg-gold/50 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      </section>

    </>
  );
}
