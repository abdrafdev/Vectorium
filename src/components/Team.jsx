import React from "react";
import team1 from "../assets/card.jpg";
import team2 from "../assets/Stefano.jpeg";
import team3 from "../assets/Ivan.png";
import team4 from "../assets/Abdul Rafay.jpeg";
import team5 from "../assets/raffele.jpeg";
import team6 from "../assets/sofia-tahuil.jpeg";
import team7 from "../assets/Oluwaseun.jpeg";
import team8 from "../assets/abdul rehman.jpeg";
import team9 from "../assets/Gerjon.jpeg";
import team10 from "../assets/Angel.jpg";
const teamMembers = [
  { name: "Enea Benedetto", role: "Founder & Vision Lead", img: team1, linkedin: "https://www.linkedin.com/in/enea-benedetto-6bb07610" },
  {
    name: "Stefano Della Valle",
    role: "Lead Blockchain & AI Engineer",
    img: team2,
    linkedin: "https://www.linkedin.com/in/stefanodellavalle",
  },
  { name: "Ivan Sokolov", role: "Security & Infrastructure", img: team3, linkedin: "https://www.linkedin.com/in/vanyasokolov" },
  { name: "Abdul Rafay", role: "Core Blockchain Engineer", img: team4, linkedin: "https://www.linkedin.com/in/abdul-rafay-qureshi-5b8669371" },
  { name: "Raffaele Giove", role: "AI & Automation", img: team5, linkedin: "https://www.linkedin.com/in/raffaele-g-033446252" },
  { name: "Sofia Tahuil", role: "Design Manager", img: team6, linkedin: "https://www.linkedin.com/in/sofia-tahuil" },
  { name: "Oluwaseun Oluwatuyi", role: "Community Manager", img: team7, linkedin: "https://www.linkedin.com/in/oluwaseun-oluwatuyi-77aa2b327" },
  {
    name: "Abdulrahman Omar",
    role: "Community and Partnerships Manager",
    img: team8,
    linkedin: "https://www.linkedin.com/in/abdulrahman-omar-tokendynamo-819422268",
  },
  { name: "Gerjon Hodaj", role: "Social Media Leader", img: team9, linkedin: "https://www.linkedin.com/in/gerjonhodaj" },
  { name: "Angel", role: "Social Media and Community Manager", img: team10, linkedin: "https://www.linkedin.com/in/angel-ekemezie-b20a1521ao" },
];

export default function Team() {
  return (
    <section
      id="team"
      className="section text-gray-100 relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-goldLight/5 via-transparent to-transparent"></div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-goldLight/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="container text-center relative z-10">
        {/* Header Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gold/10 via-gold/5 to-goldLight/10 border border-gold/30 mb-8 backdrop-blur-sm hover:border-gold/50 transition-all duration-300 group">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gold shadow-lg shadow-gold/50"></span>
            </span>
            <span className="text-sm text-gold font-semibold uppercase tracking-widest">
              Our Elite Team
            </span>
            <svg
              className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-gold via-goldLight to-gold bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] leading-tight">
            Meet the Visionaries
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
            The brilliant minds architecting the future of decentralized
            intelligence at
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-goldLight font-bold">
              {" "}
              VECT • AI
            </span>
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-gold/50"></div>
            <div className="w-2 h-2 rounded-full bg-gold shadow-lg shadow-gold/50"></div>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-gold/50"></div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto mb-8">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="group relative"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold via-goldLight to-gold rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 scale-95 group-hover:scale-105"></div>

              {/* Card */}
              <div className="relative bg-gradient-to-br from-midnight/90 via-ink/85 to-midnight/90 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden hover:border-gold/50 transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(212,175,55,0.2)] h-[420px]">
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                {/* Card content */}
                <div className="relative z-10 p-8 flex flex-col items-center h-full">
                  {/* Profile Image */}
                  <div className="relative w-36 h-36 mb-6">
                    {/* Multi-layer glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/40 via-goldLight/30 to-gold/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-110"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-gold via-goldLight to-gold rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-700 animate-pulse"></div>

                    {/* Image container with border animation */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full h-full overflow-hidden rounded-full border-4 border-gold/30 group-hover:border-gold transition-all duration-500 shadow-2xl shadow-gold/20 block cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-goldLight/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-700 ease-out"
                      />

                      {/* Vignette effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>
                    </a>

                    {/* Enhanced status indicator */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 border-4 border-midnight rounded-full shadow-xl shadow-green-500/50">
                      <div className="absolute inset-1 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 bg-green-300/50 rounded-full animate-ping"></div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-goldLight group-hover:from-goldLight group-hover:to-gold transition-all duration-500 mb-2 leading-tight px-4">
                        {member.name}
                      </h3>

                      {/* Role badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                        <p className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Animated separator */}
                    <div className="w-full px-8">
                      <div className="h-[2px] w-0 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto group-hover:w-full transition-all duration-700 ease-out"></div>
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/0 group-hover:border-gold/30 rounded-tl-3xl transition-all duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/0 group-hover:border-gold/30 rounded-br-3xl transition-all duration-500"></div>
                </div>

                {/* Bottom glow effect */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-gold/10 via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="relative group">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-goldLight/20 to-gold/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative bg-gradient-to-br from-midnight/90 via-ink/90 to-midnight/90 backdrop-blur-xl border-2 border-gold/30 rounded-3xl p-12 hover:border-gold/60 transition-all duration-500 overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-gradient"></div>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
                  <span className="text-2xl">🚀</span>
                  <span className="text-sm text-gold font-bold uppercase tracking-wider">
                    Join the Revolution
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold via-goldLight to-gold mb-4">
                  Be Part of Something Extraordinary
                </h3>

                <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                  We're assembling the world's most innovative team to
                  revolutionize AI through blockchain technology. If you're
                  passionate about pushing boundaries, we want to hear from you.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
           <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=Info@vectorium.co&su=Career%20Inquiry&body=Hello%2C%0A%0AI%20am%20interested%20in%20career%20opportunities%20at%20Vectorium."
  target="_blank"
  rel="noopener noreferrer"
  className="group/btn relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold to-goldLight rounded-full text-midnight font-bold text-lg hover:shadow-2xl hover:shadow-gold/50 hover:scale-105 transition-all duration-300 overflow-hidden"
>
  <span className="absolute inset-0 bg-gradient-to-r from-goldLight to-gold opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
  <span className="relative z-10 text-2xl">💼</span>
  <span className="relative z-10">Explore Careers</span>
  <svg className="relative z-10 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</a>

                  </div>

                  <a
                    href="https://t.me/VectoriumProject"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-gold/50 text-gold font-semibold text-lg hover:bg-gold/10 hover:border-gold transition-all duration-300"
                  >
                    <span className="text-2xl">📧</span>
                    <span>Get in Touch</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </section>
  );
}
