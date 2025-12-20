import React, { useState } from "react";
import { ExternalLink, Shield, Zap, Boxes } from "lucide-react";
import aboutImg from "../assets/logos/image.jpg";

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const links = [
    {
      title: "BenediXit OÜ",
      url: "https://benedix.it",
      icon: Zap,
      description: "Technology Development Partner"
    },
    {
      title: "VECT • AI Department",
      url: "https://test.vectorium.co",
      icon: Boxes,
      description: "AI Innovation Laboratory"
    }
  ];

  return (
    <section id="about" className="section">
      {/* Subtle background elements */}
      

      <div className="container relative z-10">
        {/* Refined Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/5 border border-gold/20 mb-8 backdrop-blur-sm hover:border-gold/30 transition-all duration-300">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
            <span className="text-xs font-semibold text-gold uppercase tracking-[0.2em]">About the Protocol</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">Introducing </span>
            <span className="bg-gradient-to-r from-gold via-goldLight to-gold bg-clip-text text-transparent">VECT • AI</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A sophisticated decentralized intelligence protocol bridging blockchain technology with advanced AI systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start max-w-7xl mx-auto">
          
          {/* LEFT - Refined Visual Display */}
          <div className="flex justify-center lg:justify-end lg:sticky lg:top-32">
            <div className="relative group">
              {/* Subtle glow - more refined */}
              <div className="absolute -inset-8 bg-gradient-to-br from-gold/20 via-transparent to-goldLight/20 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
              
              {/* Main frame */}
              <div className="relative bg-gradient-to-br from-midnight/80 to-ink/80 backdrop-blur-xl p-1 rounded-2xl">
                {/* Border gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/30 via-gold/10 to-goldLight/30 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-midnight via-ink to-midnight rounded-2xl p-10">
                  {/* Image container */}
                  <a
                    href="https://test.vectorium.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative"
                  >
                    <div className="relative">
                      <img
                        src={aboutImg}
                        alt="VECT.AI Platform"
                        decoding="async"
                        className="w-80 mx-auto opacity-95 group-hover:opacity-100 transition-all duration-500"
                        style={{
                          filter: 'drop-shadow(0 10px 40px rgba(212,175,55,0.3))'
                        }}
                      />
                      
                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    </div>

                    {/* Minimalist badge */}
                    <div className="absolute -top-3 -right-3 flex items-center gap-2 bg-gradient-to-r from-gold to-goldLight text-black px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg">
                      <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                      LIVE
                    </div>

                    {/* Link indicator on hover */}
                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 p-3 bg-midnight/90 backdrop-blur-xl border-t border-gold/20 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-sm font-medium text-gold">Explore Platform</span>
                      <ExternalLink className="w-4 h-4 text-gold" />
                    </div>
                  </a>

                  {/* Corner details - subtle */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-gold/30 rounded-tl-lg"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-gold/30 rounded-br-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - Professional Content */}
          <div className="space-y-10">
            {/* Main Content Block */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative space-y-6">
                <div className="space-y-5">
                  <p className="text-lg text-gray-200 leading-relaxed">
                    <span className="font-bold text-white">VECT • AI</span> represents the next evolution of the Vectorium ecosystem — a sophisticated 
                    <span className="text-gold font-medium"> decentralized intelligence protocol</span> that seamlessly integrates blockchain technology, artificial intelligence, and tokenized data infrastructure.
                  </p>
                  
                  <p className="text-base text-gray-300 leading-relaxed">
                    The protocol serves as the foundational layer for the <span className="text-gold font-medium">IntelliJAM</span> and <span className="text-gold font-medium">IntelliGEM</span> systems, forming the technological backbone of the Vectorium Innovation Network. This integration delivers unprecedented levels of intelligence, transparency, and efficiency to digital asset management.
                  </p>
                </div>

                {/* Key features */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {[
                    { label: 'Decentralized', icon: '⚡' },
                    { label: 'Intelligent', icon: '🧠' },
                    { label: 'Scalable', icon: '📈' }
                  ].map((feature, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 p-4 bg-midnight/40 backdrop-blur-sm border border-gold/10 rounded-xl hover:border-gold/30 transition-all duration-300">
                      <span className="text-2xl">{feature.icon}</span>
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ecosystem Links - Professional Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
                <span className="text-xs font-bold text-gold uppercase tracking-[0.2em]">Ecosystem</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
              </div>

              <div className="space-y-3">
                {links.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block"
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Subtle hover glow */}
                      <div className="absolute -inset-px bg-gradient-to-r from-gold/20 to-goldLight/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
                      
                      <div className="relative flex items-center gap-4 p-5 bg-gradient-to-r from-midnight/60 to-ink/60 backdrop-blur-xl rounded-xl border border-gold/10 group-hover:border-gold/30 transition-all duration-300">
                        
                        {/* Icon */}
                        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gold/10 to-goldLight/10 rounded-lg border border-gold/20 group-hover:border-gold/40 transition-all duration-300 flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-gold" strokeWidth={1.5} />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-base font-bold text-white group-hover:text-gold transition-colors duration-300">
                              {link.title}
                            </h3>
                            <ExternalLink className="w-3.5 h-3.5 text-gold/40 group-hover:text-gold transition-colors duration-300" />
                          </div>
                          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            {link.description}
                          </p>
                        </div>
                        
                        {/* Minimal arrow */}
                        <div className="text-gold/30 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>

                        {/* Bottom accent line */}
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Technical Specs */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-5 bg-midnight/40 backdrop-blur-sm border border-gold/10 rounded-xl">
                <div className="text-3xl font-black text-gold mb-2">100%</div>
                <div className="text-sm text-gray-400 font-medium">Decentralized Protocol</div>
              </div>
              <div className="p-5 bg-midnight/40 backdrop-blur-sm border border-gold/10 rounded-xl">
                <div className="text-3xl font-black text-gold mb-2">24/7</div>
                <div className="text-sm text-gray-400 font-medium">Network Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}