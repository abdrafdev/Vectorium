import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Download,
  FileText,
  ShieldCheck,
  Sparkles,
  Timer
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const defaultHighlights = [
  "Investor-grade summary with clear positioning and value creation thesis",
  "Transparent token utility, governance mechanics, and network incentives",
  "Execution roadmap with risk controls and compliance-first approach"
];

export default function DocumentPage({
  title,
  subtitle,
  pdfUrl,
  slug,
  intro,
  overview,
  highlights = defaultHighlights,
  downloadLabel = "Download PDF"
}) {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const canonicalUrl = origin ? `${origin}/${slug}` : `/${slug}`;

  const metaDescription = useMemo(() => {
    if (intro) return intro;
    return `${title} — official Vectorium documentation with embedded PDF viewer and secure download.`;
  }, [intro, title]);

  return (
    <div className="bg-vectBlack text-white min-h-screen">
      <Helmet>
        <title>{`${title} | Vectorium`}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${title} | Vectorium`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="/android-chrome-512x512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | Vectorium`} />
        <meta name="twitter:description" content={metaDescription} />
      </Helmet>

      <Header />

      <main className="pt-24 pb-20">
        <section className="container max-w-6xl mx-auto px-6 space-y-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <a href="/" className="inline-flex items-center gap-2 text-gold hover:text-goldLight transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to home
              </a>
              <span className="w-1 h-1 rounded-full bg-gold/70" />
              <span className="uppercase tracking-[0.2em] text-xs text-gray-500">Official Document</span>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-midnight/80 via-ink/80 to-midnight/80 shadow-[0_0_50px_rgba(212,175,55,0.12)]">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10 blur-3xl" />
              <div className="relative p-8 md:p-10 lg:p-12 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold font-semibold text-xs uppercase tracking-[0.25em]">
                  <Sparkles className="w-4 h-4" />
                  Vectorium Docs
                </div>

                <h1 className="text-4xl md:text-5xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gold via-goldLight to-gold">
                  {title}
                </h1>

                {subtitle && (
                  <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
                    {subtitle}
                  </p>
                )}

                <div className="flex flex-wrap gap-3">
                  {overview?.map((item) => (
                    <span key={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-gold" />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <a
                    href={pdfUrl}
                    download
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gold text-black font-bold uppercase tracking-wide hover:bg-goldLight transition-all shadow-[0_0_40px_rgba(212,175,55,0.35)]"
                  >
                    <Download className="w-5 h-5" />
                    {downloadLabel}
                  </a>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                      <FileText className="w-4 h-4 text-gold" /> PDF embedded & downloadable
                    </span>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                      <ShieldCheck className="w-4 h-4 text-gold" /> Served from /public for crawlability
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-8 mt-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl overflow-hidden border border-gold/20 bg-black/60 backdrop-blur-xl shadow-[0_0_40px_rgba(212,175,55,0.1)]">
              <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gold/10 via-ink/40 to-gold/10 border-b border-gold/20">
                <div className="flex items-center gap-2 text-sm font-semibold text-gold">
                  <BookOpen className="w-4 h-4" />
                  Inline viewer
                </div>
                <span className="text-xs text-gray-400">Indexable HTML · Mobile responsive</span>
              </div>
              <div className="bg-black/70">
                <iframe
                  title={`${title} PDF`}
                  src={`${pdfUrl}#view=FitH`}
                  className="w-full min-h-[70vh] md:min-h-[82vh]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-gold/25 bg-gradient-to-b from-midnight/80 to-ink/70 p-6 shadow-[0_0_30px_rgba(212,175,55,0.12)]">
              <div className="flex items-center gap-2 text-sm font-semibold text-gold mb-4">
                <Timer className="w-4 h-4" />
                Document overview
              </div>
              <div className="space-y-3 text-sm text-gray-200">
                <p className="text-gray-300">{intro || "Official Vectorium documentation with structured sections and secure hosting."}</p>
                <div className="grid grid-cols-2 gap-3 text-gray-300">
                  <InfoBadge label="Format" value="PDF" />
                  <InfoBadge label="Access" value="Inline + Download" />
                  <InfoBadge label="SEO" value="Indexable HTML" />
                  <InfoBadge label="Updated" value={new Date().getFullYear()} />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_0_25px_rgba(255,255,255,0.04)]">
              <div className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
                <Sparkles className="w-4 h-4 text-gold" />
                Key highlights
              </div>
              <ul className="space-y-3 text-sm text-gray-200">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gold mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function InfoBadge({ label, value }) {
  return (
    <div className="flex flex-col gap-1 px-3 py-2 rounded-xl bg-black/60 border border-white/10">
      <span className="text-xs uppercase tracking-wider text-gray-500">{label}</span>
      <span className="text-sm font-semibold text-white">{value}</span>
    </div>
  );
}
