import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Vision from "./components/Vision";
import Tokenomics from "./components/Tokenomics";
import Documents from "./components/Documents";
import BuyWidget from "./components/BuyWidget";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Footer from "./components/Footer";
import DocumentPage from "./pages/DocumentPage";
import { DOCS } from "./config/constants";
import { Helmet } from "react-helmet-async";

function LandingPage() {
  return (
    <div className="bg-vectBlack text-white antialiased">
      <Helmet>
        <title>Vectorium | Decentralized Intelligence</title>
        <meta
          name="description"
          content="Vectorium delivers a Web3-native intelligence network with transparent tokenomics, investor-grade documentation, and a secure launchpad for AI-powered assets."
        />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Vectorium | Decentralized Intelligence" />
        <meta
          property="og:description"
          content="Explore Vectorium's AI-driven protocol, token utility, roadmap, and documentation including the whitepaper and technical paper."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/android-chrome-512x512.png" />
      </Helmet>
      <Header />
      <main className="pt-24">
        <Hero />
        <About />
        <Vision />
        <Tokenomics />
        <Documents />
        <BuyWidget />
        <Roadmap />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/whitepaper"
        element={
          <DocumentPage
            title="Vectorium Whitepaper"
            subtitle="Strategic thesis for the Vectorium ecosystem, token model, and community alignment."
            pdfUrl={DOCS.whitepaper}
            slug="whitepaper"
            intro="Deep dive into the vision, economics, and governance that underpin the Vectorium network."
            overview={[
              "Vision & market positioning",
              "Token utility and economics",
              "Governance and roadmap summary"
            ]}
            highlights={[
              "Clear investor narrative with measurable milestones",
              "Token utility mapped to adoption and liquidity goals",
              "Compliance-first framing for global contributors"
            ]}
            downloadLabel="Download whitepaper"
          />
        }
      />
      <Route
        path="/techdoc"
        element={
          <DocumentPage
            title="Vectorium Technical Documentation"
            subtitle="Systems architecture, protocol flows, and infrastructure choices that power Vectorium."
            pdfUrl={DOCS.technicalPaper}
            slug="techdoc"
            intro="Technical stack, security posture, and scalability approach for Vectorium's AI-driven network."
            overview={[
              "Reference architecture & modules",
              "Data, security, and validation flows",
              "Performance, scaling, and reliability"
            ]}
            highlights={[
              "Modular architecture for rapid iteration",
              "Security layers covering data, access, and runtime",
              "Performance targets with cloud and on-chain alignment"
            ]}
            downloadLabel="Download tech doc"
          />
        }
      />
      <Route
        path="/tokenomics"
        element={
          <DocumentPage
            title="Vectorium Tokenomics"
            subtitle="Complete token supply, emissions, and allocation framework for VECT."
            pdfUrl={DOCS.tokenomics}
            slug="tokenomics"
            intro="Investor-grade breakdown of VECT supply schedule, allocations, lockups, and utility mapping."
            overview={[
              "Total supply and vesting",
              "Emission schedule & unlocks",
              "Utility and demand drivers"
            ]}
            highlights={[
              "Transparent allocation model with cliffs and vesting",
              "Emission pacing aligned to network milestones",
              "Clear link between utility, fees, and burn mechanics"
            ]}
            downloadLabel="Download tokenomics"
          />
        }
      />
    </Routes>
  );
}
