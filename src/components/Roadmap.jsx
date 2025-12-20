import React, { useState } from "react";
import { Rocket, TrendingUp, Cpu, CheckCircle, Clock, Sparkles } from "lucide-react";

export default function Roadmap() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const items = [
    { 
      quarter: "Q4 2025", 
      title: "Private Sale", 
      note: "Private allocation & partner onboarding",
      icon: Rocket,
      status: "active",
      color: "from-gold to-goldLight"
    },
    { 
      quarter: "Q1 2026", 
      title: "Public Launch", 
      note: "Listing & liquidity distribution",
      icon: TrendingUp,
      status: "upcoming",
      color: "from-goldLight to-gold"
    },
    { 
      quarter: "Q2 2026", 
      title: "Mainnet Features", 
      note: "IntelliJAM / IntelliGEM integrations",
      icon: Cpu,
      status: "upcoming",
      color: "from-gold via-goldLight to-gold"
    },
  ];

  return (
    <>
      <section id="roadmap" className="section">
        {/* Top scan line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden">
          <div className="h-full bg-gradient-to-r from-transparent via-gold to-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-goldLight to-transparent animate-scan"></div>
          </div>
        </div>

        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-goldLight/5 rounded-full blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Vertical timeline line - hidden on mobile */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden md:block pointer-events-none"></div>

        <div className="container relative z-10 px-6 mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-6 rounded-full bg-midnight/60 backdrop-blur-xl border border-gold/30 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-bold text-gold uppercase tracking-widest">Our Journey</span>
              <div className="w-1 h-1 bg-gold rounded-full animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-gold via-goldLight to-gold bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                Roadmap
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Our journey from private sale to mainnet launch and beyond.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-gold"></div>
              <div className="w-2 h-2 bg-gold rounded-full shadow-[0_0_12px_rgba(212,175,55,0.8)]"></div>
              <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-gold"></div>
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto space-y-8">
            {items.map((item, idx) => {
              const Icon = item.icon;
              const isHovered = hoveredItem === idx;
              const isActive = item.status === 'active';
              
              return (
                <div
                  key={item.quarter}
                  onMouseEnter={() => setHoveredItem(idx)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`group relative transition-all duration-700 ${
                    isHovered ? 'scale-[1.02]' : ''
                  }`}
                  style={{
                    transitionDelay: `${idx * 100}ms`
                  }}
                >
                  {/* Connecting line to center (desktop only) */}
                  <div className="absolute top-1/2 left-1/2 w-16 h-[2px] bg-gradient-to-r from-gold/30 to-transparent -translate-y-1/2 hidden md:block pointer-events-none"></div>

                  {/* Outer glow */}
                  <div className={`absolute -inset-3 bg-gradient-to-r ${item.color} rounded-3xl blur-xl transition-opacity duration-700 ${
                    isHovered ? 'opacity-40' : 'opacity-0'
                  }`}></div>

                  {/* Card */}
                  <div className={`relative bg-gradient-to-br from-midnight/80 via-ink/80 to-midnight/80 backdrop-blur-2xl rounded-3xl border-2 transition-all duration-700 overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.1)] ${
                    isHovered 
                      ? 'border-gold/50 shadow-[0_0_80px_rgba(212,175,55,0.3)]' 
                      : 'border-gold/20'
                  }`}>
                    {/* Top scan line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent">
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-goldLight to-transparent transition-all duration-1000 ${
                        isHovered ? 'animate-scan' : ''
                      }`}></div>
                    </div>

                    {/* Background gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>

                    {/* Corner glows */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-goldLight/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative p-8 flex flex-col md:flex-row items-start gap-6">
                      {/* Number Badge */}
                      <div className="relative flex-shrink-0">
                        {/* Orbiting ring */}
                        <div className={`absolute inset-0 -m-2 border border-gold/20 rounded-full transition-all duration-700 ${
                          isHovered ? 'animate-spin-slow scale-110' : 'scale-100'
                        }`}></div>
                        
                        {/* Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} blur-2xl rounded-full transition-all duration-700 ${
                          isHovered ? 'scale-150 opacity-50' : 'scale-100 opacity-30'
                        }`}></div>
                        
                        {/* Badge */}
                        <div className={`relative w-16 h-16 bg-gradient-to-br ${item.color} backdrop-blur-xl rounded-full border-2 flex items-center justify-center transition-all duration-700 shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:scale-110 ${
                          isActive ? 'border-gold' : 'border-gold/40'
                        }`}>
                          <span className="text-2xl font-black text-black drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                            {idx + 1}
                          </span>
                        </div>

                        {/* Status indicator */}
                        {isActive && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-midnight flex items-center justify-center animate-pulse shadow-[0_0_12px_rgba(34,197,94,0.8)]">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} p-2 transition-all duration-500 ${
                              isHovered ? 'scale-110 shadow-[0_0_20px_rgba(212,175,55,0.5)]' : ''
                            }`}>
                              <Icon className="w-full h-full text-black" />
                            </div>
                            <h3 className="text-2xl font-black text-transparent bg-gradient-to-r from-gold to-goldLight bg-clip-text group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300">
                              {item.title}
                            </h3>
                          </div>
                          
                          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gold/10 border border-gold/30 whitespace-nowrap">
                            <Clock className="w-4 h-4 text-gold" />
                            <span className="text-sm font-bold text-gold">{item.quarter}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {item.note}
                        </p>

                        {/* Status badge */}
                        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-midnight/60 border border-gold/20">
                          {isActive ? (
                            <>
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                              <span className="text-xs font-bold text-green-400 uppercase tracking-wider">In Progress</span>
                            </>
                          ) : (
                            <>
                              <div className="w-2 h-2 bg-gold/50 rounded-full"></div>
                              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Upcoming</span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Progress indicator (desktop) */}
                      <div className="hidden md:flex flex-col items-center gap-2 flex-shrink-0">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-goldLight/20 border flex items-center justify-center transition-all duration-500 ${
                          isActive ? 'border-gold scale-110' : 'border-gold/30'
                        }`}>
                          {isActive ? (
                            <CheckCircle className="w-6 h-6 text-gold" />
                          ) : (
                            <Clock className="w-6 h-6 text-gold/50" />
                          )}
                        </div>
                        <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">
                          {isActive ? 'Active' : 'Pending'}
                        </span>
                      </div>
                    </div>

                    {/* Bottom glow */}
                    <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent transition-opacity duration-700 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="absolute inset-0 bg-goldLight blur-sm"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500">
              <div className="w-1 h-1 bg-gold/50 rounded-full animate-pulse"></div>
              <span>More phases to be announced as we progress</span>
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
