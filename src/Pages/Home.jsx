import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom"; 
import ContactForm from "../Component/Contact";
import Navbar from "../Component/Navbar";
import home from "../assets/modenex.png";
import DataAnalytics from "../assets/data-analysis.png";
import CyberSecurity from "../assets/data-security.png";
import NicheImg from "../assets/purpose.png";
import OnlinePresenceImg from "../assets/online-presence.png";
import ColdOutreachImg from "../assets/cold-outreach.png";
import Audit from "../assets/audit.png";
import Referrals from "../assets/talk.png";
import network from "../assets/network.png";
import CaseImg from "../assets/case.png";
import Ads from "../assets/advertise.png";
import Pipline from "../assets/tohfa.png";
import FadeInWhenVisible from "../Component/FadeInWhenVisible";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-[#0b1e48] min-h-screen pt-10 text-white">
      <Navbar />

      <FadeInWhenVisible>
        <div
          id="home"
          className="flex flex-col md:flex-row pb-16 items-center justify-between px-6 md:px-20 pt-10"
        >
          <div className="w-full md:w-1/2 text-left">
            <h5 className="text-white text-sm mb-2">Modenex Solutions LTD</h5>
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight">
              Where Innovation Meets Execution
            </h1>
            <p className="text-gray-200 mt-4">
              We deliver modern IT solutions tailored to small businesses, law firms, and logistics companies. Let's innovate together.
            </p>
            <a
              href="#contact"
              className="inline-block mt-6 px-6 py-3 bg-white text-blue-900 font-semibold rounded hover:bg-gray-100 transition"
            >
              Get Started
            </a>
          </div>

          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img src={home} alt="IT Solutions" className="max-w-full h-auto" />
          </div>
        </div>
      </FadeInWhenVisible>

      {/* What We Provide */}
      <FadeInWhenVisible>
        <section id="work" className="py-20 px-6 md:px-20 bg-gradient-to-t from-[#61b2f9]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-16 text-white">What We Provide?</h2>

            {/* First 2 Cards */}
            <div className="grid md:grid-cols-2 gap-10 mb-20">
              {[
                {
                  img: DataAnalytics,
                  title: "📊 Data Analytics",
                  text: "Transform raw data into actionable insights. We help businesses uncover patterns, trends, and opportunities through dashboards, reports, and predictive analytics.",
                  slug: "data-analytics"
                },
                {
                  img: CyberSecurity,
                  title: "🔒 Cyber Security",
                  text: "Protect your digital infrastructure with modern security solutions. We offer risk assessments, firewall setup, threat detection, and 24/7 monitoring.",
                  slug: "cyber-security"
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg pt-10 pb-10 transition text-left">
                  <img src={card.img} alt={card.title} className="w-full h-32 object-contain mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-center bg-blue-200 rounded-xl p-2 text-black mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-700">{card.text}</p>
                  <Link to={`/${card.slug}`} className="text-blue-600 hover:underline font-medium block mt-4 text-right">
                    See More →
                  </Link>
                </div>
              ))}
            </div>

            {/* Other Service Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: "🚀 Define Your Niche",
                  text: "Specialize in a specific IT service (e.g., cloud computing, cybersecurity) to stand out. Examples: IT support for law firms, cloud migration for SMBs, logistics software.",
                  slug: "purpose",
                  img: NicheImg
                },
                {
                  title: "🌐 Build an Online Presence",
                  text: "Create a website, optimize SEO, stay active on LinkedIn, and manage your Google Business profile to gain visibility and trust.",
                  slug: "build-online-presence",
                  img: OnlinePresenceImg
                },
                {
                  title: "📢 Leverage Cold Outreach",
                  text: "Contact businesses with personalized messages, explain your value clearly, and follow up to convert them into clients.",
                  slug: "cold-outreach",
                  img: ColdOutreachImg
                },
                {
                  title: "🧲 Offer Free IT Audits",
                  text: "Provide free assessments to showcase your expertise. Identify security risks or performance issues to win trust.",
                  img: Audit,
                  slug: "free-it-audit"
                },
                {
                  title: "🗣 Ask for Referrals",
                  text: "Encourage satisfied clients to refer you. Word-of-mouth leads are the most trusted and easiest to convert.",
                  img: Referrals,
                  slug: "ask-for-referrals"
                },
                {
                  title: "🏢 Network Offline",
                  text: "Attend Chamber of Commerce events, tech meetups, or startup expos to make local B2B connections.",
                  img: network,
                  slug: "network-offline"
                },
                {
                  title: "📜 Share Case Studies",
                  text: "Show your success through detailed stories of past work. Post on LinkedIn and your website.",
                  img: CaseImg,
                  slug: "share-case-studies"
                },
                {
                  title: "🛠 Run Ads",
                  text: "Target potential clients with Google, LinkedIn, or Facebook ads. Focus on small business decision-makers.",
                  img: Ads,
                  slug: "run-ads"
                },
                {
                  title: "📈 Track Pipeline",
                  text: "Use tools like HubSpot CRM, Trello, or Notion to manage leads and sales pipeline effectively.",
                  img: Pipline,
                  slug: "track-pipeline"
                }
              ].map((card, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                  <img src={card.img} alt={card.title} className="w-full h-32 object-contain mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-black bg-blue-200 rounded-lg p-2 mb-2">{card.title}</h3>
                  <p className="text-gray-600 mb-4">{card.text}</p>
                  <Link to={`/${card.slug}`} className="text-blue-600 hover:underline font-medium block text-right">
                    See More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* Contact Section */}
      <FadeInWhenVisible>
        <section id="contact" className="bg-[#0b1e48]">
          <ContactForm />
        </section>
      </FadeInWhenVisible>
    </div>
  );
}

export default Home;
