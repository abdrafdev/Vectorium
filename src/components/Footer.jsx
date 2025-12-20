import React from "react";
import logo from "../assets/logos/Vectorium logo (3).svg";
import { COMMUNITY_LINKS } from "../config/constants";

export default function Footer() {
  const socialLinks = [
    { 
      name: "Telegram", 
      url: COMMUNITY_LINKS.telegram, 
      icon: "📱",
      gradient: "from-blue-400 to-blue-600"
    },
    { 
      name: "Discord", 
      url: COMMUNITY_LINKS.discord, 
      icon: "💬",
      gradient: "from-indigo-400 to-purple-600"
    },
    { 
      name: "X (Twitter)", 
      url: COMMUNITY_LINKS.twitter, 
      icon: "𝕏",
      gradient: "from-gray-300 to-gray-600"
    },
    { 
      name: "LinkedIn", 
      url: COMMUNITY_LINKS.linkedin, 
      icon: "💼",
      gradient: "from-blue-500 to-blue-700"
    },
    { 
      name: "Facebook", 
      url: COMMUNITY_LINKS.facebook, 
      icon: "📘",
      gradient: "from-blue-600 to-indigo-700"
    },
    { 
      name: "Instagram", 
      url: COMMUNITY_LINKS.instagram, 
      icon: "📸",
      gradient: "from-pink-500 via-purple-500 to-orange-500"
    }
  ];

  const navLinks = [
    { href: "/#about", label: "About", icon: "💎" },
    { href: "/#vision", label: "Vision", icon: "🔮" },
    { href: "/#team", label: "Team", icon: "⚡" },
    { href: "/#docs", label: "Documents", icon: "📡" },
    { href: "/whitepaper", label: "Whitepaper", icon: "📄" },
    { href: "/techdoc", label: "Technical Doc", icon: "🧠" },
    { href: "/tokenomics", label: "Tokenomics", icon: "📊" }
  ];

  return (
    <footer className="relative bg-gradient-to-b pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[150px] animate-pulse-slow"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-[150px] animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[200px]"></div>
      </div>

      {/* Animated Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-scan"></div>
      </div>

      <div className="container relative z-10">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 items-start pb-16">
          
          {/* Logo + Description Section */}
          <div className="space-y-6 group">
            {/* Logo Container */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-gold via-yellow-400 to-gold blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 animate-pulse-slow"></div>
              <div className="relative bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 backdrop-blur-xl p-4 rounded-2xl border-2 border-gold/30 group-hover:border-gold transition-all duration-700 shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                <img
                  src={logo}
                  alt="VECT AI"
                  className="h-16 md:h-20 brightness-110 group-hover:brightness-125 transition-all duration-500 group-hover:scale-105"
                  style={{
                    filter: 'drop-shadow(0 0 15px rgba(212,175,55,0.6))'
                  }}
                />
                {/* Corner Accents */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-gold rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-gold rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Description */}
            <div className="relative">
              <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                Operated by <span className="text-gold font-semibold">BenediXit OÜ</span> under the <span className="text-gold font-semibold">Vectorium Group</span>. VECT • AI tokens are utility-based assets for innovation support and community participation.
              </p>
              
              {/* Status Indicator */}
              <div className="flex items-center gap-2 mt-4 text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                </span>
                <span className="text-gray-500 font-medium">Live & Decentralized</span>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className="text-white font-black text-xl mb-6 flex items-center gap-3">
              <span className="text-2xl">🚀</span>
              <span className="bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">
                Explore
              </span>
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="group flex items-center gap-3 text-sm text-gray-400 hover:text-gold transition-all duration-300 py-2"
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${i * 0.1}s both`
                    }}
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300 group-hover:scale-110">
                      <span className="text-base">{link.icon}</span>
                    </span>
                    <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                    <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Section */}
          <div>
            <h4 className="text-white font-black text-xl mb-6 flex items-center gap-3">
              <span className="text-2xl">🌐</span>
              <span className="bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">
                Community
              </span>
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${i * 0.1}s both`
                  }}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  
                  {/* Card */}
                  <div className="relative flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-xl border border-gray-700 group-hover:border-gold/50 transition-all duration-500 overflow-hidden">
                    {/* Scan Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    {/* Icon */}
                    <span className="relative text-2xl group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                    
                    {/* Name */}
                    <span className="relative text-xs font-bold text-gray-400 group-hover:text-gold transition-colors duration-300">
                      {social.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section (Optional) */}
        <div className="relative mb-16">
          <div className="relative bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 backdrop-blur-xl rounded-3xl border border-gold/20 p-8 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/20 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-black mb-3">
                <span className="bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">
                  Stay Updated
                </span>
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Join our community and never miss important updates about VECT • AI
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={COMMUNITY_LINKS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-yellow-400 rounded-xl font-bold text-black overflow-hidden transition-all duration-500 hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.3)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-white to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <span className="relative text-xl">📱</span>
                  <span className="relative">Join Telegram</span>
                </a>
                <a
                  href={COMMUNITY_LINKS.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-gold/30 hover:border-gold rounded-xl font-bold text-white overflow-hidden transition-all duration-500 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <span className="relative text-xl">💬</span>
                  <span className="relative">Join Discord</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <div className="text-center text-xs text-gray-500 leading-relaxed max-w-4xl mx-auto space-y-4">
            <p className="text-gray-400">
              This project is operated by <span className="text-gold font-semibold">BenediXit OÜ</span> under the <span className="text-gold font-semibold">Vectorium Group</span>. VECT • AI tokens are utility-based digital assets intended for innovation support and community participation. Not available to residents of the U.S., Canada, or restricted jurisdictions.
            </p>
            
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-4 text-gray-600">
              <span>© {new Date().getFullYear()} Vectorium Group</span>
              <span className="hidden sm:inline">•</span>
              <span>All rights reserved</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                Made with <span className="text-red-500 animate-pulse">❤️</span> for the future
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>

    </footer>
  );
}
