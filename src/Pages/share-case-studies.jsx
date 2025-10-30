import Navbar from "../Component/Navbar";
import CaseImg from "../assets/share.png";

export default function ShareCaseStudies() {
  return (
    <div className="bg-[#0b1e48] min-h-screen pt-10">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-16 pb-20">
        <div className="w-full md:w-1/2">
          <img
            src={CaseImg}
            alt="Case Studies"
            className="w-full"
          />
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 text-white">
          <h2 className="text-3xl font-bold mb-4">“Show, Don’t Just Tell.”</h2>
          <p className="text-md">
            Case studies demonstrate the results you deliver. They speak louder than promises — and build unmatched credibility with potential clients.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-t from-[#61b2f9] to-[#0b1e48] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-white">Share Case Studies</h2>

          <div className="grid md:grid-cols-2 gap-10 mb-20 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">📚 What Makes a Good Case Study?</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Clear problem statement your client faced</li>
                <li>Your unique solution and how you implemented it</li>
                <li>Measurable results (savings, growth, efficiency)</li>
                <li>Client testimonial or feedback if available</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">🧠 Where to Share</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Your company website under a “Success Stories” section</li>
                <li>LinkedIn articles and posts</li>
                <li>Client pitches and proposals</li>
                <li>PDF brochures for outbound campaigns</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">📌 Pro Tips</h3>
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <li>Use graphs or charts for visual impact</li>
                <li>Tell a compelling story, not just stats</li>
                <li>Highlight how your service made a real difference</li>
                <li>Focus on industries you want more clients from</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">📈 Real Result</h3>
              <p className="text-gray-800">
                One Modenex case study about logistics automation was published on LinkedIn and received 3,500 views, leading to 2 inbound client calls and signature of a contracts.
              </p>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
}
