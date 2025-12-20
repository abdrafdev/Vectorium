import React, { useState } from "react";
import {
  FileText,
  Settings,
  FileSignature,
  FileBadge,
  ExternalLink,
  Download,
  Copy,
  CheckCircle,
  Sparkles
} from "lucide-react";
import { DOCS, EXPLORER_LINKS, TOKEN_MINT_ADDRESS } from "../config/constants";

const documents = [
  {
    icon: FileText,
    title: "Whitepaper",
    description: "Vision, economics, and governance",
    link: "/whitepaper",
    downloadable: false,
    cta: "View & download"
  },
  {
    icon: Settings,
    title: "Technical Documentation",
    description: "Architecture and protocol design",
    link: "/techdoc",
    downloadable: false,
    cta: "View & download"
  },
  {
    icon: FileBadge,
    title: "Tokenomics",
    description: "Supply, emissions, and allocations",
    link: "/tokenomics",
    downloadable: false,
    cta: "View & download"
  }
];

export default function Documents() {
  const [copied, setCopied] = useState(false);
  const [hoveredDoc, setHoveredDoc] = useState(null);

  const contractAddress = TOKEN_MINT_ADDRESS;

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section id="docs" className="section">
        {/* Top scan line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden">
          <div className="h-full bg-gradient-to-r from-transparent via-gold to-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-goldLight to-transparent animate-scan"></div>
          </div>
        </div>

        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold/5 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-goldLight/5 rounded-full blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Orbiting rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-10">
          <div className="absolute inset-0 border border-gold/10 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-12 border border-goldLight/10 rounded-full animate-spin-reverse"></div>
        </div>

        <div className="container relative z-10 px-6 mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-6 rounded-full bg-midnight/60 backdrop-blur-xl border border-gold/30 shadow-[0_0_40px_rgba(212,175,55,0.15)]">
              <FileText className="w-4 h-4 text-gold" />
              <span className="text-sm font-bold text-gold uppercase tracking-widest">Documentation</span>
              <div className="w-1 h-1 bg-gold rounded-full animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-gold via-goldLight to-gold bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                Official Documents
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Access our official project materials, governance frameworks, and technical references. Each document is verified and hosted under{" "}
              <span className="text-gold font-bold">Vectorium Group</span> for full transparency.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-gold"></div>
              <div className="w-2 h-2 bg-gold rounded-full shadow-[0_0_12px_rgba(212,175,55,0.8)]"></div>
              <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-gold"></div>
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {documents.map((doc, idx) => {
              const Icon = doc.icon;
              const isHovered = hoveredDoc === idx;
              
              return (
                <a
                  key={idx}
                  href={doc.link}
                  download={doc.downloadable}
                  onMouseEnter={() => setHoveredDoc(idx)}
                  onMouseLeave={() => setHoveredDoc(null)}
                  className="group relative block"
                >
                  {/* Outer glow */}
                  <div className={`absolute -inset-2 bg-gradient-to-br from-gold via-goldLight to-gold rounded-3xl blur-xl transition-opacity duration-700 ${
                    isHovered ? 'opacity-40' : 'opacity-0'
                  }`}></div>

                  {/* Card */}
                  <div className={`relative h-full bg-gradient-to-br from-midnight/80 via-ink/80 to-midnight/80 backdrop-blur-2xl rounded-3xl border-2 transition-all duration-700 overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.1)] ${
                    isHovered 
                      ? 'border-gold/50 -translate-y-2 shadow-[0_0_80px_rgba(212,175,55,0.3)]' 
                      : 'border-gold/20'
                  }`}>
                    {/* Top scan line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent">
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-goldLight to-transparent transition-all duration-1000 ${
                        isHovered ? 'animate-scan' : ''
                      }`}></div>
                    </div>

                    {/* Corner glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative p-8 flex flex-col items-center text-center">
                      {/* Icon container */}
                      <div className="relative mb-6">
                        {/* Orbiting ring */}
                        <div className={`absolute inset-0 -m-2 border border-gold/20 rounded-2xl transition-all duration-700 ${
                          isHovered ? 'animate-spin-slow scale-110' : 'scale-100'
                        }`}></div>
                        
                        {/* Glow */}
                        <div className={`absolute inset-0 bg-gold/20 blur-2xl rounded-2xl transition-all duration-700 ${
                          isHovered ? 'scale-150 opacity-40' : 'scale-100 opacity-20'
                        }`}></div>
                        
                        {/* Icon */}
                        <div className="relative w-16 h-16 bg-gradient-to-br from-gold/30 via-goldLight/30 to-gold/30 backdrop-blur-xl rounded-2xl border-2 border-gold/40 flex items-center justify-center group-hover:border-gold transition-all duration-700 shadow-[0_0_30px_rgba(212,175,55,0.3)] group-hover:scale-110">
                          <Icon className="w-8 h-8 text-gold drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
                        </div>
                      </div>

                      {/* Content */}
                      <h4 className="text-xl font-black text-transparent bg-gradient-to-r from-gold to-goldLight bg-clip-text mb-2 group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300">
                        {doc.title}
                      </h4>
                      
                      <p className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                        {doc.description}
                      </p>

                      {/* Download indicator */}
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gold/10 border border-gold/30 group-hover:bg-gold/20 group-hover:border-gold transition-all duration-500">
                        <Download className="w-4 h-4 text-gold group-hover:animate-bounce" />
                        <span className="text-xs font-bold text-gold uppercase tracking-wider">{doc.cta}</span>
                      </div>

                      {/* External link */}
                      <div className={`mt-3 flex items-center gap-1 text-xs text-gray-500 group-hover:text-gold transition-all duration-300 ${
                        isHovered ? 'translate-x-1' : ''
                      }`}>
                        <span>{doc.downloadable ? 'Click to Download' : 'Open document page'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>

                    {/* Bottom glow */}
                    <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent transition-opacity duration-700 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="absolute inset-0 bg-goldLight blur-sm"></div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Smart Contract Section */}
          <div className="relative group max-w-4xl mx-auto">
            {/* Outer glow */}
            <div className="absolute -inset-3 bg-gradient-to-br from-gold via-goldLight to-gold rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>

            <div className="relative bg-gradient-to-br from-midnight/90 via-ink/90 to-midnight/90 backdrop-blur-2xl rounded-3xl border-2 border-gold/30 group-hover:border-gold/50 transition-all duration-700 overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.2)]">
              {/* Top scan line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-goldLight to-transparent animate-scan"></div>
              </div>

              {/* Background effects */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-goldLight/5 rounded-full blur-[100px]"></div>

              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold/30 to-goldLight/30 rounded-xl border border-gold/40 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-transparent bg-gradient-to-r from-gold to-goldLight bg-clip-text">
                      Token Smart Contract
                    </h3>
                    <p className="text-sm text-gray-500">Verified on Solana</p>
                  </div>
                </div>

                {/* Contract Address */}
                <div className="space-y-4">
                  <div className="p-5 bg-midnight/60 backdrop-blur-xl rounded-2xl border border-gold/20 group-hover:border-gold/40 transition-all duration-500">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      {/* Address */}
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-bold">Contract Address</div>
                        <a
                          href={EXPLORER_LINKS.solscanToken}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 text-gold hover:text-goldLight transition-colors duration-300"
                        >
                          <code className="text-sm font-mono break-all">
                            {contractAddress}
                          </code>
                          <ExternalLink className="w-4 h-4 flex-shrink-0 group-hover/link:translate-x-1 transition-transform duration-300" />
                        </a>
                      </div>

                      {/* Copy Button */}
                      <button
                        onClick={handleCopy}
                        className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-500 overflow-hidden ${
                          copied 
                            ? 'bg-green-500/20 border-2 border-green-500/50 text-green-400' 
                            : 'bg-gradient-to-r from-gold/20 to-goldLight/20 border-2 border-gold/40 hover:border-gold text-gold hover:text-goldLight'
                        }`}
                      >
                        {/* Scan effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
                        
                        {copied ? (
                          <>
                            <CheckCircle className="w-4 h-4 relative z-10" />
                            <span className="relative z-10">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 relative z-10" />
                            <span className="relative z-10">Copy Address</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Info badges */}
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                      <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Verified</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gold/10 border border-gold/30">
                      <Sparkles className="w-3 h-3 text-gold" />
                      <span className="text-xs font-bold text-gold uppercase tracking-wider">Solana Network</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
      </section>

    </>
  );
}
